import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ChatMessagesService } from 'src/app/services/chat-messages.service';
import { Message } from 'src/app/interfaces/Message';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  hideRequiredControl = new FormControl(true);
  floatLabelControl = new FormControl('always');

  form = this.fb.group({
    message: ['', []],
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl
  });

  constructor(private fb: FormBuilder, public msgServ: ChatMessagesService) { 
    this.id = 0;
    this.name = '';
  }

  ngOnInit(): void {
  }

  get message() {
    return this.form.get('message');
  }

  getMessageValue(): Message {
    if(this.message == null) return { author: this.name, message: ''};
    let value = { author: this.name, message: this.message.value};
    this.form = this.fb.group({
      message: ['', []],
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl
    });
    return value;
  }

  getMessageLen() {
    if(this.message == null) return 0;
    return this.message.value.length;
  }
}
