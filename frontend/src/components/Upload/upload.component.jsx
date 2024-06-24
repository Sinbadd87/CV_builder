import useUploadController from "./upload.controller.js";
import {
  UploadContainer,
  FileInput,
  UploadText,
  BrowseButton,
} from "./upload.styles.jsx";

const Upload = ({ onFileSelect }) => {
  const {
    dragging,
    handleDragOver,
    handleDragEnter,
    handleDragLeave,
    handleDrop,
    handleFileSelect,
  } = useUploadController(onFileSelect);

  return (
    <UploadContainer
      className={dragging ? "dragging" : ""}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <FileInput type="file" onChange={handleFileSelect} accept=".pdf" />
      <UploadText>
        <p>Drag & Drop PDF file here</p>
        <p>or</p>
        <BrowseButton
          onClick={() => document.querySelector("input[type=file]").click()}
        >
          Browse File
        </BrowseButton>
      </UploadText>
    </UploadContainer>
  );
};

export default Upload;
