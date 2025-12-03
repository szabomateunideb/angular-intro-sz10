import { Component } from '@angular/core';
import {LoginDto} from '../models/login.dto';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatInput, MatLabel, MatFormField} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-login',
  imports: [
    MatCardHeader,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatLabel,
    MatInput,
    FormsModule,
    MatCardActions,
    MatButton
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginData: LoginDto = {felhasznalonev:'',jelszo:''};
  errorMsg = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  onLogin(){
    this.authService.login(this.loginData).subscribe({
      next: () => this.router.navigate(['alkatreszek']),
      error: (err) => this.errorMsg = "Hibás bejelentkezés vagy szerver nem elérhető"
    });
  }
}
