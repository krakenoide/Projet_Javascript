import { Libs } from './Libs.js';
import { Message } from './Message.js';
import { Topic } from './Topic.js';
import { HomePage } from './HomePage.js';
import { CreationPage } from './CreationPage.js';
import { ModifPage } from './ModifPage.js';
import { TopicPage } from './TopicPage.js';
import { LoginPage } from './LoginPage.js';
import { Header } from './Header.js';


export class User {
    id;
    userName;
    password;
    admin;


    constructor(id,userName,password,admin){
        this.id=id;
        this.userName=userName;
        this.password=password;
        this.admin=admin;
    }


    modifUser(newusername,password,passwordconfirm,oldpassword){
        
    }

    delete(){

    }

    

}


