import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.sass'],
  providers: [{useClass: ChatService, provide: ChatService}]
})
export class ConfirmComponent implements OnInit {

  message: string = '';

  constructor(private chatService: ChatService) { 
    this.chatService.dados.subscribe((result: any) => {
      console.log(result);
    })
  }

  ngOnInit(){
    
  }

  pizzas: Array<any> = ['Calabresa', 'Mussarela', 'Outra'];

}
