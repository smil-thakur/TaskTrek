import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card'
import { MatFormField, MatLabel, MatHint } from "@angular/material/form-field"
import { LogoComponent } from '../logo/logo.component';
import { MatButton } from "@angular/material/button"
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [
    MatCard,
    MatFormField,
    MatLabel,
    LogoComponent,
    MatButton
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  constructor(private router: Router) { }

  navigateToRegisterPage() {
    this.router.navigate(["/register"]);
  }

  navigateToHomePage() {
    this.router.navigate(["/home"]);
  }


}
