
class libs {

	constructor() {

	}

	addInputField(parent, type, placeholder, css_class = "inputsmall") {
		let inputfield = document.createElement("input");
		inputfield.setAttribute("type", type);
		inputfield.setAttribute("placeholder", placeholder);
		inputfield.setAttribute("class", css_class);


		parent.appendChild(inputfield);
		return inputfield;
	}
	login(username, password) {

	}
	creationuser(userName, password, passwordConfirm) {

	}
	creationtopic(title, date, author_id) {

	}
	creationmessage(content, user, date, topic) {

	}

	getAllUser() {

	}
	getUser() {

	}
	getAllTopic() {

	}
	getTopic() {

	}
	getAllmessage() {

	}
	getMessage() {
		console.log("ca marche");
		return 'ca marche';

	}
}
const instance = new libs();
export { instance as libs };