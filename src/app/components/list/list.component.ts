import { Component } from '@angular/core';
import data from "../../data/data.json";
import { CommonModule } from '@angular/common';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  customers:any=data;

}
