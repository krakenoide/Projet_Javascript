import {Libs} from './Libs.js';
import {Message} from './Message.js';
import {User} from './User.js';
import {Topic} from './Topic.js';

export class ModifPage {

    constructor(){

    }

    static versModifPage() {
        Libs.clearDisplay();

        let display = document.body;

        let formulaire = document.createElement("form");
        formulaire.setAttribute("id","form_id");
        display.appendChild(formulaire);

        let modifusername = Libs.addInputField(formulaire, "text", "Modifier le nom d'utilisateur");
        let modifpassword = Libs.addInputField(formulaire, "password", "Modifier le mot de passe");
        let passwordBis = Libs.addInputField(formulaire, "password", "Confirmer le nouveau mot de passe");
        let currentpassword = Libs.addInputField(formulaire, "password", "Entrer le mot de passe actuel");

        let buttonModifUser = document.createElement("input");
        buttonModifUser.setAttribute("class", "button");
        buttonModifUser.setAttribute("type", "submit");
        buttonModifUser.setAttribute("value", "Créer un compte");
        formulaire.appendChild(buttonModifUser);

        buttonModifUser.addEventListener("click", (event) => {
            event.preventDefault();
            creationuser(username.value, password.value, passwordBis.value);
            let user = login(username.value, password.value);
            if (remember.checked) {
                Libs.saveUser(user);
            }
        });

        buttonModifUser.addEventListener("mouseover", function () {
            event.preventDefault();
            event.target.style.color = "#1569CA";
            event.target.style.backgroundColor = "white";
        });

        buttonModifUser.addEventListener("mouseleave", function () {
            event.preventDefault();
            event.target.style.color = "white";
            event.target.style.backgroundColor = "#1569CA";
        });

    }

}
