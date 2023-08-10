import { Component } from '@angular/core';

@Component({
  selector: 'app-depositar-fundos',
  templateUrl: './depositar-fundos.component.html',
  styleUrls: ['./depositar-fundos.component.css']
})
export class DepositarFundosComponent {
  currentBalance: number = 1000; // Exemplo de saldo inicial

  depositAmount: number = 0;

  depositFunds() {
    if (this.depositAmount > 0) {
      this.currentBalance += this.depositAmount; // Adicionamos o valor depositado ao saldo atual
      this.depositAmount = 0; // Limpamos o campo de valor de depósito
      // Aqui podemos adicionar mais lógica, como atualizar o saldo no servidor no futuro.
    } else {
      // Tratamento para casos em que o valor é inválido
      console.log('Valor de depósito inválido');
    }
  }
}
