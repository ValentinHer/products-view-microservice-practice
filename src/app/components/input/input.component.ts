import { Component, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styles: ``
})
export class InputComponent {
  label = input('');
  inputType = input<'text' | 'password'>('text');
  inputPlaceholder = input.required<string>();
  legend = input('');
  control = input.required<FormControl>();
}
