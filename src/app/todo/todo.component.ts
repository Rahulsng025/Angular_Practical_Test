import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  tasks = [
    {text:'Today, I have to go to the market', completed: false}, 
    {text:'Complete Assignment by the end of the day!', completed: false},
    {text:'Just add one more branch to test the app',completed: false}, 
    {text:'I have to started one more investment policy',completed: true},
    {text:'Give a new excel sheet to new joinee', completed: false},
    {text:'Complete Assignment by the end of the day!',completed: false}
  ];

searchTerm: string = ''; 
filteredTasks = [...this.tasks]; 

filterTasks() {
 
  this.filteredTasks = this.tasks.filter(task => 
    task.text.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
}
 
 resetSearch() {
  this.searchTerm = '';
  this.filteredTasks = [...this.tasks]; 
}

 // Method to toggle completion state
 toggleCompletion(task: any) {
  task.completed = !task.completed;
}

}
