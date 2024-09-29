import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component'; 


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild(SidebarComponent) sidebar!: SidebarComponent;

    
    
    userName: string = 'John Doe';
    userThumbnail: string = './assets/thumbnail/pic.jpg'; 
 
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
