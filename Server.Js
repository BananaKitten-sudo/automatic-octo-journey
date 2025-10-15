const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  console.log('✅ Received data:', req.body);
  res.json({ message: 'Login successful!', received: req.body });
});

app.listen(3000, () => console.log('🚀 Server running at http://localhost:3000'));
