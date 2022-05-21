import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Message } from '../interfaces/Message'

@Injectable({
  providedIn: 'root'
})
export class ChatMessagesService {

  messages: Message[] = [];

  constructor() { }

  postMessage(message: Message){
    this.messages.push(message);
  }

  getMessages(): Observable<Message[]>{
    return of(this.messages);
  }

  clearMessages(){
    this.messages = [];
  }
}
