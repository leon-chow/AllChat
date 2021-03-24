import { ChatService } from './../chat.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('autoScroll') private myScrollContainer?: ElementRef;

  ngAfterViewChecked() {
      this.scrollToBottom();
  }

  messages$: any | undefined;
  interval: any;
  channels: string[] = ['General', 'Games', 'Random', 'Work']
  currentChannel: string = "General";

  constructor(private chatService: ChatService ) { }

  ngOnInit(): void {
    this.getMessages();
    this.interval = setInterval(() => {
      this.getMessages();
      this.scrollToBottom();
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
      }, 500);
    }
  }

  changeChannels(channel: string) {
    this.currentChannel = channel;
    console.log(channel);
  }

  // auto scroll to bottom
  scrollToBottom(): void {
    if (this.myScrollContainer) {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    }
  }
}
