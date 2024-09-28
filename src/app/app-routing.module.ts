import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { MessageComponent } from './message/message.component';
import { TodoComponent } from './todo/todo.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'message', component: MessageComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'calendar', component: CalendarComponent},
  { path: ' ', redirectTo: '/table', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
