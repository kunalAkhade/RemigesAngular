import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormValidatorService } from './validator/form-validator.service';
import { every } from 'rxjs';
import { NavigationSideBarComponent } from './navigation-side-bar/navigation-side-bar.component';
import { SidebarToggleService } from '../services/SideBarToggleService/side-bar-toggle.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    NavbarComponent,
    NavigationSideBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  url: string | undefined;
  constructor(private sidebarToggleService: SidebarToggleService) {}

  ngOnInit(): void {
    const currentUrl = window.location.href; // Full URL
    const path = window.location.pathname; // Path part of the URL
    this.url = path;
    console.log(this.url);
  }

  listenUrl():void{
    const currentUrl = window.location.href; // Full URL
    const path = window.location.pathname; // Path part of the URL
    this.url = path;
    console.log(this.url);
  }

  handleClick(): void {
    this.sidebarToggleService.hideSidebar(); // Trigger toggle on button click
  }
}
