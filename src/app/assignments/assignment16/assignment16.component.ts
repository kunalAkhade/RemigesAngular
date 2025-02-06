import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignment16',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './assignment16.component.html',
  styleUrl: './assignment16.component.css',
  standalone:true
})
export class Assignment16Component {
  submitted: boolean = false;


  formProfile = new FormGroup({
    n1: new FormControl('', [Validators.required, Validators.pattern("^-?[0-9]+$")]),
    n2: new FormControl('', [Validators.required, Validators.pattern("^-?[0-9]+$")]),
  })

  num1: number = 0;
  num2: number = 0;

  handleReset(): void {
    this.formProfile.reset();
    this.formProfile.markAsUntouched({ onlySelf: false });
    this.submitted = false;
  }

  handleAdd(): void {
    this.num1 = parseInt(this.formProfile.controls.n1.value as string);
    this.num2 = parseInt(this.formProfile.controls.n2.value as string);
    this.handleReset();
    this.submitted = true;
  }
}
