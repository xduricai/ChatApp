import { Component, OnInit } from '@angular/core';
import { ChatMessagesService } from 'src/app/services/chat-messages.service';
import { Message } from 'src/app/interfaces/Message';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
  messages: Message[] = [];
  subscription: Subscription = new Subscription();

  constructor(public msgServ: ChatMessagesService) {  }

  ngOnInit(): void {
    this.subscription = this.msgServ.getMessages().subscribe((messages) => this.messages = messages);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  clear(): void {
    console.log(this.messages)
    this.msgServ.clearMessages();
    this.subscription.unsubscribe();
    this.subscription = this.msgServ.getMessages().subscribe((messages) => this.messages = messages);
  }

}
