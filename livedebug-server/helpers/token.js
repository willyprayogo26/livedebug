const jwt = require('jsonwebtoken');

module.exports = {
  sign: function (user) {
    return jwt.sign(user, process.env.JWT_SECRET);
  },
  verify: function (token) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET)
    }
    catch (error) {
      return null
    }
  }
}
