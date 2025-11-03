const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
 
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model(process.env.ADMIN_DATABASE, adminSchema);

module.exports = User;