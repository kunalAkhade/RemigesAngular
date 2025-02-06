import { Component } from '@angular/core';
import { LogService } from '../../../services/LogService/logservice';

@Component({
  selector: 'app-assignment7',
  templateUrl: './assignment7.component.html',
  styleUrl: './assignment7.component.css'
})
export class Assignment7Component {
  Status:string | undefined
  constructor(private logger: LogService) {
    logger.log("Using a logger service", this.componentName);
    this.Status='Check console for output'
  }

  componentName: string = this.constructor.name.replace('_', '');

}
