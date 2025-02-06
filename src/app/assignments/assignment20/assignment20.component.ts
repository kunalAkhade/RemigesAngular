import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BookTemplate2Component } from "../../components/book-template2/book-template2.component";
import { books } from '../../data/book';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-assignment20',
  imports: [CommonModule, BookTemplate2Component],
  templateUrl: './assignment20.component.html',
  standalone:true,
  styleUrl: './assignment20.component.css'
})
export class Assignment20Component {
  constructor(){}

  successMessage:string='';

  listOfBooks : any = books;

  rateBook(bookRating: {title: string, rating: number}) {
    this.successMessage = `Rating for "${bookRating.title}" is ${bookRating.rating}`; // Set success message

  }
}
