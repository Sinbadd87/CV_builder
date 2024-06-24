import { useState } from "react";
import UploadModel from "./upload.model.js";

const useUploadController = (onFileSelect) => {
  const [dragging, setDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDrop = (e) => {
    UploadModel.handleDrop(e, onFileSelect);
    setDragging(false);
  };

  const handleFileSelect = (e) => {
    UploadModel.handleFileSelect(e, onFileSelect);
  };

  return {
    dragging,
    handleDragOver,
    handleDragEnter,
    handleDragLeave,
    handleDrop,
    handleFileSelect,
  };
};

export default useUploadController;
