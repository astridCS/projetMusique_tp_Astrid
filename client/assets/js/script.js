/* script de  la page index pour le changement du background*/
function Mycolor(element) {
	var element = document.querySelector("#myID");
	if(element.style.backgroundColor == '' || element.style.backgroundColor == 'black' || element.style.color == 'ghostwhite'){
	  element.style.backgroundColor = 'ghostwhite';
	  element.style.color = 'black';
	  }else{
	   element.style.backgroundColor = 'black';
	   element.style.color = 'ghostwhite';
	  }
	}


 /* script  de la page list.html */
 //  ceci permettra à l'utilisateur de revenir plus rapidement en haut de page (si contenu dense) sans le moindre effort
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) 
  {
    document.getElementById("haut").style.display = "block";
  } 
  else 
  {
    document.getElementById("haut").style.display = "none";
  }
}

function retourHaut() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
} 

let myHeaders = new Headers();
let url = '/music';

let options = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
};

let containerListe = document.querySelector('#liste');
fetch(url, options)
.then((res) => {
  if(res.ok) {
      console.log(res);
      return res.json();
    }
  })
  .then((response) => {
    response.forEach(elt => {
      // après selection de ma div je crée à l'interieur plusieurs div une pour les colonnes,
      //  une pour les cartes et dans chaque carteune div pour le titre le coprs et le body 
    let col = document.querySelector("#listCard");
    let div = document.createElement('div');
    let card = document.createElement('div');
    let headerCard = document.createElement('div');
    let bodyCard = document.createElement('div');
    let footerCard = document.createElement('div');
      
    // Je creer les elements contenant chaque partie de ma carte

     let title = document.createElement('h3');
     let style = document.createElement('h5');
     let album = document.createElement('h5');
     let annee = document.createElement('h5');
     let origine = document.createElement('h5');
     let caractere = document.createElement('h5');
     let sujet = document.createElement('h5')
     let extrait = document.createElement('div');
     
      // J'associe les class à caque elements de mes div
     div.classList.add('col-sm-4', 'col-md-4', 'mb-5');
     card.classList.add('card', 'text-dark', 'bg-light', 'border-success', 'h-100', 'shadow-lg', 'my-auto');
     headerCard.classList.add('card-header', 'bg-white', 'border-success',);
     footerCard.classList.add('card-footer', 'bg-white', 'border-success',);
     bodyCard.classList.add('card-body');

     title.classList.add('card-title','text-center','font-weight-bold');
     style.classList.add('card-text');
     album.classList.add('card-text');
     annee.classList.add('card-text');
     origine.classList.add('card-text');
     caractere.classList.add('card-text');
     sujet.classList.add('card-text');
     extrait.classList.add('card-text');
    //  Je fais correspondre les valeurs a chaque élément de es div
      title.innerText = elt.titre;
      style.innerHTML = `<strong style = "color:blue"> Style:  </strong> ${elt.style}`;
      album.innerHTML = `<strong style = "color:blue"> Album:  </strong> ${elt.album}`;
      annee.innerHTML = `<strong style = "color:blue"> Année:  </strong> ${elt.annee}`;
      origine.innerHTML= `<strong style = "color:blue"> Origine:  </strong> ${elt.origine}`;
      caractere.innerHTML = `<strong style = "color:blue"> Caractère:  </strong> ${elt.caractere}`;
      sujet.innerHTML= `<strong style = "color:blue"> Sujet:  </strong> ${elt.sujet}`;
      extrait.innerHTML =`<a href="${elt.extrait}"><i class="fas fa-eye"></i> ${elt.extrait}</a>`;
      
    //  J'ajoute chaque variable à celle lui correpondant
     card.appendChild(headerCard);
     card.appendChild(bodyCard);
     card.appendChild(footerCard);
     div.appendChild(card);
     col.appendChild(div);
    
    

    headerCard.appendChild(title);
    bodyCard.appendChild(style);
    bodyCard.appendChild(album);
    bodyCard.appendChild(annee);
    bodyCard.appendChild(origine);
    bodyCard.appendChild(caractere);
    bodyCard.appendChild(sujet);
    footerCard.appendChild(extrait);
      
      
    });
  })
 