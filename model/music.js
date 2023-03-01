let mongoose = require('mongoose');

let musicSchema = mongoose.Schema({
  style: String,
  auteur: String,
  titre: String,
  album: String,
  annee: String,
  origine: String,
  sujet: String,
  caractere: String,
  extrait: String,
  
});

let Music = mongoose.model('musique', musicSchema);
module.exports = Music;
