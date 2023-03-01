var style = document.querySelector('#style');
var auteur = document.querySelector('#auteur');
var titre = document.querySelector('#titre');
var album  = document.querySelector('#album');
var annee = document.querySelector('#annee');
var origine = document.querySelector('#origine');
var caractere = document.querySelector('#caractere');
// var forme = document.querySelector('#forme');
var extrait = document.querySelector('#extrait');
var sujet = document.querySelector('#sujet');

var url = window.location;

var musicId = url.hash;
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
    // forme.value = response.forme;
    extrait.value = response.extrait;
    sujet.value = response.sujet;
   });

   function modification(){
    var tmp = {
        style : style.value,
        auteur : auteur.value,
        titre : titre.value,
        album : album.value,
        annee : annee.value,
        origine : origine.value,
        sujet: sujet.value,
        caractere : caractere.value,
        // forme : forme.value,
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
        window.location.href = '/pages/creationform.html';
      }
    });
  }

  var btn = document.querySelector('#modif');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    modification();
  });

  


           

   





