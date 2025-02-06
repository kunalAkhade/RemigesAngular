import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { books } from '../../data/book';

@Component({
  selector: 'app-assignment18',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './assignment18.component.html',
  styleUrl: './assignment18.component.css'
})
export class Assignment18Component {
  bookList = books;  // Assign the books data to a property

  constructor() { }

  ngOnInit(): void {
  }
}
