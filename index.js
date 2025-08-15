const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/resource_monitor', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

app.get('/', (req, res) => {
  res.send('Dashboard tài nguyên');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});