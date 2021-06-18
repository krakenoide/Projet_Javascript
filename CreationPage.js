import { Libs } from './Libs.js';
import { Message } from './Message.js';
import { User } from './User.js';
import { Topic } from './Topic.js';

export class CreationPage {
    
    constructor(){

    }

    static versCreationPage() {
        Libs.clearDisplay();

        let display = document.body;

        let formulaire = document.createElement("form");
        formulaire.setAttribute("id","form_id");
        display.appendChild(formulaire);

        let username = Libs.addInputField(formulaire, "text", "Nom d'utilisateur");
        let password = Libs.addInputField(formulaire, "password", "Mot de passe");
        let passwordBis = Libs.addInputField(formulaire, "password", "Confirmer le mot de passe");

        let remember = document.createElement("input");
        remember.setAttribute("type", "checkbox");
        remember.setAttribute("id", "remember");

        let rememberLabel = document.createElement("label");
        rememberLabel.setAttribute("for", "remember");
        rememberLabel.textContent = "Se souvenir de moi";

        formulaire.appendChild(remember);
        formulaire.appendChild(rememberLabel);


        let buttonCreateUser = document.createElement("input");
        buttonCreateUser.setAttribute("type", "submit");
        buttonCreateUser.setAttribute("value", "Créer un compte");
        formulaire.appendChild(buttonCreateUser);

        buttonCreateUser.addEventListener("click", (event) => {
            event.preventDefault();
            creationuser(username.value, password.value, passwordBis.value);
            let user = login(username.value, password.value);
            if (remember.checked) {
                Libs.saveUser(user);
            }
        });

    }

}
