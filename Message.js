import { Libs } from './Libs.js';
import { User } from './User.js';
import { Topic } from './Topic.js';
import { HomePage } from './HomePage.js';
import { CreationPage } from './CreationPage.js';
import { ModifPage } from './ModifPage.js';
import { TopicPage } from './TopicPage.js';
import { LoginPage } from './LoginPage.js';
import { Header } from './Header.js';


export class Message {
    id;
    author_id;
    content;
    date;
    topic;
    constructor(id,author_id,content,date,topic){
        this.id=id;
        this.author_id=author_id;
        this.content=content;
        this.date=date;
        this.topic=topic;

    }
    modifMessage(content){
        //PATCH /api/message/3 : modifie le message dont l'id est 3.
	//Format JSON : { "content": "Mon nouveau message" }
    }
    deleteMessage(){
        //DELETE /api/message/3 : supprime le message dont l'id est 3
    }




}

