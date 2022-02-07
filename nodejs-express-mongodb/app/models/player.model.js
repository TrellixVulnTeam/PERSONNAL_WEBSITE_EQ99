// Model de joueur
// module.exports = (mongoose) => {
//   var schema = mongoose.Schema(
//       {
//         nickname: String,
//         score: Number
//       }
//   );

//   const Player = mongoose.model("player", schema);
//   return Player;
// };

const mongoose = require('mongoose');
  const schema = mongoose.Schema(
      {
        nickname: String,
        score: Number
      })
module.exports = mongoose.model('Player', schema)
