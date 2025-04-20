
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  walletAddress: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('User', UserSchema);
