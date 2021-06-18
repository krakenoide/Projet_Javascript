import {Message} from './Message';
import {User} from './User';
import {Topic} from './Topic';

export class Libs  {

	static addInputField(parent, type, placeholder, css_class = "inputsmall") {
		let inputfield = document.createElement("input");
		inputfield.setAttribute("type", type);
		inputfield.setAttribute("placeholder", placeholder);
		inputfield.setAttribute("class", css_class);


		parent.appendChild(inputfield);
		return inputfield;
	}
	static logi(username, password) {

	}

	static creationuser(userName, password, passwordConfirm) {

	}
	static creationtopic(title, date, author_id) {

	}
	static creationmessage(content, user, date, topic) {

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
		console.log("ca marche");
		return 'ca marche';
	}
}
