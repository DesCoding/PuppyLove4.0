const jwt = require("jsonwebtoken");

class JWT {
  constructor() {}

  generate(data) {
    console.log(data);
    let tokenData = {
      username: data.userName,
    };
    let token = jwt.sign(tokenData, "secretpassphrase", {
      expiresIn: "60m",
    });
    return token;
  }

  verify(token) {
    return new Promise((resolve, reject) => {
      console.log(token);
      jwt.verify(token, "secretpassphrase", function (err, decoded) {
        if (err) {
          reject(err);
        }
        resolve(decoded);
      });
    });
  }
}

module.exports = JWT;
