
const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  projectName: String,
  tokenAddress: String,
  submittedBy: String
});

module.exports = mongoose.model('Application', ApplicationSchema);
