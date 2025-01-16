import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { LogoComponent } from '../logo/logo.component';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register-page',
    imports: [MatCard, MatFormField, MatInput, MatLabel, LogoComponent, MatButton],
    templateUrl: './register-page.component.html',
    styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {
  constructor(private router: Router) { }

  navigateToLoginPage() {
    this.router.navigate(["/login"])
  }
}
