import { Component, EventEmitter, Output } from '@angular/core';
import { SidebarToggleService } from '../../services/SideBarToggleService/side-bar-toggle.service';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation-side-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigation-side-bar.component.html',
  styleUrl: './navigation-side-bar.component.css',
})
export class NavigationSideBarComponent {
  // Create an EventEmitter to send data to the parent
  @Output() messageEvent = new EventEmitter<Boolean>();

  isSidebarVisible = false;
  private sidebarVisibilitySubscription: Subscription = Subscription.EMPTY;

  constructor(private sidebarToggleService: SidebarToggleService) {}

  ngOnInit() {
    this.sidebarVisibilitySubscription =
      this.sidebarToggleService.isSidebarVisible$.subscribe((isVisible) => {
        this.isSidebarVisible = isVisible;
      });
  }

  sendMessageToParent() {
    this.messageEvent.emit(true);
  }

  ngOnDestroy() {
    if (this.sidebarVisibilitySubscription) {
      this.sidebarVisibilitySubscription.unsubscribe();
    }
  }
}
