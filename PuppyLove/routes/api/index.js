const router = require("express").Router();
const puppyRoutes = require("./puppy");

// Post routes
router.use("/puppy", puppyRoutes);

module.exports = router;
