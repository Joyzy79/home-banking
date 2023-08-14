import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service'; // Importe o AuthService

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent implements OnInit {
  senhaForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.senhaForm = this.formBuilder.group({
      novaSenha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }

  alterarSenha(): void {
    if (this.senhaForm.valid) {
      const novaSenha = this.senhaForm.get('novaSenha')?.value;
      // Lógica para alterar a senha aqui
      console.log('Nova senha:', novaSenha);
    }
  }
}

