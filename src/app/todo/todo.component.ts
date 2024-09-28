import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  tasks = ['Today, I have to go to the market', 
    'Complete Assignment by the end of the day!',
     'Just add one more branch to test the app', 
     'Finish all the pending task of given app',
    'I have to started one more investment policy',
  'Give a new excel sheet to new joinee',
'Complete Assignment by the end of the day!',];
}
