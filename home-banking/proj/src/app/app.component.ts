import { Component } from '@angular/core';
import { AuthService } from './auth.service'; // Importe o AuthService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService) {} // Injete o AuthService aqui

  // Implemente a função logout no componente
  logout(): void {
    this.authService.logout(); // Chame a função logout do AuthService
  }
}

