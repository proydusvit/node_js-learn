const register = require("./register.js");
const login = require("./login.js");
const getCurrent = require("./getCurrent.js");
const logout = require("./logout.js");
const verify = require("./verify.js");
const updateAvatar = require("./updateAvatar.js");
// const bcrypt = require("bcryptjs");

// const hashPassword = async (password) => {
//   // const salt = await bcrypt. genSalt (10)
//   // console. log (salt);
//   const result = await bcrypt.hash(password, 10);
//   // console.log(result);
//   const result1 = await bcrypt.compare(password, result);
//   console.log(result1);
//   const result2 = await bcrypt.compare("123456", result);
//   console.log(result2);
// };

// hashPassword("123456");

module.exports = {
  register,
  login,
  logout,
  verify,
  getCurrent,
  updateAvatar
};
