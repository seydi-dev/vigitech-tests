import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  success = false;

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    if (!this.username || !this.password) {
      this.errorMessage = 'Veuillez remplir tous les champs';
      return;
    }
    const result = this.authService.login(this.username, this.password);
    if (result) {
      this.success = true;
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Identifiants invalides';
      this.success = false;
    }
  }
}
