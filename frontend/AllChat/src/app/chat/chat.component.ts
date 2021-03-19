import { ChatService } from './../chat.service';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Message {
  message: string;
  messageId: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages$: Observable<any> | undefined;
  messages: any = [];
  channels: string[] = ['General', 'Games', 'Random', 'Work']
  currentChannel: string = "General";

  constructor(private chatService: ChatService ) { }

  ngOnInit(): void {
    this.messages$ = this.chatService.getMessages();
    this.messages$?.forEach(data => {
      console.log(data);
      console.log("messages:" + this.messages);
    });
  }

  // TODO: change to use API, add service
  sendMessage(message: any): void {
    if (message.value.trim() != '' && message.value != '') {
      console.log(`posting message: ${message.value}`);
      message.value = '';
    }
  }

  changeChannels(channel: string) {
    this.currentChannel = channel;
  }
}
