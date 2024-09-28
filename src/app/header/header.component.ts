import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component'; // Import SidebarComponent


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild(SidebarComponent) sidebar!: SidebarComponent; // Get reference to SidebarComponent

    // Placeholder data (can be replaced with data from a service)
    messagesCount: number = 3;
    notificationsCount: number = 5;
    userName: string = 'John Doe';
    userThumbnail: string = './assets/thumbnail/pic.jpg'; // Change to dynamic URL if needed
 
    ngAfterViewInit(): void {
    
  }
    toggleSidebar() {
      const sidebar = document.querySelector('.side-nav');
      if (sidebar?.classList.contains('collapsed')) {
        sidebar.classList.remove('collapsed');
      } else {
        sidebar?.classList.add('collapsed');
      }
    }

  


}
