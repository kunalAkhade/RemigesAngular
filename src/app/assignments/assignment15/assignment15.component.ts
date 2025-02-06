import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment15',
  templateUrl: './assignment15.component.html',
  styleUrl: './assignment15.component.css'
})
export class Assignment15Component {
  selectedTab:string = 'JAVA';

  select(tab: string) {
    this.selectedTab=tab;
  }

}
