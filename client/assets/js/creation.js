function addMusic() {
    
    var style = document.querySelector('#style');
    var auteur = document.querySelector('#auteur');
    var titre = document.querySelector('#titre');
    var album  = document.querySelector('#album');
    var annee = document.querySelector('#annee');
    var origine = document.querySelector('#origine');
    var caractere = document.querySelector('#caractere');
    var extrait = document.querySelector('#extrait');
    var sujet = document.querySelector('#sujet');
  
    var tmp = {
        style : style.value,
        auteur : auteur.value,
        titre : titre.value,
        album : album.value,
        annee : annee.value,
        origine : origine.value,
        sujet : sujet.value,
        caractere : caractere.value,
        extrait : extrait.value,

    };
    let url = '/music';   
    let options = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(tmp)
      }

      fetch(url, options)
      .then((res) => {
        if(res.ok) {
          addOneLine(tmp);
          document.forms['formSup'].reset(); 
        }
      });
    }

    function deleteMusic(id) {
        let url = '/music/' + id;
        let options = {
          method: 'DELETE',
        }
      
        fetch(url, options)
          .then((res) => {
            if(res.ok) {
              window.location.href = '/pages/creationform.html';
            }
          })
    }

    function addOneLine(data) {
        var tab = document.querySelector('#music');
        var newLine = document.createElement('tr');
        for (const prop in data) {
          if(prop != '_id' && prop != '__v' && prop != 'forme') {
            var tmp = document.createElement('td');
            tmp.innerText = data[prop]; 
            newLine.appendChild(tmp);
          }
        }
        
        var tdLink = document.createElement('td');
        var link = document.createElement('a');
        link.href = '/pages/modifform.html#' + data._id;
        link.innerText = 'modifier';
        tdLink.appendChild(link);
        newLine.appendChild(tdLink);

        var tdSupr = document.createElement('td');
        var btnSupr = document.createElement('button');
        btnSupr.innerText = 'Supprimer';
        btnSupr.classList.add('btn', 'btn-outline-danger');
        tdSupr.appendChild(btnSupr);
        newLine.appendChild(tdSupr);
      
        btnSupr.addEventListener('click', (e) => {
          deleteMusic(data._id);
        });
      
        tab.appendChild(newLine);
    }

        var btn = document.querySelector('#valider');
        btn.addEventListener('click', (e) => {
        e.preventDefault();
        addMusic();
        });

        let myHeaders = new Headers();
        let url = '/music';

        let options = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
        };

        fetch(url, options)
        .then((res) => {
            if(res.ok) {
              return res.json();
            }
          })
          .then((response) => {
          console.log(response);
            response.forEach(elt => {
            addOneLine(elt);
            });
        })
      



      
    
    
