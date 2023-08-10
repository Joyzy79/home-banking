import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MovimentosComponent } from './movimentos/movimentos.component';
import { DepositarFundosComponent } from './depositar-fundos/depositar-fundos.component';
import { RetirarFundosComponent } from './retirar-fundos/retirar-fundos.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'movimentos', component: MovimentosComponent },
  { path: 'depositar', component: DepositarFundosComponent },
  { path: 'retirar', component: RetirarFundosComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
