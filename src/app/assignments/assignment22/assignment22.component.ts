import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignment22',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './assignment22.component.html',
  styleUrl: './assignment22.component.css'
})
export class Assignment22Component {

  rows: number = 0;
  pyramid:string[]=[]


  generatePyramid(): void {
    if (this.rows <= 0) {
      return;
    }
    this.pyramid = []; // Clear previous pyramid

    for (let i = 1; i <= this.rows; i++) {
      // Calculate spaces and stars for each row
      const spaces = ' '.repeat(this.rows - i);
      const stars = '*'.repeat(2 * i - 1);
      this.pyramid.push(spaces + stars); // Add the row to the pyramid array
    }


  }
}
