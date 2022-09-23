import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {


   msgsUser: Array<any> = [{
    nick: 'bot',
    msg: ` Olá, seja vem vido a nossa pizzaria! Para iniciar, digite o seu nome, ou como você gostaria de ser chamado 👋`
   }];
   msgsBot: Array<string> = [];

   userSeparatedMsg = '';
   nomeUser = '';
   controler: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  toAddMessages() {
    
  }

  onUpdateMessage(): void {
    if(this.controler == 1){
      this.msgsUser.push({nick: 'user', msg: this.userSeparatedMsg});
      this.msgsUser.push({nick: 'bot', msg: `ok, entendi`});
      this.controler = 2
    }
    if( this.controler == 0){
    this.msgsUser.push({nick: 'user', msg: this.userSeparatedMsg});
    this.nomeUser = this.userSeparatedMsg;
    this.userSeparatedMsg = '';
    this.msgsUser.push({nick: 'bot', msg: `Ok, ${this.nomeUser}`});
    this.msgsUser.push({nick: 'bot', msg: `Itens menu`});
    this.controler = 1;
    }
    
  }

}
