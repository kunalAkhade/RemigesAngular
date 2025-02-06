import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FormValidatorService } from '../validator/form-validator.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  title = 'registeration-page';
  validator: FormValidatorService;
  form: { username: string; password: string; mobile: string; email: string } =
    {
      username: '',
      password: '',
      mobile: '',
      email: '',
    };

  errors: {
    username: string;
    password: string;
    mobile: string;
    email: string;
  } = {
    username: '',
    password: '',
    mobile: '',
    email: '',
  };

  constructor(validator: FormValidatorService) {
    this.validator = validator;
  }

  getMobileNumber(event: Event): void {
    const inputElement = event.target as HTMLInputElement;

    const element = inputElement.getAttribute('class');

    if (element == 'mobile-input') {
      this.form.mobile = inputElement.value;
    } else if (element == 'username-input') {
      this.form.username = inputElement.value;
    } else if (element == 'password-input') {
      this.form.password = inputElement.value;
    } else if (element == 'email-input') {
      this.form.email = inputElement.value;
    }
  }

  onLeave(event: FocusEvent) {
    const element = event.target as HTMLInputElement;
    const className = element.getAttribute('class');
    switch (className) {
      case 'mobile-input':
        if (!this.validator.validateMobileNumber(this.form.mobile)) {
          this.errors.mobile = 'Mobile number is invalid';
        } else {
          this.errors.mobile = '';
        }
        break;
      case 'username-input':
        if (!this.validator.validateUsername(this.form.username)) {
          this.errors.username = 'Username is invalid';
        } else {
          this.errors.username = '';
        }
        break;
      case 'email-input':
        if (!this.validator.validateEmail(this.form.email)) {
          this.errors.email = 'email is invalid';
        } else {
          this.errors.email = '';
        }
        break;
      case 'password-input':
        if (!this.validator.validatePassword(this.form.password)) {
          this.errors.password = 'please enter password';
        } else {
          this.errors.password = '';
        }
    }
  }

  onSubmit(): void {
    if (!this.validator.validateMobileNumber(this.form.mobile)) {
      this.errors.mobile = 'Mobile number is invalid';
    }
    if (!this.validator.validateUsername(this.form.username)) {
      this.errors.username = 'Username is invalid';
    }
    if (!this.validator.validateEmail(this.form.email)) {
      this.errors.email = 'email is invalid';
    } if (!this.validator.validatePassword(this.form.password)){
      this.errors.password = 'please enter password'
    }
    else if(this.errors.email=='' && this.errors.username=='' && this.errors.mobile=='' && this.errors.password=='') {
      alert('submitted!');
    }
  }

  onClear(): void {
    this.form.email = '';
    this.form.password = '';
    this.form.username = '';
    this.form.mobile = '';
    this.errors.email='';
    this.errors.mobile='';
    this.errors.password='';
    this.errors.username='';
  }

}
