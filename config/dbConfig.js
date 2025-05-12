const mongoose = require('mongoose');

const db = async () => {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected");
}

module.exports = db;