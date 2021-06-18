import { Libs } from './Libs.js';
import { Message } from './Message.js';
import { User } from './User.js';
import { Topic } from './Topic.js';
import { HomePage } from './HomePage.js';
import { CreationPage } from './CreationPage.js';
import { ModifPage } from './ModifPage.js';
import { TopicPage } from './TopicPage.js';
import { LoginPage } from './LoginPage.js';
import { Header } from './Header.js';

function main() {

  let isconnected = false;
  let activepagenumber = 1;

  let header = document.createElement('ul');
  header.setAttribute("id","header");
  header.setAttribute("class", "nav-links");

  document.body.appendChild(header);

  Header.initializeheader();

  let myDiv = document.createElement('div');
  myDiv.id = "display";
  document.body.appendChild(myDiv);

  HomePage.versPageAccueil();
}

main();





