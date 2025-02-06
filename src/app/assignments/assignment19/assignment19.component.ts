import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BookTemplateComponent } from "../../components/book-template/book-template.component";
import { books } from '../../data/book';

@Component({
  selector: 'app-assignment19',
  imports: [CommonModule, BookTemplateComponent],
  standalone:true,
  templateUrl: './assignment19.component.html',
  styleUrl: './assignment19.component.css'
})
export class Assignment19Component {

  listOfBooks : {title: string, description: string, price: any}[] = books;

}
