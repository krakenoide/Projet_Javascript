import {Libs} from './Libs.js';
import {Message} from './Message.js';
import {User} from './User.js';
import {Topic} from './Topic.js';
import { HomePage } from './HomePage.js';


export class ModifPage {

    constructor(){

    }

    static vaVersModifPage() {
        Libs.clearDisplay();

        let display = document.body;

        let formulaire = document.createElement("form");
        formulaire.setAttribute("id","form_id");
        display.appendChild(formulaire);

        let username = Libs.addInputField(formulaire, "text", "Modifier le nom d'utilisateur");
        let newPassword = Libs.addInputField(formulaire, "password", "Modifier le mot de passe");
        let newPasswordBis = Libs.addInputField(formulaire, "password", "Confirmer le nouveau mot de passe");
        let oldPassword = Libs.addInputField(formulaire, "password", "Entrer le mot de passe actuel");
       
        let buttonCreateUser = document.createElement("input");
        buttonCreateUser.setAttribute("type", "submit");
        buttonCreateUser.setAttribute("value", "Créer un compte");
        formulaire.appendChild(buttonCreateUser);

        buttonCreateUser.addEventListener("click", (event) => {
            event.preventDefault();
            // let userActuel = Libs.loadUser();
            // if(oldPassword.value == userActuel.password){
            //     if(newPassword.value == null){
            //         Libs.modifUser(username.value, oldPassword.value, oldPassword.value,oldPassword.value);
                    
            //     }
            //     Libs.modifUser(username.value, newPassword.value, newPasswordBis.value,oldPassword.value);
            //     let user = login(username.value, newPassword.value);
            //     if (remember.checked) {
            //         Libs.saveUser(user);
            //     }
            // } else {
            //     // Libs.afficherSnackBar("Une erreur est survenue. Veuillez vérifier votre saisie");
            //     vaVersModifPage();
            // }

            
            HomePage.versPageAccueil();
        });

    }

}
