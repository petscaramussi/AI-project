import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class ChatService {
    dados: EventEmitter<any> = new EventEmitter();

    constructor(){}


}