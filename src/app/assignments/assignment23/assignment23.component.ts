import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-assignment23',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assignment23.component.html',
  styleUrl: './assignment23.component.css'
})
export class Assignment23Component {
  sampleText: string = 'Angular Pipes Demonstration';
  currencyValue: number = 12345.678;
  decimalValue: number = 123.4567;
  percentValue: number = 0.7854; // Representing 78.54%
  currentDate: Date = new Date();

}
