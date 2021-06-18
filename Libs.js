import {Message} from './Message.js';
import {User} from './User.js';
import {Topic} from './Topic.js';

export class Libs  {

	static clearHeader(){

	}

	static clearDisplay(){
		let display = document.getElementById("display");
		display.innerHTML="";
		if (document.getElementById("form_id")!==null){
			let formulaire = document.getElementById("form_id");
			document.body.removeChild(formulaire);
		}
	}
	
	static addInputField(parent, type, placeholder, css_class = "inputsmall") {

		let inputfield = document.createElement("input");
		inputfield.setAttribute("type", type);
		inputfield.setAttribute("placeholder", placeholder);
		inputfield.setAttribute("class", css_class);


		parent.appendChild(inputfield);
		return inputfield;
	}
	static login(username, password) {

	}

	static creationUser(userName, password, passwordConfirm) {

	}
	static creationTopic(title, date, author_id) {

	}
	static creationMessage(content, user, date, topic) {

	}

	static getAllUser (){

	}
	static getUser (){

	}
	static getAllTopic(){

	}
	static getTopic(){

	}
	static getAllmessage (){

	}
	static getMessage() {
	
	}
	static testImportLib() {
		console.log("import lib marche");
		return null;
	}

	static saveUser(user) {
		localStorage.setItem("user",JSON.stringify(user));
	}

	static loadUser() {
		return JSON.parse(localStorage.getItem("user"));
	}

}
