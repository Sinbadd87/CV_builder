// Dependencies
import { useState } from "react";

// Components
import Upload from "../Upload/upload.component";

// Styles
import { HomeContainer } from "./home.styles";

function Home() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
    // You can perform additional operations such as uploading to a server here
  };
  return (
    <HomeContainer>
      Upload resume
      <Upload onFileSelect={handleFileSelect} />
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
    </HomeContainer>
  );
}

export default Home;
