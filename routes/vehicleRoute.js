const express = require("express");
const router = express.Router();
const vehicleController = require("../controllers/vehicleController");

router
  .route("/")
  .get(vehicleController.getAllVehicles)
  .post(vehicleController.createVehicle);

router
  .route("/:id")
  .get(vehicleController.getOneVehicle)
  .patch(vehicleController.updateOneVehicle)
  .delete(vehicleController.deleteOneVehicle);

module.exports = router;
