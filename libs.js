import { Libs } from './Libs.js';
import { Message } from './Message.js';
import { User } from './User.js';
import { Topic } from './Topic.js';
import { CreationPage } from './CreationPage.js';
import { ModifPage } from './ModifPage.js';
import { TopicPage } from './TopicPage.js';
import { LoginPage } from './LoginPage.js';

export class Libs  {

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
		}).then(data => {
    	return data;
    	versPageAccueil();
    	})
		.catch(() => {
			LoginPage.versLoginPage();
			//snackbar:"Aucun utilisateur n'as été trouvé, veuillez vérifier votre saisie!"	
		});
	}

	static creationUser(userName, password, passwordConfirm) {
		const xhr = new XMLHttpRequest();
		xhr.open("POST", "http://localhost:8080/api/user", true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(JSON.stringify({ username: `${username}`, password: `${password}`, passwordConfirm:`${passwordConfirm}` }));
		
		new Promise((resolve, reject) => {
   	 	xhr.onload = () => (xhr.status !== 200) ? reject() :resolve(JSON.parse(xhr.response));
		}).then(data => {
    		return data;
    		versPageAccueil();
		})
    	.catch(() => {
    		creationpage.versCreationPage();
    		//snackbar:"Echec de la création de l'utilisateur"	
    	});

	}

	static creationTopic(title, date, author_id) {
		const xhr = new XMLHttpRequest();
		xhr.open("POST", "http://localhost:8080/api/topic", true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(JSON.stringify({ title: `${title}`, date: `${date}`, author_id:`${author_id}` }));
		
		new Promise((resolve, reject) => {
   	 	xhr.onload = () => (xhr.status !== 200) ? reject() :resolve(JSON.parse(xhr.response));
		}).then(data => {
			topicpage.versTopicPage(data.id);
    	})
    	.catch(() => {
    		versPageAccueil();
    		//snackbar:"Echec de la création du nouveau sujet"	
    	});
	}

	static creationMessage(content, user, date, topic_id) {
		const xhr = new XMLHttpRequest();
		xhr.open("POST", "http://localhost:8080/api/message", true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(JSON.stringify({ content: `${content}`, user:`${user}`, date: `${date}`, topic:`${topic_id}` }));
		
		new Promise((resolve, reject) => {
   	 	xhr.onload = () => (xhr.status !== 200) ? reject() :resolve(JSON.parse(xhr.response));
		}).then(data => {
    		topicpage.versTopicPage(topic_id);
    	})
    	.catch(() => {
    		topicpage.versTopicPage(topic_id);
    		//snackbar:"Echec de la création du nouveau message"	
    	});
	}

	static getOne(subject,id){
		const xhr = new XMLHttpRequest();
		xhr.open("GET", `http://localhost:8080/api/${subject}/${id}`, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send();

		new Promise((resolve, reject) => {
   	 	xhr.onload = () => (xhr.status !== 200) ? reject() :resolve(JSON.parse(xhr.response));
		}).then(data => {
    	return data;})
    	.catch(() => {});
	}

	static getAll(subject){
		const xhr = new XMLHttpRequest();
		xhr.open("GET", `http://localhost:8080/api/${subject}`, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(JSON.stringify({ title: `${title}`, date: `${date}`, author_id:`${author_id}` }));
		
		new Promise((resolve, reject) => {
   	 	xhr.onload = () => (xhr.status !== 200) ? reject() :resolve(JSON.parse(xhr.response));
		}).then(data => {
    	return data;})
    	.catch(() => {});
	}

	static getAllUser (){
		getAll("user");
	}

	static getUser (id){
		getOne("user",id);
	}

	static getAllTopic(){
		getAll("topic");
	}

	static getTopic(id){
		getOne("topic",id);
	}

	static getAllmessage (){
		getAll("message");
	}

	static getMessage(id) {
		getOne("message",id);
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

