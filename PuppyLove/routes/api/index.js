const router = require("express").Router();
const postRoutes = require("./puppy");

// Post routes
router.use("/puppy", puppyRoutes);

module.exports = router;
