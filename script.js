const jwt = require("jsonwebtoken");

const encrypt = (payload, secret) => {
  // your code here and return token
  const token = jwt.sign(payload, secret, { expiresIn: "1d" });
  return token;
};

const decrypt = (token) => {
  // return decoded payload
  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  if (decoded) {
    return decoded;
  } else {
    return false;
  }
};

module.exports = {
  encrypt,
  decrypt,
};
