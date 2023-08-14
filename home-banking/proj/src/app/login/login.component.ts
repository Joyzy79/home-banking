import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  styleUrls: ['login.component.css'],
  templateUrl: 'login.component.html',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  show: boolean = false;
  passwordValidated: boolean = false;

  submit() {
    // Simulação de validação da senha, altere conforme necessário
    if (this.password === '') {
      this.passwordValidated = true;
      this.show = true; // Exibe a página de movimentação após a validação da senha
    } else {
      this.username = '';
      this.password = '';
      this.show = false;
    }
  }
  clear() {
    if (this.passwordValidated) {
      this.show = false; // Oculta a página de login após a validação da senha
    } else {
      this.username = "";
      this.password = "";
      this.show = true;
    }
  }
}

