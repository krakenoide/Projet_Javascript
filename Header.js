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

    static addHeaderButtonEventListenersini() {
        
        let buttonPageAccueil = document.getElementById('buttonPageAccueil');
        buttonPageAccueil.style.textDecoration = "underline";
        buttonPageAccueil.style.textDecorationThickness = "4px";
        buttonPageAccueil.addEventListener("click", function () {
            event.preventDefault();
            buttonCreateCompte.style.textDecoration = "none";
            buttonLogin.style.textDecoration = "none";
            event.target.style.textDecoration = "underline";
            event.target.style.textDecorationThickness = "4px";

            HomePage.versPageAccueil();

        });
        let buttonCreateCompte = document.getElementById('buttonCreateCompte');
        buttonCreateCompte.addEventListener("click", function () {
            event.preventDefault();
            buttonPageAccueil.style.textDecoration = "none";
            buttonLogin.style.textDecoration = "none";
            event.target.style.textDecoration = "underline";
            event.target.style.textDecorationThickness = "4px";

            CreationPage.versCreationPage();
        });
        let buttonLogin = document.getElementById('buttonLogin');
        buttonLogin.addEventListener("click", function () {
            event.preventDefault();
            buttonCreateCompte.style.textDecoration = "none";
            buttonPageAccueil.style.textDecoration = "none";
            event.target.style.textDecoration = "underline";
            event.target.style.textDecorationThickness = "4px";

            LoginPage.versLoginPage();
        });       
    }

    static addHeaderButtonEventListenersupdate() {
        let buttonPageAccueil = document.getElementById('buttonPageAccueil');
        buttonPageAccueil.style.textDecoration = "underline";
        buttonPageAccueil.style.textDecorationThickness = "4px";
        buttonPageAccueil.addEventListener("click", function () {
            event.preventDefault();
            buttonModifCompte.style.textDecoration = "none";
            buttonLogout.style.textDecoration = "none";
            event.target.style.textDecoration = "underline";
            event.target.style.textDecorationThickness = "4px";

            HomePage.versPageAccueil();

        });

        let buttonModifCompte = document.getElementById('buttonModifCompte');
        buttonModifCompte.addEventListener("click", function () {
            event.preventDefault();
            buttonPageAccueil.style.textDecoration = "none";
            buttonLogout.style.textDecoration = "none";
            event.target.style.textDecoration = "underline";
            event.target.style.textDecorationThickness = "4px";
            
            ModifPage.versModifPage();

        });
        let buttonLogout = document.getElementById('buttonLogout');
        buttonLogout.addEventListener("click", function () {
            event.preventDefault();
            Header.initializeheader();

            HomePage.versPageAccueil();
        });
    }

    static initializeheader() {
        document.getElementById("header");
        header.innerHTML = `<li>
                     <a id="buttonPageAccueil" href="">Accueil</a>
                  </li>
                  <li>
                      <a id="buttonCreateCompte" href="">Créer compte</a>
                  </li>
                  <li>
                      <a id="buttonLogin" href="">Se connecter</a>
                  </li>`;
        Header.addHeaderButtonEventListenersini();
    }

    static updateheader() {
        document.getElementById("header");
        header.innerHTML = `<li>
                      <a id="buttonPageAccueil" href="">Accueil</a>
                  </li>
                  <li>
                      <a id="buttonModifCompte" href="">Modifier mon compte</a>
                  </li>
                  <li>
                      <a id="buttonLogout" href="">Se déconnecter</a>
                  </li>`;
        Header.addHeaderButtonEventListenersupdate();
    }


}