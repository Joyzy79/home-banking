import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BancoService } from '../services/banco.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-operacoes',
  templateUrl: './operacoes.component.html',
  styleUrls: ['./operacoes.component.css']
})
export class OperacoesComponent implements OnInit {
  depositoForm: FormGroup;
  retiradaForm: FormGroup;
  saldoBancario: number = 0;
  movimentos: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private bancoService: BancoService,
    private authService: AuthService
  ) {
    this.depositoForm = this.formBuilder.group({
      valor: ['', Validators.required]
    });

    this.retiradaForm = this.formBuilder.group({
      valor: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.saldoBancario = this.bancoService.getSaldo();
  }

  realizarDeposito(): void {
    const valorDeposito = this.depositoForm.get('valor')?.value;
    this.bancoService.depositar(valorDeposito);
    this.saldoBancario = this.bancoService.getSaldo();
    this.depositoForm.reset();
  }

  realizarRetirada(): void {
    const valorRetirada = this.retiradaForm.get('valor')?.value;
    this.bancoService.retirar(valorRetirada);
    this.saldoBancario = this.bancoService.getSaldo();
    this.retiradaForm.reset();
  }

  // Função para fazer logout
  logout(): void {
    this.authService.logout();
  }
}


