const express = require("express");
const mime = require("mime-types");

const app = express();

// Step 5: Create a custom middleware to set the MIME type
app.use((req, res, next) => {
  const ext = req.path.split(".").pop();
  let mimeType;

  switch (ext) {
    case "":
      mimeType = "application/octet-stream";
      break;
    case "brs":
      mimeType = "text/plain";
      break;
    case "json":
      mimeType = "application/json";
      break;
    case "xml":
      mimeType = "text/xml";
      break;
    default:
      mimeType = mime.lookup(ext);
  }

  if (mimeType) {
    res.setHeader("Content-Type", mimeType);
  }
  next();
});

// Step 6: Use express.static middleware to serve static files from 'www' directory
app.use(express.static("/storage/sd/www"));

// Step 7: Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
