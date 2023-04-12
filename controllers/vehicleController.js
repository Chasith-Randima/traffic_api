const factory = require("./handlerFactory");
const Vehicle = require("../models/vehicleMode");

exports.createVehicle = factory.createOne(Vehicle);
exports.getAllVehicles = factory.getAll(Vehicle);
exports.getOneVehicle = factory.getOne(Vehicle);
exports.updateOneVehicle = factory.updateOne(Vehicle);
exports.deleteOneVehicle = factory.deleteOne(Vehicle);
