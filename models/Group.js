const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  membersNum: { type: Number, required: true },
  user: { type: Array, required: false },
  draw: { type: Boolean, default: false },
  description: { type: Array, required: false },
  wishlist: { type: Array, required: false },
  date: { type: Date, default: Date.now }
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
