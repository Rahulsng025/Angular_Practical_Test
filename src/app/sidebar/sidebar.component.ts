import { Component, EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isCollapsed = false; 
  @Output() componentChange = new EventEmitter<string>();


  constructor(private router: Router){

  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed; // Toggle the sidebar state
  }
 

  navigateTo(route: string) {
    this.router.navigate([route]);
  }


}
