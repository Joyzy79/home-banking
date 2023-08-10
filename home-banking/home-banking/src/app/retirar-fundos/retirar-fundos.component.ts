import { Component } from '@angular/core';

@Component({
  selector: 'app-retirar-fundos',
  templateUrl: './retirar-fundos.component.html',
  styleUrls: ['./retirar-fundos.component.css']
})
export class RetirarFundosComponent {
  currentBalance: number = 1000; // Exemplo de saldo inicial

  withdrawAmount: number = 0;

  withdrawFunds() {
    if (this.withdrawAmount > 0 && this.withdrawAmount <= this.currentBalance) {
      this.currentBalance -= this.withdrawAmount; // Aqui podemos deduzir o valor retirado do saldo atual
      this.withdrawAmount = 0; // Aqui limpa o campo de valor de retirada
      // Aqui podemos adicionar mais lógica, como atualizar o saldo no servidor, etc.
    } else {
      // Tratamento para casos em que o valor é inválido ou excede o saldo atual
      console.log('Saldo insuficiente');
    }
  }
}

