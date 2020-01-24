const {Schema} = require ('mongoose');
const mongoose = require ('mongoose');

const todoSchema = new Schema ({
  name: {type: String, required: true},
  status: {type: Boolean, required: true},
  userCreate: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model ('Todo', todoSchema);