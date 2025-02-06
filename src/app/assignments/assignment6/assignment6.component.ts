import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment6',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './assignment6.component.html',
  styleUrl: './assignment6.component.css',
  standalone:true
})
export class Assignment6Component {
  username = "Kunal";
  profileImg = '1.jpg';
  profileAltText = "profile-image";
  isVisible = false;

  displayProfile() {
    this.isVisible = !this.isVisible;
  }
}
