function verscreationpage() {

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


let createbutton=document.createElement("input");
create.setAttribute("type","submit");
create.setAttribute("value","Créer un compte");
formulaire.appendChild(create);

createbutton.addEventListener("click", (event) => {
	event.preventDefault();
	creationuser(username.value,password.value,passwordbis.value);
	let user=login(username.value,password.value);
	if (remember.checked) {
		saveUser(user);
	}
}
}