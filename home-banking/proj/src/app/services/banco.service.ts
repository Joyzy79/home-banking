import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BancoService {
  private saldo: number = 1000; // Saldo inicial

  getSaldo(): number {
    return this.saldo;
  }

  depositar(valor: number): void {
    this.saldo += valor;
  }

  retirar(valor: number): void {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      // Tratar caso o valor seja maior que o saldo disponível
      console.error('Saldo insuficiente');
    }
  }
}







