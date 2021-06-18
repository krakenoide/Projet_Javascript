import { Libs } from './Libs.js';
import { Message } from './Message.js';
import { User } from './User.js';
import { Topic } from './Topic.js';
import { HomePage } from './HomePage.js';
import { CreationPage } from './CreationPage.js';
import { TopicPage } from './TopicPage.js';
import { LoginPage } from './LoginPage.js';
import { Header } from './Header.js';



export class ModifPage {

    constructor(){

    }

    static versModifPage() {
        Libs.clearDisplay();

        let display = document.body;

        let formulaire = document.createElement("form");
        formulaire.setAttribute("id","form_id");
        display.appendChild(formulaire);

        let username = Libs.addInputField(formulaire, "text", "Modifier le nom d'utilisateur");
        let newPassword = Libs.addInputField(formulaire, "password", "Modifier le mot de passe");
        let newPasswordBis = Libs.addInputField(formulaire, "password", "Confirmer le nouveau mot de passe");
        let oldPassword = Libs.addInputField(formulaire, "password", "Entrer le mot de passe actuel");
       
        let buttonModifUser = document.createElement("input");
        buttonModifUser.setAttribute("type", "submit");
        buttonModifUser.setAttribute("class", "button");
        buttonModifUser.setAttribute("value", "Modifier mon compte");
        formulaire.appendChild(buttonModifUser);

        buttonModifUser.addEventListener("click", (event) => {
            event.preventDefault();
            let userActuel = Libs.loadUser();
            let user;
            if(newPassword.value == null){
                user = Libs.modifUser(username.value, oldPassword.value, oldPassword.value,oldPassword.value);
            } else {
                user = Libs.modifUser(username.value, newPassword.value, newPasswordBis.value,oldPassword.value);
            }
        
            HomePage.versPageAccueil();
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
