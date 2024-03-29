import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputButtonComponent } from '../../components/input-button/input-button.component';
import { InputCheckboxComponent } from '../../components/input-checkbox/input-checkbox.component';
import { InputTextComponent } from '../../components/input-text/input-text.component';
import { TextButtonComponent } from '../../components/text-button/text-button.component';
import { LoginService } from '../../services/login-service/login.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormsModule,
    InputTextComponent,
    InputCheckboxComponent,
    TextButtonComponent,
    InputButtonComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;
  isEmpty: boolean = false;
  errorMessage: string = '';

  constructor(private loginService: LoginService) { }

  login() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    console.log('Remember Me:', this.rememberMe);

    if(!this.username || !this.password) {
      this.isEmpty = true;
      return;
    }
    this.isEmpty = false;
    this.loginService.login(this.username, this.password)
      .subscribe(
        {
          complete: () => console.log('Login complete'),
          error: (error) => {
            console.error('Login error:', error);
            this.errorMessage = error;
          },
          next: (data) => localStorage.setItem('token', data.token)
        }
      );
  }

}
