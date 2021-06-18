import {Libs} from './Libs.js';
import {Message} from './Message';
import {User} from './User';

export class Topic {
    id;
    title;
    date;
    author_id;
    constructor(id, title, date, author_id) {
        this.id = id;
        this.title = title;
        this.data = date;
        this.author_id = author_id;

    }
    //PATCH /api/topic/3 : modifie le sujet dont l'id est 3.
    //	Format JSON : { "title": "Mon nouveau titre" }

    modifTopic(title) {

    }
    //DELETE /api/topic/3 : supprime le sujet dont l'id est 3, ainsi que tous ses messages

    delete() {


    }


}
