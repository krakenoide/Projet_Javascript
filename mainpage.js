let isconnected=false;
let activepagenumber=1;

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

/*
let listesujets= //aller la chercher avec API
for (let i=0;i<listesujets.length;i++){

}
*/



//eventlistener
Bouton1=document.getElementById('Bouton1');
Bouton1.addEventListener("click", function () { 
  event.preventDefault();
  Bouton2.style.textDecoration="none";
  Bouton3.style.textDecoration="none";
  event.target.style.textDecoration="underline";
  event.target.style.textDecorationThickness= "4px";
});
Bouton2=document.getElementById('Bouton2');
Bouton2.addEventListener("click", function () {
  event.preventDefault();
  Bouton1.style.textDecoration="none";
  Bouton3.style.textDecoration="none";
  event.target.style.textDecoration="underline";
  event.target.style.textDecorationThickness= "4px";
});
Bouton3=document.getElementById('Bouton3');
Bouton3.addEventListener("click", function () {
  event.preventDefault();
  Bouton2.style.textDecoration="none";
  Bouton1.style.textDecoration="none";
  event.target.style.textDecoration="underline";
  event.target.style.textDecorationThickness= "4px";
});