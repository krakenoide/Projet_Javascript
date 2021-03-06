import { Libs } from './Libs.js';
import { Message } from './Message.js';
import { User } from './User.js';
import { Topic } from './Topic.js';
import { CreationPage } from './CreationPage.js';
import { ModifPage } from './ModifPage.js';
import { TopicPage } from './TopicPage.js';
import { LoginPage } from './LoginPage.js';
import { Header } from './Header.js';


export class HomePage {

    constructor() {

    }

    static versPageAccueil() {
        Libs.clearDisplay();

        let myDiv = document.getElementById('display');

        let inputsmall = document.createElement('input');
        inputsmall.setAttribute("type", "text");
        inputsmall.setAttribute("class", "inputsmall");
        inputsmall.setAttribute("minlength", "5");
        inputsmall.setAttribute("maxlength", "100");
        inputsmall.setAttribute("placeholder", "Titre");
        myDiv.appendChild(inputsmall);

        let inputlarge = document.createElement('input');
        inputlarge.setAttribute("type", "text");
        inputlarge.setAttribute("class", "inputlarge");
        inputlarge.setAttribute("minlength", "5");
        inputlarge.setAttribute("maxlength", "3000");
        inputlarge.setAttribute("placeholder", "Message");
        myDiv.appendChild(inputlarge);

        let button = document.createElement('button');
        button.id = 'buttonAddNewTopic';
        button.setAttribute("type", "button");
        button.setAttribute("class", "button");
        button.textContent = "Ajouter un nouveau sujet";
        myDiv.appendChild(button);

        let filtre = document.createElement('input');
        filtre.setAttribute("type", "text");
        filtre.setAttribute("class", "filtre");
        filtre.setAttribute("placeholder", "Filtre par titre ou par auteur");
        myDiv.appendChild(filtre);


        let topiclist = [
            { id: 1, title: "Titre1", user: "user1", date: "date1", content: "message1" },
            { id: 2, title: "Titre2", user: "user2", date: "date2", content: "message2" },
            { id: 3, title: "Titre3", user: "user3", date: "date3", content: "message3" },
            { id: 4, title: "Titre4", user: "user4", date: "date4", content: "message4" },
        ];

        for (let i = 0; i < topiclist.length; i++) {
            let topic = document.createElement('h2');
            topic.setAttribute("class", "topicline topic");
            topic.textContent = `${topiclist[i].title}`;
            myDiv.appendChild(topic);

            topic.addEventListener("mouseover", function () {
                event.preventDefault();
                event.target.textContent = `${topiclist[i].title} ${topiclist[i].user} ${topiclist[i].date}`;
            });

            topic.addEventListener("mouseleave", function () {
                event.preventDefault();
                event.target.textContent = `${topiclist[i].title}`;
            });

            topic.addEventListener("click", function () {
                event.preventDefault();
                //TODO change i to actual Topic ID
                TopicPage.versTopicPage(i);
            });

            let btnmodif = document.createElement("button");
            btnmodif.setAttribute("class", "topicline btnmodif");
            btnmodif.innerHTML = "Modifier";
            myDiv.appendChild(btnmodif);

            let btnsupp = document.createElement("button");
            btnsupp.setAttribute("class", "topicline btnsupp");
            btnsupp.innerHTML = "Supprimer";
            myDiv.appendChild(btnsupp);

        }
        
        let buttonAddNewTopic = document.getElementById("buttonAddNewTopic");
        buttonAddNewTopic.addEventListener("mouseover", function () {
            event.preventDefault();
            event.target.style.color = "#1569CA";
            event.target.style.backgroundColor = "white";
        });

        buttonAddNewTopic.addEventListener("mouseleave", function () {
            event.preventDefault();
            event.target.style.color = "white";
            event.target.style.backgroundColor = "#1569CA";
        });
    }
}