import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarToggleService {
  private isSidebarVisibleSubject = new BehaviorSubject<boolean>(false); // Initially hidden
  isSidebarVisible$ = this.isSidebarVisibleSubject.asObservable();

  toggleSidebar() {
    this.isSidebarVisibleSubject.next(!this.isSidebarVisibleSubject.value); // Toggle visibility
  }

  showSidebar() {
    this.isSidebarVisibleSubject.next(true); // Show the sidebar
  }

  hideSidebar() {
    this.isSidebarVisibleSubject.next(false); // Hide the sidebar
  }
}
