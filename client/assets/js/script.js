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
      let col = document.querySelector("#listCard");
      let div = document.createElement('div');
      let card = document.createElement('div');
     let headerCard = document.createElement('div');
     let bodyCard = document.createElement('div');
     let footerCard = document.createElement('div');
      
    

     let title = document.createElement('h3');
     let style = document.createElement('h5');
     let album = document.createElement('h5');
     let annee = document.createElement('h5');
     let origine = document.createElement('h5');
     let caractere = document.createElement('h5');
     let sujet = document.createElement('h5')
     let extrait = document.createElement('div');
     

     div.classList.add('col-sm-4', 'col-md-4', 'mb-5');
     card.classList.add('card', 'text-dark', 'bg-light', 'border-success', 'h-100', 'shadow', 'my-auto');
     headerCard.classList.add('card-header', 'bg-white', 'border-success',);
     footerCard.classList.add('card-footer', 'bg-white', 'border-success',);
     bodyCard.classList.add('card-body',);

     title.classList.add('card-title','text-center','font-weight-bold');
     style.classList.add('card-text');
     album.classList.add('card-text');
     annee.classList.add('card-text');
     origine.classList.add('card-text');
     caractere.classList.add('card-text');
     sujet.classList.add('card-text');
     extrait.classList.add('card-text');
     
      title.innerText = elt.titre;
      style.innerHTML = `<strong style = "color:blue"> Style:  </strong> ${elt.style}`;
      album.innerHTML = `<strong style = "color:blue"> Album:  </strong> ${elt.album}`;
      annee.innerHTML = `<strong style = "color:blue"> Année:  </strong> ${elt.annee}`;
      origine.innerHTML= `<strong style = "color:blue"> Origine:  </strong> ${elt.origine}`;
      caractere.innerHTML = `<strong style = "color:blue"> Caractère:  </strong> ${elt.caractere}`;
      sujet.innerHTML= `<strong style = "color:blue"> Sujet:  </strong> ${elt.sujet}`;
      extrait.innerHTML =`<a href="${elt.extrait}"><i class="fas fa-eye"></i> ${elt.extrait}</a>`;
      

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
 