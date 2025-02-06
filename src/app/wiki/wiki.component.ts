import { Component } from '@angular/core';

@Component({
  selector: 'app-wiki',
  standalone: true,
  imports: [],
  templateUrl: './wiki.component.html',
  styleUrl: './wiki.component.css'
})
export class WikiComponent {

  selectedTab:string = 'JAVA';

  select(tab: string) {
    this.selectedTab=tab;
  }



}
