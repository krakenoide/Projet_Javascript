import { Libs } from './Libs.js';
import { Message } from './Message.js';
import { User } from './User.js';
import { Topic } from './Topic.js';
import { HomePage } from './HomePage.js';
import { CreationPage } from './CreationPage.js';
import { ModifPage } from './ModifPage.js';
import { TopicPage } from './TopicPage.js';
import { Header } from './Header.js';


export class LoginPage {

    constructor(){

    }

    static versLoginPage() {
        Libs.clearDisplay();

        let display = document.body;

        let formulaire = document.createElement("form");
        formulaire.setAttribute("id","form_id");
        display.appendChild(formulaire);

        let username = Libs.addInputField(formulaire, "text", "Nom d'utilisateur");
        let password = Libs.addInputField(formulaire, "password", "Mot de passe");

        let remember = document.createElement("input");
        remember.setAttribute("type", "checkbox");
        remember.setAttribute("id", "remember");

        let rememberLabel = document.createElement("label");
        rememberLabel.setAttribute("for", "remember");
        rememberLabel.textContent = "Se souvenir de moi";

        formulaire.appendChild(remember);
        formulaire.appendChild(rememberLabel);


        let buttonConnectUser = document.createElement("input");
        buttonConnectUser.setAttribute("type", "submit");
        buttonConnectUser.setAttribute("value", "Se connecter");
        formulaire.appendChild(buttonConnectUser);

        buttonConnectUser.addEventListener("click", (event) => {
            event.preventDefault();
            Header.updateheader();
            HomePage.versPageAccueil();
        });
    }

}
