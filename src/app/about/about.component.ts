

import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../../environment/environment';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})

export class AboutComponent {
  username : String = "Kunal Akhade";
  greetings : String = "Good Morning";
  isVisible : boolean = false;
  image : string = "1.jpg";
  altComment:string = environment.alt;

  reveal(): void {
   this.isVisible = !this.isVisible;
  }

}
