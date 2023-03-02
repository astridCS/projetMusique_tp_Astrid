// je reccupère les informations de mon formulaire
var style = document.querySelector('#style');
var auteur = document.querySelector('#auteur');
var titre = document.querySelector('#titre');
var album  = document.querySelector('#album');
var annee = document.querySelector('#annee');
var origine = document.querySelector('#origine');
var caractere = document.querySelector('#caractere');
var extrait = document.querySelector('#extrait');
var sujet = document.querySelector('#sujet');

var url = window.location;
 // J'utilise la propriété hash de mon url pour récupérer l'identifiant de la music
var musicId = url.hash;
// J'utilise  aussi la méthode substring(<indiceDepart>, <indiceFin>) indiceFin étant optionel
musicId = musicId.substring(1);
console.log(musicId);

let myHeaders = new Headers();
let urlFinal = '/music/' + musicId;

let options = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
};

fetch(urlFinal, options)
  .then((res) => {
    if(res.ok) {
       // on extraie le résultat en JSON
      return res.json();
    }
   }).then((response) => {
    console.log(response)
    style.value = response.style;
    auteur.value = response.auteur;
    titre.value = response.titre;
    album.value = response.album;
    annee.value = response.annee;
    origine.value = response.origine;
    caractere.value = response.caractere;
    extrait.value = response.extrait;
    sujet.value = response.sujet;
   });

   function modification(){
     //  je creé un Objet temporaire respectant la même structure que le schéma du model
    var tmp = {
      style : style.value,
      auteur : auteur.value,
      titre : titre.value,
      album : album.value,
      annee : annee.value,
      origine : origine.value,
      sujet: sujet.value,
      caractere : caractere.value,
      extrait : extrait.value

    };
    let urlModif = '/music/' + musicId;

    let options = {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(tmp)
    }

    fetch(urlModif, options)
    .then((res) => {
      if(res.ok) {
        // J’utilise window.location.href pour me rediriger vers la liste de musique dès que la modification est enregistrée !
        window.location.href = '/pages/creationform.html';
      }
    });
  }

  var btn = document.querySelector('#modif');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    modification();
  });

  


           

   





