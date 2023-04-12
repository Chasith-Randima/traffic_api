const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const vehicleSchema = new mongoose.Schema(
  {
    vehicleNumber: {
      type: String,
      required: [true, "Plese add you Vehicle Numeber"],
    },
    currentOwner: {
      type: String,
      required: [true, "Plese add you Current Owner"],
    },
    currentOwnerCity: {
      type: String,
      required: [true, "Plese add current owner city"],
    },
    currentOwnerAddress: {
      type: String,
      required: [true, "Plese add current owner address"],
    },
    conditionsAndNotes: {
      type: String,
      // required: [true, "Plese add current owner address"],
    },
    make: {
      type: String,
      // required: [true, "Plese add current owner address"],
    },
    model: {
      type: String,
      // required: [true, "Plese add current owner address"],
    },
    yearOfManufacture: {
      type: String,
      // required: [true, "Plese add current owner address"],
    },
    dateOfRegistration: {
      type: String,
      // required: [true, "Plese add current owner address"],
    },
    engineCapacity: {
      type: String,
      // required: [true, "Plese add current owner address"],
    },
    fuelType: {
      type: String,
      // required: [true, "Plese add current owner address"],
    },
    statusWhenRegisterd: {
      type: String,
      // required: [true, "Plese add current owner address"],
    },
    crType: {
      type: String,
      // required: [true, "Plese add current owner address"],
    },
    typeOfBody: {
      type: String,
      // required: [true, "Plese add current owner address"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
module.exports = Vehicle;
