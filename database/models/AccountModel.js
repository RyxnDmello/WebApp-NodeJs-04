require("dotenv").config();

const { Schema, model } = require("mongoose");

const locationSchema = new Schema({
  city: {
    type: Schema.Types.String,
    required: true,
  },
  latitude: {
    type: Schema.Types.Number,
    required: true,
  },
  longitude: {
    type: Schema.Types.Number,
    required: true,
  },
});

const accountSchema = new Schema({
  username: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  locations: [
    {
      type: locationSchema,
      _id: false,
    },
  ],
});

const accountModel = model("account", accountSchema);

module.exports = accountModel;

