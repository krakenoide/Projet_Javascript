import { Libs } from './Libs.js';
import { Message } from './Message.js';
import { User } from './User.js';
import { Topic } from './Topic.js';
import { HomePage } from './HomePage.js';
import { CreationPage } from './CreationPage.js';
import { ModifPage } from './ModifPage.js';
import { TopicPage } from './TopicPage.js';
import { LoginPage } from './LoginPage.js';

export class Header {

    static addHeaderButtonEventListeners() {
        //eventlistener
        let buttonPageAccueil = document.getElementById('Bouton1');
        buttonPageAccueil.addEventListener("click", function () {
            event.preventDefault();
            buttonCompte.style.textDecoration = "none";
            buttonLoginLogout.style.textDecoration = "none";
            event.target.style.textDecoration = "underline";
            event.target.style.textDecorationThickness = "4px";

            HomePage.versPageAccueil();

        });
        let buttonCompte = document.getElementById('Bouton2');
        buttonCompte.addEventListener("click", function () {
            event.preventDefault();
            buttonPageAccueil.style.textDecoration = "none";
            buttonLoginLogout.style.textDecoration = "none";
            event.target.style.textDecoration = "underline";
            event.target.style.textDecorationThickness = "4px";

            CreationPage.versCreationPage();
        });
        let buttonLoginLogout = document.getElementById('Bouton3');
        buttonLoginLogout.addEventListener("click", function () {
            event.preventDefault();
            buttonCompte.style.textDecoration = "none";
            buttonPageAccueil.style.textDecoration = "none";
            event.target.style.textDecoration = "underline";
            event.target.style.textDecorationThickness = "4px";
            Libs.clearDisplay();
        });

       
    }

    static intializeHeader() {
        document.getElementById("header");
        header.innerHTML = `<li>
                     <a id="Bouton1" href="">Accueil</a>
                  </li>
                  <li>
                      <a id="Bouton2" href="">Modifier mon compte</a>
                  </li>
                  <li>
                      <a id="Bouton3" href="">Se déconnecter</a>
                  </li>`;
        Header.addHeaderButtonEventListeners();
    }

    static updateheader() {
        document.getElementById("header");
        header.innerHTML = `<li>
                      <a id="Bouton1" href="">Accueil</a>
                  </li>
                  <li>
                      <a id="Bouton2" href="">Creer compte</a>
                  </li>
                  <li>
                      <a id="Bouton3" href="">Se connecter</a>
                  </li>`;
        Header.addHeaderButtonEventListeners();
        return;

    }


}