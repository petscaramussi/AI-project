import { Component} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

   hours = new Date;
   regex = /^\d*\,?\d*$/;
   currentTime = this.hours.getHours() + ":" + this.hours.getMinutes();


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
      if(this.userSeparatedMsg.match(this.regex)){
        this.msgsUser.push({nick: 'bot', msg: `certo, anotado`});
        this.controler = 2
      }else{
      this.msgsUser.push({nick: 'bot', msg: `desculpa, não entendi...`}); 
      }
    }
    if( this.controler == 0){
    this.msgsUser.push({nick: 'user', msg: this.userSeparatedMsg});
    this.nomeUser = this.userSeparatedMsg;
    this.userSeparatedMsg = '';
    this.msgsUser.push({nick: 'bot', msg: `Ok, ${this.nomeUser}`});
    this.msgsUser.push({nick: 'bot', msg: ` 🍕 Para nós iniciarmos o seu pedido, selecione qual pizza deseja:  
                                            [ 1 ] 🧀 Mussarela ................................................................. R$ 30 
                                            [ 2 ] 🍖 Calabresa ................................................................. R$ 40 
                                            [ 3 ] 🍗 Frango ...................................................................... R$ 35 
                                            [ 4 ] 🥦 Vegetais ................................................................... R$ 32`});
    this.msgsUser.push({nick: 'bot', msg: `Para escolher: digite apenas o numero ou, caso queira mais de uma, use a "," para separar. Ex: 1,4`});                                     
    this.controler = 1;
  
    }
    
  }

}
