import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { LogService } from '../../services/LogService/logservice';

@Component({
  selector: 'app-home',
 // imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, DoCheck {
  messages: string[] = [];

  counter: number = 0;

  constructor(private logServiceService: LogService) {
    logServiceService.logi('In home component', 'Home Component','constructor');
  }

  ngOnInit(): void {
    this.logServiceService.log('On Init method is called',this.constructor.name);
    this.messages.push('On Init method is called');
  }

  ngDoCheck(): void {
    if (this.counter >= 3) {
      this.logServiceService.log('DoCheck() method is called',this.constructor.name);
      this.messages.push('DoCheck() method is called');
    }
  }

  ngAfterContentInit(): void {
    this.logServiceService.log('ngAfterContentInit() method is called',this.constructor.name);
    this.messages.push('ngAfterContentInit() method is called');
  }

  ngAfterContentChecked(): void {
    this.logServiceService.log('ngAfterContentChecked() method is called', this.constructor.name);
    this.messages.push('ngAfterContentChecked() method is called');
  }


  ngOnDestroy(): void {
    this.logServiceService.log('ngOnDestroy() method is called', this.constructor.name);
    this.messages.push('ngOnDestroy() method is called');
  }

  change(): void {
    this.counter++;
    this.logServiceService.log('change() is called', this.constructor.name);
  }
}
