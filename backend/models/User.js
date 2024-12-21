import { Schema, model, connect } from "mongoose";
import multer, { diskStorage } from "multer";
import { extname } from "path";

// Define the schema for the user
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  file: {
    type: String, // Store the file path or filename
    required: true,
  },
  password: {
    type: String, // Store the file path or filename
    required: true,
  },
});

const User = model("User", userSchema);

// Set up multer for file upload
const storage = diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Define the folder to store files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + extname(file.originalname)); // Add a timestamp to the filename
  },
});

const upload = multer({ storage: storage });

// Express route to handle form submission
import express, { json, urlencoded } from "express";
const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

// Connect to MongoDB
connect("mongodb://localhost:27017/demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Route to save user data and file
app.post("/add-user", upload.single("file"), async (req, res) => {
  const { name, username, email } = req.body;
  const file = req.file ? req.file.filename : null;

  try {
    const user = new User({ name, username, email, file });
    await user.save();
    res.status(200).send("User added successfully!");
  } catch (err) {
    res.status(500).send("Error saving user data: " + err.message);
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
