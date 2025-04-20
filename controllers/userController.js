
const User = require('../models/User');

exports.connectWallet = async (req, res) => {
  const { walletAddress } = req.body;
  if (!walletAddress) return res.status(400).json({ error: 'Wallet required' });

  let user = await User.findOne({ walletAddress });
  if (!user) user = await User.create({ walletAddress });

  res.json({ user });
};
