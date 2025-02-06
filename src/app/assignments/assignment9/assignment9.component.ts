import { Component } from '@angular/core';
import { LogService } from '../../../services/LogService/logservice';


@Component({
  selector: 'app-assignment9',
  templateUrl: './assignment9.component.html',
  styleUrl: './assignment9.component.css'
})
export class Assignment9Component {
  items:string[] = [];
 constructor(private logger: LogService) {}

  componentName: string = this.constructor.name.replace('_', '');

  ngOnChanges(): void {
    this.logger.log("ngOnChanges is called", this.componentName);
    this.items.push("ngOnChanges is called")
  }

  ngOnInit(): void {
    this.logger.log("ngOnInit is called", this.componentName);
    this.items.push("ngOnInit is called")
  }

  ngDoCheck(): void {
    this.logger.log("ngDoCheck is called", this.componentName);
    this.items.push("ngDoCheck is called")
  }

  ngAfterContentInit(): void {
    this.logger.log("ngAfterContentInit is called", this.componentName);
    this.items.push("ngAfterContentInit is called")
  }

  ngAfterContentChecked(): void {
    this.logger.log("ngAfterContentChecked is called", this.componentName);
    this.items.push("ngAfterContentChecked is called")
  }

  ngAfterViewInit(): void {
    this.logger.log("ngAfterViewInit is called", this.componentName);
    this.items.push("ngAfterViewInit is called")
  }

  ngAfterViewChecked(): void {
    this.logger.log("ngAfterViewChecked is called", this.componentName);
    this.items.push("ngAfterViewChecked is called")
  }

  ngOnDestroy(): void {
    this.logger.log("ngOnDestroy is called", this.componentName);
    this.items.push("ngOnDestroy is called")
  }
}
