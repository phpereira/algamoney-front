import { AuthGuard } from './auth.guard';
import { MoneyHttpInterceptor } from './money-http-interceptor';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegurancaRoutingModule } from './seguranca-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { PasswordModule } from 'primeng/password';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


export function tokenGetter(): string {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    SegurancaRoutingModule,

    InputTextModule,
    ButtonModule,
    FormsModule,
    PasswordModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:8080'],
        blacklistedRoutes: ['http://localhost:8080/oauth/token']
      }
    })
  ],
  providers: [
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MoneyHttpInterceptor,
      multi: true
    },
    AuthGuard
  ]
})
export class SegurancaModule { }

