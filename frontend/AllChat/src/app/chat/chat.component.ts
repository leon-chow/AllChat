import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: string[][] = [];

  constructor() { }

  ngOnInit(): void {
    this.messages = [
      [
        "Jane Doe",
        "Sample",
        "Donec sit amet tincidunt nunc. Suspendisse et velit non arcu malesuada gravida sed id mauris. Sed at rutrum metus. Mauris et velit arcu. Fusce faucibus nisi id dolor vestibulum malesuada. In elit odio, fermentum non augue vel, mollis pulvinar lorem. Quisque semper, risus nec commodo pretium, lacus mauris pharetra metus, id pretium erat nunc quis lorem. Duis non libero in nunc dictum vehicula eget non risus. Suspendisse fringilla ut mi vitae semper. Donec ornare faucibus felis non varius. Curabitur convallis venenatis dictum. Suspendisse consectetur dignissim ligula, sed sollicitudin nibh luctus et. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Curabitur eget ipsum a mi fermentum aliquam aliquam. aliquam. aliquam aliquam. aliquam...",
      ],
      [
        "John Smith",
        "Sample",
        "Hello friend!",
      ],
      [
        "James Barov",
        "Sample",
        "Goodbye world!",
      ],
    ];
  }

  // TODO: change to use API
  sendMessage(message: any): void {
    if (message.value.trim() != '' && message.value != '') {
      console.log(`posting message: ${message.value}`);
      this.messages.push(["Bob Smith", "Sample", message.value]);
      message.value = '';
    }
  }
}
