var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var historySchema = new Schema({
  created_by : { type: Schema.Types.ObjectId, ref: 'User' },
  updated_by : {
      user_id : { type: Schema.Types.ObjectId, ref: 'User' },
      date_time : {type : Date, default : Date.now}
  }
});

var linkSchema = new Schema({
  name:  {type : String, required: true},
  url: { type : String, required: true },
  history : historySchema,
  is_active : {type : Boolean, default : false}
},  
{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'  }});

module.exports = mongoose.model('Link', linkSchema);