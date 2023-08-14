import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';
import { AuthGuard } from './auth.guard'; 
import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'movimentos', component: MovimentacaoComponent, canActivate: [AuthGuard] }, // Protegida por AuthGuard
  { path: 'movimentos/:id', component: MovimentacaoComponent, canActivate: [AuthGuard] }, // Protegida por AuthGuard
  { path: 'alterar-senha', component: AlterarSenhaComponent, canActivate: [AuthGuard] } // Protegida por AuthGuard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



