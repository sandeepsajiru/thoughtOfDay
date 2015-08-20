var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var thoughtModel = new Schema(
{
		thought:{type:String},
		date:{type:String}
});

module.exports=mongoose.model('thought', thoughtModel);