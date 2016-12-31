var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username:  {type : String, required: true},
  first_name: { type : String, required: true },
  last_name: { type : String, required: true },
  email: { type : String, required: true },
  hashed_password: { type : String, required: true },
  reset_password_code : String,
  reset_password_code_until : Date,
  is_admin : {type : Boolean, default : false},
  is_manager : {type : Boolean, default : false},
  is_active : {type : Boolean, default : false},
},  
{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'  }});

module.exports = mongoose.model('User', userSchema);