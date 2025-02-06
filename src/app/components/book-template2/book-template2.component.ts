import { books } from './../../data/book';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book-template2',
  standalone: true,
  imports: [],
  templateUrl: './book-template2.component.html',
  styleUrl: './book-template2.component.css',
})
export class BookTemplate2Component {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() price: any = '';
  @Output() rateEvent = new EventEmitter<{title:string, rating:number}>();

  rate():void{
    console.log("he")
    const rating = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
    console.log({ title: this.title, rating }); // Optional: Log to the console for debugging
    this.rateEvent.emit({ title: this.title, rating });
  }
}
