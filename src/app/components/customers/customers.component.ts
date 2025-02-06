import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [RouterOutlet, RouterLink,CommonModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
 selected:number=1;

 onclick(id:number):void{
  this.selected=id;
 }
}
