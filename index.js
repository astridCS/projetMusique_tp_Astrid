/*const http = require('http');
const server = http.createServer(function(req,res){
    console.log('server démarré !');
    res.end('Message envoyé');
});
 server.listen(3000);
*/
// J'appelle le package express grâce à require
const express = require('express');
var app = express();

/*
  J'initialise une variable liste qui contiendra
  l'ensemble des valeurs exporté depuis le fichier
  liste.js
*/

const Liste = require('./data/liste');
app.use('/pages', express.static('./client/pages'));
app.use('/assets', express.static('./client/assets'));
app.use(require('express').json());

// Quand mon application est sollicitée à la racine , je lui envoie le fichier index.html à afficher
app.get('/', (req, res) =>{
    res.sendFile(__dirname +'/client/index.html');
});

//app.use('/client/assets/css', express.static(_dirname + '/client/assets/css/'))


//Je récupère l'adresse de ma BdD MONGO sur mongo atlas
const mongoose = require('mongoose');
const Music = require('./model/music');
const uri ='mongodb+srv://astrid:astrid@astrid07.reoqofs.mongodb.net/?retryWrites=true&w=majority';
let promise = mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

promise.then((db) => {
    console.log('DB connecté');
    app.listen(3000, () => {
      console.log('Listening on port 3000 !');
    });
  })
  
  app.post('/music', (req,res) => {
    var newMusic = new Music(req.body);
    newMusic.save().then((obj) => {
      res.sendStatus(200);
    }).catch((err) => {
      console.log(err);
        return res.send(500);
    });
    });


  app.get('/music', (req, res) => {
    // / j'utilise la méthode find() en utilisant le model pour effectuer une recherche dans ma base de données
    Music.find({}).then((obj) => {
      return res.send(obj);
    }).catch((err) => {
    console.log(err);
        return res.send(500);
  });
  });

  app.delete('/music/:id', (req, res) =>{
    // Pour la modification de la base, j’utilisera la méthode deleteOne() en filtrant mon résultat grâce à _id

    Music.deleteOne({_id: req.params.id}).then((obj) => {
      res.sendStatus(200);
    }).catch((err) => {
      console.log(err);
      res.send(500);
    });
  });


  app.put('/music/:id', (req, res) => {
    // j'utilise le model pour effectuer ma recherche
    // je filtre ma recherche avec l'ID et je donne les modifications avec req.body

    Music.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true})
    .then((obj) => {
      return res.send(obj);
    }).catch((err) => {
      console.log(err);
      return res.send(500);
    });
  });

  // Le :id sera autimatiquement transofrmé par l'identifiant envoyé par fetch

  app.get('/music/:id', (req, res) => {
    Music.findOne({_id: req.params.id})
      .then((obj) => {
        return res.send(obj);
      }).catch((err) => {
        console.log(err);
        return res.send(500);
      });
  });
  