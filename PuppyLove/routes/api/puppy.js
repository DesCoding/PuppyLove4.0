const router = require("express").Router();
const puppyController = require("../../controllers/puppyController");

// Matches with "/api/posts"
router.route("/").get(puppyController.findAll).post(puppyController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(puppyController.findById)
  .put(puppyController.update)
  .delete(puppyController.remove);

router.route("/createSwipe").post(puppyController.create);
module.exports = router;

//model, controler, routs to get saved matches in db for member pages
