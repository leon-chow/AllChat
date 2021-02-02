import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: String[] = [];
  constructor() { }

  ngOnInit(): void {
    this.messages = [
      "hello world!",
      "my name is",
      "bob"
    ];
  }
}
