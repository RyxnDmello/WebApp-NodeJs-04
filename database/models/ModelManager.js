require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(`${process.env.DATABASE_URI}/${process.env.DATABASE_DB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const LocationSchema = new mongoose.Schema({
  city: {
    required: true,
    type: String,
  },
  latitude: {
    required: true,
    type: Number,
  },
  longitude: {
    required: true,
    type: Number,
  },
});

const AccountSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  locations: {
    required: true,
    type: [
      {
        type: LocationSchema,
        required: true,
        _id: false,
      },
    ],
  },
});

const AccountModel = mongoose.model("accounts", AccountSchema);

module.exports = AccountModel;
