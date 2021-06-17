function addInputField (parent,type,placeholder,css_class="inputsmall") {
	let inputfield=document.createElement("input");
	inputfield.setAttribute("type",type);
	inputfield.setAttribute("placeholder",placeholder);
	inputfield.setAttribute("class",css_class);

	parent.appendChild(inputfield);
	return inputfield;
}