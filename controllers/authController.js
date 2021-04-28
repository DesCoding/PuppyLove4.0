const db = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const JWT = require("../config/utils/JWT");
// Defining methods for the postsController
module.exports = {
  login: function (req, res) {
    const { username, password } = req.body;
    db.User.findOne({ userName: username })
      .then((foundUser) => {
        //password validation!
        console.log(foundUser);
        bcrypt.compare(password, foundUser.password, function (err, result) {
          // result == true
          if (err) {
            console.log(err);
          }
          if (result) {
            // send token
            let token = new JWT().generate(foundUser);
            res.json({
              token,
            });
          }
        });
        // password validation
        // send a token
      })
      .catch((err) => res.status(422).json(err));
  },
  signup: function (req, res) {
    const { userName, password } = req.body;

    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        db.User.create({ userName, password: hash })
          .then((user) => {
            res.json(user);
          })
          .catch((errr) => {
            console.log(errr);
            res.send("something went wrong", errr);
          });
      });
    });
  },
  auth: function (req, res) {
    let omg = req.body.username;
    console.log(omg);
    res.send(omg);
  },
};
