import {Libs} from './Libs.js';
import {Message} from './Message.js';
import {User} from './User.js';
import {Topic} from './Topic.js';

let display=document.getElementById("display");

let formulaire=document.createElement("form");
display.appendChild(formulaire);

let username=addInputField(formulaire,"text","Nom d'utilisateur");
let password=addInputField(formulaire,"password","Mot de passe");
let passwordbis=addInputField(formulaire,"password","Confirmer le mot de passe");

let remember=document.createElement("input");
remember.setAttribute("type","checkbox");
remember.setAttribute("id","remember");

let rememberlabel=document.createElement("label");
rememberlabel.setAttribute("for","remember");
rememberlabel.textContent("Se souvenir de moi");

formulaire.appendChild(remember);
formulaire.appendChild(rememberlabel);


let create=document.createElement("input");
create.setAttribute("type","submit");
create.setAttribute("value","Créer un compte");
formulaire.appendChild(create);
