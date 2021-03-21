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
  messages$: any | undefined;
  interval: any;
  channels: string[] = ['General', 'Games', 'Random', 'Work']
  currentChannel: string = "General";

  constructor(private chatService: ChatService ) { }

  ngOnInit(): void {
    this.getMessages();
    this.interval = setInterval(() => {
      this.getMessages();
    }, 60000);
  }

  getMessages(): void {
    this.chatService.getMessages().
      subscribe(data => {
        console.log(data);
        this.messages$ = data;
      });
  }

  // TODO: change to use API, add service
  sendMessage(message: any): void {
    if (message.value.trim() != '' && message.value != '') {
      message.username = "bob";
      message.value = message.value.trim();
      this.chatService.sendMessage({"username": message.username, "message": message.value, "channel": this.currentChannel});
      message.value = '';
      setTimeout(() => {
        this.getMessages();
      }, 100);
    }
  }

  changeChannels(channel: string) {
    this.currentChannel = channel;
    console.log(channel);
  }
}
