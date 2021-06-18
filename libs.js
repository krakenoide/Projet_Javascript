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
		const xhr = new XMLHttpRequest();
		xhr.open("POST", "http://localhost:8080/login", true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(JSON.stringify({ username: `${username}`, password: `${password}` }));
		
		new Promise((resolve, reject) => {
   	 	xhr.onload = () => (xhr.status !== 200) ? reject() :resolve(JSON.parse(xhr.response));
		}).then(user => {
    	return user;
		})
		.catch(() => {});
	}

	static creationUser(userName, password, passwordConfirm) {
		const xhr = new XMLHttpRequest();
		xhr.open("POST", "http://localhost:8080/api/user", true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(JSON.stringify({ username: `${username}`, password: `${password}`, passwordConfirm:`${passwordConfirm}` }));
		
		new Promise((resolve, reject) => {
   	 	xhr.onload = () => (xhr.status !== 200) ? reject() :resolve(JSON.parse(xhr.response));
		}).then(user => {
    	return user;})
    	.catch(() => {});
	}

	static creationTopic(title, date, author_id) {
		const xhr = new XMLHttpRequest();
		xhr.open("POST", "http://localhost:8080/api/topic", true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(JSON.stringify({ title: `${title}`, date: `${date}`, author_id:`${author_id}` }));
		
		new Promise((resolve, reject) => {
   	 	xhr.onload = () => (xhr.status !== 200) ? reject() :resolve(JSON.parse(xhr.response));
		}).then(user => {
    	})
    	.catch(() => {});
	}

	static creationMessage(content, user, date, topic) {
		const xhr = new XMLHttpRequest();
		xhr.open("POST", "http://localhost:8080/api/message", true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(JSON.stringify({ content: `${content}`, content:`${content}`, date: `${date}`, author_id:`${author_id}` }));
		
		new Promise((resolve, reject) => {
   	 	xhr.onload = () => (xhr.status !== 200) ? reject() :resolve(JSON.parse(xhr.response));
		}).then(user => {
    	})
    	.catch(() => {});
	}

	static getAllUser (){
		const xhr = new XMLHttpRequest();
		xhr.open("POST", "http://localhost:8080/api/topic", true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(JSON.stringify({ title: `${title}`, date: `${date}`, author_id:`${author_id}` }));
		
		new Promise((resolve, reject) => {
   	 	xhr.onload = () => (xhr.status !== 200) ? reject() :resolve(JSON.parse(xhr.response));
		}).then(user => {
    	})
    	.catch(() => {});
	}

	static getUser (id){
		const xhr = new XMLHttpRequest();
		xhr.open("GET", `http://localhost:8080/api/user/${id}`, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send();

		new Promise((resolve, reject) => {
   	 	xhr.onload = () => (xhr.status !== 200) ? reject() :resolve(JSON.parse(xhr.response));
		}).then(user => {
		console.log(user);
    	return user;})
    	.catch(() => {});
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

