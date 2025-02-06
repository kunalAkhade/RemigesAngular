import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignment17',
  standalone:true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './assignment17.component.html',
  styleUrl: './assignment17.component.css'
})
export class Assignment17Component {
  submitted: boolean = false;
  directive: string = 'if';

  formProfile = new FormGroup({
    n1: new FormControl('', [Validators.required, Validators.pattern("^-?[0-9]+$")])
  })

  num1: number = 0;

  handleReset(): void {
    this.formProfile.reset();
    this.formProfile.markAsUntouched({ onlySelf: false });
    this.submitted = false;
  }

  handleSubmit(): void {
    this.num1 = parseInt(this.formProfile.controls.n1.value as string);
    this.handleReset();
    this.submitted = true;
  }

  changeDirective(): void {
    this.handleReset();
    this.directive = this.directive == 'if' ? 'switch' : 'if';
  }
}
