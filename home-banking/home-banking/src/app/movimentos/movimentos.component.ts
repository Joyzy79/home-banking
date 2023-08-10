import { Component } from '@angular/core';

@Component({
  selector: 'app-movimentos',
  templateUrl: './movimentos.component.html',
  styleUrls: ['./movimentos.component.css']
})
export class MovimentosComponent {
  expenses: any[] = [
    { name: 'Energia', icon: 'flash_on', amount: '€ 50.00', date: '05/08/2023' },
    { name: 'Alimentação', icon: 'fastfood', amount: '€ 30.00', date: '06/08/2023' },
    { name: 'Bem Estar', icon: 'spa', amount: '€ 20.00', date: '07/08/2023' },
    { name: 'Shopping', icon: 'shopping_cart', amount: '€ 100.00', date: '08/08/2023' },
    { name: 'Restaurante', icon: 'restaurant', amount: '€ 40.00', date: '09/08/2023' },
  ];
}
