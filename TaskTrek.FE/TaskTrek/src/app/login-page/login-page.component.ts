import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card'
import { MatDivider } from "@angular/material/divider"
import { MatFormField, MatLabel, MatHint } from "@angular/material/form-field"
import { MatInput } from "@angular/material/input"
import { LogoComponent } from '../logo/logo.component';
import { MatButton } from "@angular/material/button"

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    MatCard,
    MatDivider,
    MatFormField,
    MatLabel,
    MatHint,
    MatInput,
    LogoComponent,
    MatButton
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}
