import { Message } from './Message.js';
import { User } from './User.js';
import { Topic } from './Topic.js';
import { HomePage } from './HomePage.js';
import { CreationPage } from './CreationPage.js';
import { ModifPage } from './ModifPage.js';
import { TopicPage } from './TopicPage.js';
import { LoginPage } from './LoginPage.js';
import { Header } from './Header.js';


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
    	})
		.catch(() => {
			LoginPage.versLoginPage();
			afficherSnackbar("Aucun utilisateur n'as été trouvé, veuillez vérifier votre saisie!");	
		});
	}

	static creationUser(username, password, passwordConfirm) {
		const xhr = new XMLHttpRequest();
		xhr.open("POST", "http://localhost:8080/api/user", true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(JSON.stringify({ username: `${username}`, password: `${password}`, passwordConfirm:`${passwordConfirm}` }));
		
		new Promise((resolve, reject) => {
   	 	xhr.onload = () => (xhr.status !== 200) ? reject() :resolve(JSON.parse(xhr.response));
		}).then(data => {
    		return data;
			
		})
    	.catch(() => {
    		creationpage.versCreationPage();
    		afficherSnackbar("Echec de la création de l'utilisateur");	
    	});
	}

	static modifUser(username, newPassword, newPasswordBis, oldPassword){
		const xhr = new XMLHttpRequest();
		xhr.open("PATCH", "http://localhost:8080/api/user", true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(JSON.stringify({ username: `${username}`, password: `${newPassword}`, passwordConfirm:`${newPasswordBis}`,oldPassword:`${oldPassword}` }));
		
		new Promise((resolve, reject) => {
   	 	xhr.onload = () => (xhr.status !== 200) ? reject() :resolve(JSON.parse(xhr.response));
		}).then(data => {
			Libs.saveUser(data);
    		return data;
			afficherSnackbar("Votre compte a bien été modifié");	
    		versPageAccueil();
		})
    	.catch(() => {
    		creationpage.versModifPage();
    		afficherSnackbar("Une erreur est survenue. Veuillez vérifier votre saisie");	
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
    		afficherSnackbar("Echec de la création du nouveau sujet");	
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
    		afficherSnackbar("Echec de la création du nouveau message");	
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
    	.catch(() => {
    		afficherSnackbar("Requête invalide");
    	});
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
    	.catch(() => {
    		afficherSnackbar("Requête invalide");
    	});
	}

	static getAllUser (){
		Libs.getAll("user");
	}

	static getUser (id){
		Libs.getOne("user",id);
	}

	static getAllTopic(){
		Libs.getAll("topic");
	}

	static getTopic(id){
		Libs.getOne("topic",id);
	}

	static getAllmessage (){
		Libs.getAll("message");
	}

	static getMessage(id) {
		Libs.getOne("message",id);
	}

	static testImportLib() {
		console.log("import lib marche");
		return null;
	}

	static afficherSnackbar(message) {
		let snack=document.createElement("div");
		document.body.appendChild(snack);
		snack.textContent=message;
		snack.className = "show";
		setTimeout(function(){
			document.body.removeChild(snack);
		},5000);
	}

	static saveUser(user) {
		localStorage.setItem("user",JSON.stringify(user));
	}

	static clearStorage(){
		localStorage.clear();
	}

	static loadUser() {
		return JSON.parse(localStorage.getItem("user"));
	}

}

