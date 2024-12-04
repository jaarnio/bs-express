// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./index.js", // Entry point of your Express server file
  target: "node", // Set the target environment to Node.js
  output: {
    filename: "bs-express.js", // Output bundle file for the server
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  node: {
    __dirname: false, // Ensure that __dirname works as expected
  },
};
