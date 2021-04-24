const JWT = require("./utils/JWT");
// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function (req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  new JWT()
    .verify(req.body.token)
    .then((data) => {
      console.log(data);
      req.body.username = data.username;
      next();
    })
    .catch((err) => {
      res.send("gtfo u don't have the right stuff");
    });
};
