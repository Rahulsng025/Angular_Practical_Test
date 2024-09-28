import { Component} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  isCollapsed = false; // Variable to track the state of sidebar

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed; // Toggle the sidebar state
  }
}
