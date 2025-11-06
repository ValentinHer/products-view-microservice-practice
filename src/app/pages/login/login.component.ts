import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { InputComponent } from "../../components/input/input.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from "../../components/button/button.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-login',
  imports: [NavComponent, InputComponent, ButtonComponent, ReactiveFormsModule, FooterComponent],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  onSumbit() {
    console.log(this.loginForm.value);
  }
}
