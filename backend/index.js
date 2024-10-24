 require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const https = require("https"); // To support HTTPS
const fs = require("fs"); // To read SSL certificate files

// Import models
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UsersModel } = require("./model/UsersModel");

// Server setup
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// CORS configuration - Adjust according to frontend URL (with HTTPS)
app.use(cors({
  origin: "https://stockora-frontend.vercel.app",
  methods: ["POST", "GET", "DELETE"],
  credentials: true,
}));

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit process if MongoDB connection fails
  });

// Routes
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    console.error('Error fetching holdings:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Other routes, e.g., /allPositions, /newOrder, /deleteHoldings, etc., are similar

// User login
app.post('/api/login', async (req, res) => {
  const { name, mobile_no, password } = req.body;

  try {
    // Mock authentication (replace with real validation logic)
    const user = await UsersModel.findOne({ name, mobile_no, password });
    if (user) {
      res.status(200).json({ message: 'Login successful', user });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// User signup
app.post('/api/signup', async (req, res) => {
  const { name, mobile_no, password } = req.body;

  try {
    const newUser = new UsersModel({ name, mobile_no, password });
    await newUser.save();
    res.status(200).json({ message: 'Signup successful' });
  } catch (error) {
    console.error('Error signing up user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// HTTPS server setup (optional, you can deploy to platforms like Vercel for automatic HTTPS)
if (process.env.USE_HTTPS === "true") {
  const options = {
    key: fs.readFileSync("/path/to/ssl/key.pem"),
    cert: fs.readFileSync("/path/to/ssl/cert.pem"),
  };

  https.createServer(options, app).listen(PORT, () => {
    console.log(`Secure server running on port ${PORT}`);
  });
} else {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
