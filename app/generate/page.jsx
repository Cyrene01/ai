"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Import Select components
import { Textarea } from "@/components/ui/textarea"; // Import Textarea component

const FileDropArea = ({ fileType }) => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles); // Handle the dropped files
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="w-61 h-32 border-2 border-dashed bg-accent rounded-lg flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-gray-600">Drop the files here...</p>
      ) : (
        <p className="text-gray-600">
          Drag and drop your {fileType} files here, or click to browse
        </p>
      )}
    </div>
  );
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="file"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[220px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="file">File</TabsTrigger>
            <TabsTrigger value="text">Text</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>

            <Button>Generate</Button>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* File Drop Area Tab */}
            <TabsContent value="file" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-white">File Upload</h3>
                <FileDropArea fileType="file" />

                {/* Dropdown Field for File Tab */}
                <div className="flex flex-col space-y-4">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose file type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pdf">PDF</SelectItem>
                      <SelectItem value="doc">DOC</SelectItem>
                      <SelectItem value="xls">XLS</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>

            {/* Text Tab */}
            <TabsContent value="text" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-white">Text Upload</h3>

                {/* Textarea for Text Tab */}
                <Textarea placeholder="Type your message here." />
              </div>
            </TabsContent>

            {/* Video Tab */}
            <TabsContent value="video" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-white">Video Upload</h3>
                <FileDropArea fileType="video" />

                {/* Dropdown Field for Video Tab */}
                <div className="flex flex-col space-y-4">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose video format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mp4">MP4</SelectItem>
                      <SelectItem value="avi">AVI</SelectItem>
                      <SelectItem value="mov">MOV</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>

            {/* Generate Tab */}
            <TabsContent value="generate" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-white">Generate</h3>
                <FileDropArea fileType="generated" />

                {/* Dropdown Field for Generate Tab */}
                <div className="flex flex-col space-y-4">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
