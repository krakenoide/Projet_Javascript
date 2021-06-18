import {Libs} from './Libs.js';
import {Message} from './Message.js';
import {User} from './User.js';
import {Topic} from './Topic.js';


let isconnected=false;
let activepagenumber=1;

Libs.testImportLib();

function updateheader(){
	header.innerHTML=`<li>
                    <a id="Bouton1" href="">Accueil</a>
                </li>
                <li>
                    <a id="Bouton2" href="">Creer compte</a>
                </li>
                <li>
                    <a id="Bouton3" href="">Se connecter</a>
                </li>`;
	return;
}

let header=document.createElement('ul');
header.setAttribute("class", "nav-links");
header.innerHTML=`<li>
                   <a id="Bouton1" href="">Accueil</a>
                </li>
                <li>
                    <a id="Bouton2" href="">Modifier mon compte</a>
                </li>
                <li>
                    <a id="Bouton3" href="">Se déconnecter</a>
                </li>`;
document.body.appendChild(header);

let inputsmall=document.createElement('input');
inputsmall.setAttribute("type", "text");
inputsmall.setAttribute("class", "inputsmall");
inputsmall.setAttribute("minlength", "5");
inputsmall.setAttribute("maxlength", "100");
inputsmall.setAttribute("placeholder","Titre");
document.body.appendChild(inputsmall);

let inputlarge=document.createElement('input');
inputlarge.setAttribute("type", "text");
inputlarge.setAttribute("class", "inputlarge");
inputlarge.setAttribute("minlength", "5");
inputlarge.setAttribute("maxlength", "3000");
inputlarge.setAttribute("placeholder","Message");
document.body.appendChild(inputlarge);

let button=document.createElement('button');
button.setAttribute("type", "button");
button.setAttribute("class", "button");
button.textContent="Ajouter un nouveau sujet";
document.body.appendChild(button);

let filtre=document.createElement('input');
filtre.setAttribute("type", "text");
filtre.setAttribute("class", "filtre");
filtre.setAttribute("placeholder","Filtre par titre ou par auteur");
document.body.appendChild(filtre);


let topiclist= [
 { id: 1, title: "Titre1", user: "user1", date: "date1", content: "message1"},
 { id: 2, title: "Titre2", user: "user2", date: "date2", content: "message2"},
 { id: 3, title: "Titre3", user: "user3", date: "date3", content: "message3"},
 { id: 4, title: "Titre4", user: "user4", date: "date4", content: "message4"},
];

for (let i=0;i<topiclist.length;i++){
  let topic=document.createElement('h2');
  topic.setAttribute("class", "topicline topic");
  topic.textContent=`${topiclist[i].title}`;
  document.body.appendChild(topic);

  topic.addEventListener("mouseover", function () {
      event.preventDefault();
      event.target.textContent=`${topiclist[i].title} ${topiclist[i].user} ${topiclist[i].date}`;
  });

  topic.addEventListener("mouseleave", function () {
      event.preventDefault();
      event.target.textContent=`${topiclist[i].title}`;
  });

  let btnmodif=document.createElement("button");
  btnmodif.setAttribute("class", "topicline btnmodif");
  btnmodif.innerHTML = "Modifier";
  document.body.appendChild(btnmodif);

  let btnsupp=document.createElement("button");
  btnsupp.setAttribute("class", "topicline btnsupp");
  btnsupp.innerHTML = "Supprimer";
  document.body.appendChild(btnsupp);

}



//eventlistener
let Bouton1=document.getElementById('Bouton1');
Bouton1.addEventListener("click", function () { 
  event.preventDefault();
  Bouton2.style.textDecoration="none";
  Bouton3.style.textDecoration="none";
  event.target.style.textDecoration="underline";
  event.target.style.textDecorationThickness= "4px";
});
let Bouton2=document.getElementById('Bouton2');
Bouton2.addEventListener("click", function () {
  event.preventDefault();
  Bouton1.style.textDecoration="none";
  Bouton3.style.textDecoration="none";
  event.target.style.textDecoration="underline";
  event.target.style.textDecorationThickness= "4px";
});
let Bouton3=document.getElementById('Bouton3');
Bouton3.addEventListener("click", function () {
  event.preventDefault();
  Bouton2.style.textDecoration="none";
  Bouton1.style.textDecoration="none";
  event.target.style.textDecoration="underline";
  event.target.style.textDecorationThickness= "4px";
});

button.addEventListener("mouseover", function () {
  event.preventDefault();
  event.target.style.color="#1569CA";
  event.target.style.backgroundColor="white";
});

button.addEventListener("mouseleave", function () {
  event.preventDefault();
  event.target.style.color="white";
  event.target.style.backgroundColor="#1569CA";
});
