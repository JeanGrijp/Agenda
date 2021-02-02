const User = require('../models/UserModel');

module.exports = {

  async store(req, res) {
    const { email } = req.body;
    const { password } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({
        email,
        password,
      });
    }
    return res.json(user);
  },
};
