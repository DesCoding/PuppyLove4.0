const router = require("express").Router();
const puppyRoutes = require("./puppy");
const userRoutes = require("./user");

// Post routes
router.use("/user", userRoutes);
router.use("/puppy", puppyRoutes);

module.exports = router;
