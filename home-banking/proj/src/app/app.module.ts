import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';
import { OperacoesComponent } from './operacoes/operacoes.component';
import { ContacteNosComponent } from './contacte-nos/contacte-nos.component';
import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';

const routes: Routes = [
  { path: '', redirectTo: '/movimentacao', pathMatch: 'full' },
  { path: 'movimentacao', component: MovimentacaoComponent },
  { path: 'operacoes', component: OperacoesComponent },
  { path: 'contacte-nos', component: ContacteNosComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MovimentacaoComponent,
    OperacoesComponent,
    ContacteNosComponent,
    AlterarSenhaComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Configuração das rotas
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
localStorage


