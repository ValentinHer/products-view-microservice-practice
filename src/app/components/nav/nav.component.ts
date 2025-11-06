import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [ButtonComponent],
  templateUrl: './nav.component.html',
  styles: ``
})
export class NavComponent {
  private router = inject(Router);

  navigateToSignUp() {
    this.router.navigate(['/register']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
