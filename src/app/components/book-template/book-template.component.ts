import { books } from './../../data/book';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-template',
  standalone: true,
  imports: [],
  templateUrl: './book-template.component.html',
  styleUrl: './book-template.component.css'
})
export class BookTemplateComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() price: any = '';

}
