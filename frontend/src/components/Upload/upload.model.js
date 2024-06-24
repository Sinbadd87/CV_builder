const UploadModel = {
  handleDrop: (e, onFileSelect) => {
    e.preventDefault();
    e.stopPropagation();

    const files = [...e.dataTransfer.files];
    if (files && files.length > 0) {
      onFileSelect(files[0]);
    }
  },

  handleFileSelect: (e, onFileSelect) => {
    const file = e.target.files[0];
    onFileSelect(file);
  },
};

export default UploadModel;
