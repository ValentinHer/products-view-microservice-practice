import { Component, input, output } from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.component.html',
  styles: ``
})
export class ButtonComponent {
  buttonType = input<'button' | 'submit'>('button');
  className = input('');
  buttonText = input('');
  isDisabled = input(false);
  handleClickButton = output<void>();
}
