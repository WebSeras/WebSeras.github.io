const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON data
app.use(express.json());

// Serve ALL folders and files from the root directory
app.use(
  express.static(__dirname, {
    extensions: ["html"],
  }),
);

// The API endpoint that receives new portfolio data
app.post("/api/save-portfolio", (req, res) => {
  const newData = req.body;

  // CRITICAL UPDATE: Point exactly to the interior-design-4 folder
  const jsonPath = path.join(__dirname, "interior-design-4", "portfolio.json");

  // Write the new data to the JSON file
  fs.writeFile(jsonPath, JSON.stringify(newData, null, 4), (err) => {
    if (err) {
      console.error("Failed to write file:", err);
      return res.status(500).json({ message: "Error saving data." });
    }
    res.json({ message: "Portfolio successfully updated!" });
  });
});

// List of directories to completely ignore from the main page index
const IGNORE_LIST = ["node_modules", ".git", "assets", "css", "js"];

app.get("/api/discover-projects", (req, res) => {
  try {
    // Read the top-level items where server.js lives
    const items = fs.readdirSync(__dirname);

    const projects = [];

    items.forEach((item) => {
      const fullPath = path.join(__dirname, item);

      // 1. Must be a directory
      // 2. Must NOT be on your ignore list
      // 3. Must contain an index.html directly inside it (1 level deep check)
      if (
        fs.statSync(fullPath).isDirectory() &&
        !IGNORE_LIST.includes(item) &&
        fs.existsSync(path.join(fullPath, "index.html"))
      ) {
        projects.push({
          folderName: item,
          displayName: item.replace(/[-_]/g, " "),
          path: `./${item}/index.html`, // Relative path for the browser
        });
      }
    });

    res.json(projects);
  } catch (error) {
    console.error("Directory discovery failed:", error);
    res.status(500).json({ error: "Failed to scan directories." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
