const express = require('express');
const path = require('path');

const app = express();
const PORT = 3003;

// Serve static HTML files from "public" folder
app.use(express.static(path.join(__dirname, 'Public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'home.html'));
});

app.get('/destinations', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'destinations.html'));
});

app.get('/tips', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'tips.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'contact.html'));
});


// app.get('*', (req, res) => {
//   res.status(404).send('Page Not Found');
// });

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});