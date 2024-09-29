import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { MessageComponent } from './message/message.component';
import { TodoComponent } from './todo/todo.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ElementsComponent } from './Left-Menu/elements/elements.component';
import { WidgetsComponent } from './Left-Menu/widgets/widgets.component';
import { FormsComponent } from './Left-Menu/forms/forms.component';
import { ChartsComponent } from './Left-Menu/charts/charts.component';
import { PagesComponent } from './Left-Menu/pages/pages.component';

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'message', component: MessageComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'calendar', component: CalendarComponent},

  //Left-Menu routing components
  { path: 'element', component: ElementsComponent },
  { path: 'widget', component:  WidgetsComponent},
  { path: 'form', component:  FormsComponent},
  { path: 'chart', component:  ChartsComponent},
  { path: 'page', component:  PagesComponent},
  { path: ' ', redirectTo: '/table', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
