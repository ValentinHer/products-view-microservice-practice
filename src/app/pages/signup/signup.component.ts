import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { InputComponent } from "../../components/input/input.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from "../../components/button/button.component";
import { isNotEmptyValidator } from '../../utils/is-not-empty-validator.directive';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-signup',
  imports: [NavComponent, InputComponent, ReactiveFormsModule, ButtonComponent, FooterComponent],
  templateUrl: './signup.component.html',
  styles: ``
})
export class SignupComponent {
  signUpForm = new FormGroup({
    name: new FormControl('', [Validators.required, isNotEmptyValidator()]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, isNotEmptyValidator(), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
    confirmPassword: new FormControl('', [])
  })

  onSubmit() {
    console.log(this.signUpForm.value);
  }
}
