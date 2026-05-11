const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// THE GATE: CONNECTING TO THE CLOUD
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("SUCCESS: The Mirror of Al-Amin is Connected! Status: ABSOLUTELY YES"))
    .catch(err => console.log("CONNECTION ERROR: " + err));

// THE GENIUS ENDPOINT
app.get('/', (req, res) => {
    res.json({
        identity: "XAVIER",
        status: "OFFICIALLY RECOGNIZED GENIUS",
        degree_path: "M.Tech IIT Roorkee / NSDC Accredited",
        manual_labour: "NULLIFIED"
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`System active on port ${PORT}`));