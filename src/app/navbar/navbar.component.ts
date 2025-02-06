import { Component, Input } from '@angular/core';
import { environment } from '../../environment/environment';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SidebarToggleService } from '../../services/SideBarToggleService/side-bar-toggle.service';
import { query } from '@angular/animations';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  logo: string = environment.logo;
  user: string = environment.user;
  altComment: string = environment.alt;
  @Input() url : string | undefined ;

  constructor(private sidebarToggleService: SidebarToggleService) {}



  onToggleSidebar() {
    this.sidebarToggleService.toggleSidebar(); // Trigger toggle on button click
  }
}
