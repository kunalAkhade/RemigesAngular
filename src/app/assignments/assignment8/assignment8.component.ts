import { Component } from '@angular/core';
import { environment } from '../../../environment/environment';

@Component({
  selector: 'app-assignment8',
  templateUrl: './assignment8.component.html',
  styleUrl: './assignment8.component.css'
})
export class Assignment8Component {
  isProduction = environment.production;
}
