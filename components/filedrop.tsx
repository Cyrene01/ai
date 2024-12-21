import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const FileDropArea = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles); // Process your files here
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="w-full h-48 border-2 border-dashed border-gray-400 rounded-md flex flex-col items-center justify-center bg-gray-100"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-gray-600">Drop the files here...</p>
      ) : (
        <p className="text-gray-600">
          Drag and drop your files here, or click to browse
        </p>
      )}
    </div>
  );
};

export default FileDropArea;
