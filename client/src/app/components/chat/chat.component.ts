import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

   msgsUser: Array<any> = [{
    nick: 'bot',
    msg: 'heloo'
   }];
   msgsBot: Array<string> = [];

   userSeparatedMsg = '';


  constructor() { }

  ngOnInit(): void {
  }

  toAddMessages() {
    
  }

  onUpdateMessage(): void {
    this.msgsUser.push({nick: 'user', msg: this.userSeparatedMsg});
    this.msgsUser.push({nick: 'bot', msg: 'petGod genio'});
    
  }

}
