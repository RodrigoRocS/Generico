const UserService = require('../services')

const validateNewUser = async (req, res, next) => {
  const { userName, email, password } = req.body;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const user = await UserService.getByEmail(email);

  if (user) {
    return res.status(409).json({
      message: "User already registered",
    });
  }
  if (userName.length < 3) {
    return res.status(400).json({
      message: '"Name" length must be at least 3 characters long',
    });
  }
  if (!isEmailValid.test(email)) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }
  if (password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }

  next();
};

module.exports = validateNewUser;
