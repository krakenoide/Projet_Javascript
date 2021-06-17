

var libs = {

	addInputField: function (parent, type, placeholder, css_class = "inputsmall") {
		let inputfield = document.createElement("input");
		inputfield.setAttribute("type", type);
		inputfield.setAttribute("placeholder", placeholder);
		inputfield.setAttribute("class", css_class);


		parent.appendChild(inputfield);
		return inputfield;
	},
	login: function (username, password) {

	},
	creationuser: function (userName, password, passwordConfirm) {

	},
	creationtopic: function (title, date, author_id) {

	},
	creationmessage: function (content, user, date, topic) {

	},

	getAllUser: function () {

	},
	getUser: function () {

	},
	getAllTopic: function () {

	},
	getTopic: function () {

	},
	getAllmessage: function () {

	},
	getMessage: function () {
		console.log("ca marche");
		return 'ca marche';

	}
}