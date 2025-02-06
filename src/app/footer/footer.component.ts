import { Component } from '@angular/core';
import { environment } from '../../environment/environment';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
   version: string =environment.version;
   release: string =environment.release;
}
