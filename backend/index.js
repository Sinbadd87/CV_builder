// server/index.js
const express = require("express");
// const mongoose = require("mongoose");
const multer = require("multer");
// const pdfParse = require("pdf-parse");
// const fs = require("fs");
const { postUpload } = require("./controllers/upload.controller.js");

const app = express();
const upload = multer({ dest: "uploads/" });
app.use(express.json());

app.post("/upload", upload.single("file"), postUpload);

app.listen(5000, () => console.log("Server started on port 5000"));
