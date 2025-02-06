import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-calendar-component',
  imports: [FormsModule, CommonModule],
  standalone:true,
  templateUrl: './calendar-component.component.html',
  styleUrl: './calendar-component.component.css'
})
export class CalendarComponentComponent {

  year!: number;
  isLeapYear: string = '';
  numberOfDays: number = 0;
  totalHolidays: number = 0;

  calculate() {
    if (!this.year || this.year < 1) {
      alert('Please enter a valid year.');
      return;
    }

    // Determine if the year is a leap year
    this.isLeapYear = (this.year % 4 === 0 && (this.year % 100 !== 0 || this.year % 400 === 0)) ? 'Yes' : 'No';

    // Determine the number of days in the year
    this.numberOfDays = this.isLeapYear === 'Yes' ? 366 : 365;

    // Calculate total number of holidays
    const holidays = this.calculateHolidays(this.year);
    this.totalHolidays = holidays;
  }

  private calculateHolidays(year: number): number {
    let holidays = 0;

    for (let month = 0; month < 12; month++) {
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        if (date.getDay() === 0 || date.getDay() === 6) { // 0 = Sunday, 6 = Saturday
          holidays++;
        }
      }
    }

    return holidays;
  }

}
