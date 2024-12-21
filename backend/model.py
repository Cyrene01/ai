from flask import Flask, request, jsonify # type: ignore
from pymongo import MongoClient # type: ignore
import os
from werkzeug.utils import secure_filename # type: ignore

app = Flask(__name__)


client = MongoClient('mongodb://localhost:27017/demo')
db = client['mydatabase']
users_collection = db['users']


app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg', 'gif', 'pdf'}  # Allowed file types

# Helper function to check allowed file extensions
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

# Route to handle user data and file upload
@app.route('/add-user', methods=['POST'])
def add_user():
    if 'file' not in request.files:
        return 'No file part', 400
    file = request.files['file']
    if file.filename == '':
        return 'No selected file', 400
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)

        # Extract other user data
        name = request.form['name']
        username = request.form['username']
        email = request.form['email']

        # Insert into MongoDB
        user = {
            'name': name,
            'username': username,
            'email': email,
            'file': file_path  # Store the file path
        }
        
        users_collection.insert_one(user)
        return 'User added successfully!', 200
    else:
        return 'Invalid file format', 400

if __name__ == '__main__':
    app.run(debug=True)
