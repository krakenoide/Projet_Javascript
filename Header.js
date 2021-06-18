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
        underlineMyButton(buttonPageAccueil);
        buttonPageAccueil.addEventListener("click", function () {
            underlineTarget(event);
            HomePage.versPageAccueil();

        });
        let buttonCreateCompte = document.getElementById('buttonCreateCompte');
        buttonCreateCompte.addEventListener("click", function () {
            underlineTarget(event);
           
            CreationPage.versCreationPage();
        });
        let buttonLogin = document.getElementById('buttonLogin');
        buttonLogin.addEventListener("click", function () {
            underlineTarget(event);
        
            LoginPage.versLoginPage();
        });       
    }

    static addHeaderButtonEventListenersupdate() {
        let buttonPageAccueil = document.getElementById('buttonPageAccueil');
        underlineMyButton(buttonPageAccueil);
        buttonPageAccueil.addEventListener("click", function () {
            underlineTarget(event);
            
            HomePage.versPageAccueil();

        });

        let buttonModifCompte = document.getElementById('buttonModifCompte');
        buttonModifCompte.addEventListener("click", function () {
            event.preventDefault();
            buttonPageAccueil.style.textDecoration = "none";
            buttonLogout.style.textDecoration = "none";
            underlineTarget(event);

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

function underlineTarget(event){
    resetTextDecoration();
    event.preventDefault();
    event.target.style.textDecoration = "underline";
    event.target.style.textDecorationThickness = "4px";
}

function underlineMyButton(b){
    resetTextDecoration();
    b.style.textDecoration = "underline";
    b.style.textDecorationThickness = "4px";
}

function resetTextDecoration(){
    let bPA = document.getElementById('buttonPageAccueil');
    bPA.style.textDecoration = "none";
    let bMC = document.getElementById('buttonModifCompte');
    if(bMC != null){
        bMC.style.textDecoration = "none";
    }
    let bCC = document.getElementById('buttonCreateCompte');
    if(bCC != null){
        bCC.style.textDecoration = "none";
    }
    let bLout = document.getElementById('buttonLogout');
    if(bLout != null){
        bLout.style.textDecoration = "none";
    }
    let bLin = document.getElementById('buttonLogin');
    if(bLin != null){
        bLin.style.textDecoration = "none";
    }

}