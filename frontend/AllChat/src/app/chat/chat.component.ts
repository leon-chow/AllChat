import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: string[][] = [];
  channels: string[] = ['General', 'Games', 'Random', 'Work']

  constructor() { }

  ngOnInit(): void {
    this.messages = [
      [
        "Jane Doe",
        "Donec sit amet tincidunt nunc. Suspendisse et velit non arcu malesuada gravida sed id mauris. Sed at rutrum metus. Mauris et velit arcu. Fusce faucibus nisi id dolor vestibulum malesuada. In elit odio, fermentum non augue vel, mollis pulvinar lorem. Quisque semper, risus nec commodo pretium, lacus mauris pharetra metus, id pretium erat nunc quis lorem. Duis non libero in nunc dictum vehicula eget non risus. Suspendisse fringilla ut mi vitae semper. Donec ornare faucibus felis non varius. Curabitur convallis venenatis dictum. Suspendisse consectetur dignissim ligula, sed sollicitudin nibh luctus et. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Curabitur eget ipsum a mi fermentum aliquam aliquam. aliquam. aliquam aliquam. aliquam...",
      ]
    ];
  }

  // TODO: change to use API, add service
  sendMessage(message: any): void {
    if (message.value.trim() != '' && message.value != '') {
      console.log(`posting message: ${message.value}`);
      this.messages.push(["Bob Smith", message.value]);
      message.value = '';
    }
  }

  changeChannels(channel: string) {
    if (channel == "General") {
      this.messages = [
        [
          "Bob Smith",
          "Testing 123...",
        ]
      ];
    } else if (channel == "Games") {
      this.messages = [
        [
          "John Smith",
          "Is this where I post my 360 no-scope videos?",
        ]
      ];
    } else if (channel == "Random") {
      this.messages = [
        [
          "Bob Bobless",
          "Check out this awesome website at https://leonchow.me",
        ]
      ];
    } else if (channel == "Work") {
      this.messages = [
        [
          "James Barov",
          "How do I make a REST API?",
        ]
      ];
    }
  }
}
