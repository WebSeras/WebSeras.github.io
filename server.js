const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON data
app.use(express.json());

// Serve ALL folders and files from the root directory
app.use(express.static(__dirname, {
    extensions: ['html']
}));

// The API endpoint that receives new portfolio data
app.post('/api/save-portfolio', (req, res) => {
    const newData = req.body;

    // CRITICAL UPDATE: Point exactly to the interior-design-4 folder
    const jsonPath = path.join(__dirname, 'interior-design-4', 'portfolio.json');

    // Write the new data to the JSON file
    fs.writeFile(jsonPath, JSON.stringify(newData, null, 4), (err) => {
        if (err) {
            console.error('Failed to write file:', err);
            return res.status(500).json({ message: 'Error saving data.' });
        }
        res.json({ message: 'Portfolio successfully updated!' });
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});