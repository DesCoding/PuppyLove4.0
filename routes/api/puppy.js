const router = require("express").Router();
const puppyController = require("../../controllers/puppyController");
const verifyToken = require("../../config/verifyToken");
console.log(puppyController);
// Matches with "/api/posts"
router
  .route("/")
  .get(puppyController.findAll)
  .post(verifyToken, puppyController.create);

// Matches with "/userName"
router
  .route("/:userName")
  .get(puppyController.find)
  .put(puppyController.update)
  .delete(puppyController.remove);

router.route("/createSwipe").post(puppyController.create);
module.exports = router;

//model, controler, routes to get saved matches in db for member pages
