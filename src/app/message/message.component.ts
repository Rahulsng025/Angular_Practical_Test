import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  messages = [
    { sender: 'Alex Dev', text: 'Short message goes here...' },
    { sender: 'Mitchel Jhon', text: 'Another message...' },
    { sender: 'Thomas Gab', text: 'Short message goes here...' },
    { sender: 'Hannah Baker', text: 'Short message goes here...' }, 
    { sender:  'Harry Potter', text: 'Hey!,I was trying you number'},
    { sender: 'Sammy Jack', text: 'See you tomorrow!' }
  ]
}
