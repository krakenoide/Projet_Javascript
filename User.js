import {Libs} from './Libs.js';
import {Message} from './Message.js';
import {Topic} from './Topic.js';

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


