import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';
import { MessageComponent } from './message/message.component';
import { TodoComponent } from './todo/todo.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RecentSalesComponent } from './recent-sales/recent-sales.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    TableComponent,
    MessageComponent,
    TodoComponent,
    CalendarComponent,
    RecentSalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
