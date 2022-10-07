
import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ChatService } from '../chat.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css'],
    providers: [{useClass: ChatService, provide: ChatService}]
})

export class ChatComponent {

     

    constructor(private snackBar: MatSnackBar, 
                private _router: Router,
                private chatService: ChatService) 
    {

    }

    ngOnInit(): void { 
      
    }

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
    pedidoUser = '';
    bebidaUser = '';

  

    controler: number = 0;

  
 

    onUpdateMessage(): void {
        switch (this.controler) {
            case 3:
                this.msgsUser.push({ nick: 'user', msg: this.userSeparatedMsg });

                if (this.userSeparatedMsg.match(this.regex)) {
                    this.bebidaUser = this.userSeparatedMsg;
                    this.inputCleanAndDown();
                    this.msgsUser.push({ nick: 'bot', msg: `certo, anotado` });
                    this.msgsUser.push({ nick: 'bot', msg: ` ✔️ pedido finalizado` });
                    console.log(this.nomeUser, this.pedidoUser, this.bebidaUser);
                    this.showMessage();
                    console.log('nome: ' + this.nomeUser + ' | pedido: ' + this.pedidoUser + ' | bebida: ' + this.bebidaUser);

                }
                else this.errorMessage();

                break;

            case 2:
                this.msgsUser.push({ nick: 'user', msg: this.userSeparatedMsg });

                if (this.userSeparatedMsg == 'sim') {
                    this.inputCleanAndDown();
                    this.msgsUser.push({
                        nick: 'bot', msg: `🥤 🥂 Selecione qual bebida gostaria de adicionar ao seu pedido  
              [ 1 ] 🧃 Suco ............................................................................ R$ 4 
              [ 2 ] 🍺 Cerveja ........................................................................ R$ 6 
              [ 3 ] 🍷 Vinho .......................................................................... R$ 10`});

                    this.controler = 3;
                }
                else if (this.userSeparatedMsg == 'não') {
                    this.inputCleanAndDown();
                    this.msgsUser.push({ nick: 'bot', msg: ` ✔️ pedido finalizado` });
                    console.log(this.nomeUser, this.pedidoUser, this.bebidaUser);
                    this.chatService.dados.emit({nomeUser: this.nomeUser, pedidoUser: this.pedidoUser, bebidaUser: this.bebidaUser});
                    this.showMessage();
                    // nomeUser = '';
                    //pedidoUser = '';
                    //bebidaUser = '';
                }
                else if (this.userSeparatedMsg != 'sim' && this.userSeparatedMsg != 'não') this.errorMessage();

                break;

            case 1:
                this.msgsUser.push({ nick: 'user', msg: this.userSeparatedMsg });

                if (this.userSeparatedMsg.match(this.regex)) {
                    this.msgsUser.push({ nick: 'bot', msg: `certo, anotado` });
                    this.pedidoUser = this.userSeparatedMsg;
                    this.inputCleanAndDown();
                    this.msgsUser.push({ nick: 'bot', msg: ` 🥤 Gostaria de adicionar uma bebida?  (responda: "sim" ou "não")` });
                    this.controler = 2

                }
                else this.errorMessage();
                break;

            case 0:
                this.msgsUser.push({ nick: 'user', msg: this.userSeparatedMsg });
                this.nomeUser = this.userSeparatedMsg;
                this.chatService.dados.emit({nomeUser: this.nomeUser, pedidoUser: this.pedidoUser, bebidaUser: this.bebidaUser});
                this.inputCleanAndDown();
                this.msgsUser.push({ nick: 'bot', msg: `Ok, ${this.nomeUser}` });
                this.msgsUser.push({
                    nick: 'bot', msg: ` 🍕 Para nós iniciarmos o seu pedido, selecione qual pizza deseja:  
                                                    [ 1 ] 🧀 Mussarela ................................................................. R$ 30 
                                                    [ 2 ] 🍖 Calabresa ................................................................. R$ 40 
                                                    [ 3 ] 🍗 Frango ...................................................................... R$ 35 
                                                    [ 4 ] 🥦 Vegetais ................................................................... R$ 32`});
                this.msgsUser.push({ nick: 'bot', msg: `Para escolher: digite apenas o numero ou, caso queira mais de uma, use a "," para separar. Ex: 1,4` });

                this.controler = 1;
                break;
        }
    }

    errorMessage() {
        this.msgsUser.push({ nick: 'bot', msg: `desculpa, não entendi...` });
        this.userSeparatedMsg = '';
        document.getElementById("input")?.click();
    }

    inputCleanAndDown() {
        this.userSeparatedMsg = '';
        document.getElementById("input")?.click();
    }

    showMessage() {
        this.snackBar.open('Redirecionando...', 'X', {
            duration: 4000,
            verticalPosition: "top"
        });

        setTimeout(() => {
            this._router.navigate(['/confirm']);
        }, 4000);
    }
}
