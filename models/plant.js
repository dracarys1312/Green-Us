var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CreateUpdatedAt = require('mongoose-timestamp');

plantSchema = new Schema( {
  commonname: {
    type: String,
    require: true
  },
  othername: String,
  type: {
      type: String,
      require: true
  },
  difficulty: String,
  time: String,
  instruction: String,
  watering: String,
  sunrequirements: String,
  prunetrain: String,
  propagating: String,
  disease: String,
  meaning: String,
  images: String
});

Plant.plugin(CreateUpdatedAt);
Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;
