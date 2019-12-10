import { AuthService } from './../seguranca/auth.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { ToastyModule } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { LancamentoService } from '../lancamentos/lancamento.service';
import { ErrorHandlerService } from './error-handler.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { Title } from '@angular/platform-browser';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NaoAutorizadoComponent } from './nao-autorizado.component';

@NgModule({
  declarations: [NavbarComponent, PaginaNaoEncontradaComponent, NaoAutorizadoComponent],
  imports: [
    CommonModule,
    RouterModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule,
  ],
  exports: [
    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule
  ],
  providers: [
    ErrorHandlerService,
    ConfirmationService,
    LancamentoService,
    Title,
    AuthService,
    JwtHelperService,
    { provide: LOCALE_ID, useValue: 'pt' }
  ]
})
export class CoreModule { }
