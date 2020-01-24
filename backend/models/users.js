const {Schema} = require ('mongoose');
const mongoose = require ('mongoose');

const userSchema = new Schema ({
  username: {type: String, required: true,index:{ unique:true}},
  email: {type: String, required: true,index:{ unique:true}},
  password: {type: String, required: true},
  list:[{  type: Schema.Types.ObjectId, ref: 'Todo' }]
});

module.exports = mongoose.model ('User', userSchema);