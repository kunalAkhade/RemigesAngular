import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment5',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './assignment5.component.html',
  styleUrl: './assignment5.component.css'
})
export class Assignment5Component {
  username = "Kunal";
  profileImg = '1.jpg';
  profileAltText = "profile-image";
}
