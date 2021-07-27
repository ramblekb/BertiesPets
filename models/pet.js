const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  name: { type: String, required: true },
  status: { type: String, required: true },
  species: { type: String, required: true },
  sold: {type: Boolean},
  available: {type: Boolean}
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
