import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  messages = [
    { sender: 'John Doe', text: 'Short message goes here...' },
    { sender: 'Jane Doe', text: 'Another message...' },
    { sender: 'Jane Doe', text: 'Short message goes here...' },
    { sender: 'Jane Doe', text: 'Short message goes here...' }
  ]
}
