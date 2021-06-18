import { Libs } from './Libs.js';
import { User } from './User.js';
import { Topic } from './Topic.js';
import { HomePage } from './HomePage.js';
import { ModifPage } from './ModifPage.js';
import { TopicPage } from './TopicPage.js';
import { LoginPage } from './LoginPage.js';
import { Header } from './Header.js';



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
        remember.setAttribute("class", "rememberme");
        remember.setAttribute("id", "remember");

        let rememberLabel = document.createElement("label");
        rememberLabel.setAttribute("for", "remember");
        rememberLabel.textContent = "Se souvenir de moi";
        rememberLabel.style.color = "#1569CA";

        formulaire.appendChild(remember);
        formulaire.appendChild(rememberLabel);


        let buttonCreateUser = document.createElement("input");
        buttonCreateUser.setAttribute("class", "button");
        buttonCreateUser.setAttribute("type", "submit");
        buttonCreateUser.setAttribute("value", "Créer un compte");
        formulaire.appendChild(buttonCreateUser);

        buttonCreateUser.addEventListener("click", (event) => {
            event.preventDefault();
            Libs.getUser(1);
            Libs.creationUser(username.value, password.value, passwordBis.value);
            let user = Libs.login(username.value, password.value);
            if (remember.checked) {
                Libs.saveUser(user);
            } else {
                Libs.clearStorage();
            }
            Header.connectedHeader();
            HomePage.versPageAccueil();
        });

        buttonCreateUser.addEventListener("mouseover", function () {
            event.preventDefault();
            event.target.style.color = "#1569CA";
            event.target.style.backgroundColor = "white";
        });

        buttonCreateUser.addEventListener("mouseleave", function () {
            event.preventDefault();
            event.target.style.color = "white";
            event.target.style.backgroundColor = "#1569CA";
        });

    }

}
