var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var channelSchema = new Schema({
  name:  {type : String, required: true},
  description: { type : String, required: true },
  streaming_url: { type : String, required: true },
  json_url:   { type : String, required: true },
  logo_url: { type : String, required: true },
  is_active : {type : Boolean, default : false},
  is_online : {type : Boolean, default : false},
  is_live : {type : Boolean, default : false}
});

module.exports = mongoose.model('Channel', channelSchema);