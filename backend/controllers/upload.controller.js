const pdfParse = require("pdf-parse");
const fs = require("fs");
const extractData = require("./extractData.js");

const postUpload = async (req, res) => {
  const file = req.file;
  const dataBuffer = fs.readFileSync(file.path);

  try {
    const pdfData = await pdfParse(dataBuffer);
    const extractedData = extractData(pdfData.text);
    res.json(extractedData);
  } catch (error) {
    res.status(500).json({ error: "Failed to parse PDF" });
  } finally {
    fs.unlinkSync(file.path);
  }
};

module.exports = { postUpload };
