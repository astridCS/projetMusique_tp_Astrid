// Je définis mon schéma avec mongoose
let mongoose = require('mongoose');

//Je définis une variable musicSchema qui détermine l'ensemble des caractéristiques d'une musique
// En utilisant la méthode Schema de mongoose
let musicSchema = mongoose.Schema({
  // la liste des composants d'une musique et les types associés
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
// Je crée le model
//Les paramètre de la fonction comporte respectivement le nom du model et le schema que j'ai créé
let Music = mongoose.model('musique', musicSchema);

//j'exporte mon model  partout dans mon environnement
module.exports = Music;
