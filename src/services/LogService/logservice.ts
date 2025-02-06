import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  constructor() {}

  log(text: String,component: string ): void {
    if (!environment.production) {
      const timestamp = new Date().toISOString();
      console.log(`[${timestamp}] [${component}] ${text}`);
    }
  }

  logi(text: string, component: string, functionName:string): void {
    if (!environment.production) {
      const timestamp = new Date().toISOString();
      console.log(`[${timestamp}] [${component}] [${functionName}]: ${text}`);
    }
  }
}
