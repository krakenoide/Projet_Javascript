import { Libs } from './Libs.js';
import { Message } from './Message.js';
import { User } from './User.js';
import { Topic } from './Topic.js';
import { HomePage } from './HomePage.js';
import { CreationPage } from './CreationPage.js';
import { ModifPage } from './ModifPage.js';
import { LoginPage } from './LoginPage.js';



export class TopicPage {

    constructor(){

    }

    static versTopicPage() {
        
        Libs.clearDisplay();

        
        let display = document.body;
        let title = document.createElement('h1');
        title.setAttribute("class", "topicline topic");
        //let title = document.createElement('h1');
        display.appendChild(title);

        title.textContent ="titre du topic"
        let date_user = document.createElement('h6');
        
        date_user.textContent="date de creation et identitenfiant de l'user";
        title.appendChild(date_user);
       
        let button_actualisation = document.createElement('button');
        //button_actualisation.setAttribute("class","button");
        button_actualisation.textContent = " actualiser les messages;"
        display.appendChild(button_actualisation);
        button_actualisation.addEventListener("click", (event) => {
            event.preventDefault();
        })
        let message1 = document.createElement('div');
        message1.setAttribute("class","inputlarge");
        display.appendChild(message1)
        message1.textContent="auteur et date du message";
        let contentmessage1 = document.createElement("div")
        message1.appendChild(contentmessage1);
        contentmessage1.textContent="contenue du message";
        
        let message2 = document.createElement('div');
        message2.setAttribute("class","inputlarge");
        display.appendChild(message2)
        message2.textContent="auteur et date du message";
        let contentmessage2 = document.createElement("div")
        message2.appendChild(contentmessage2);
        contentmessage2.textContent="contenue du message";
        
        

        let newmessage = Libs.addInputField(display, "text", "contenue du message");
        let button_send = document.createElement('button');
        button_send.textContent="Repondre au sujet";
        display.appendChild(button_send);







    }

}
