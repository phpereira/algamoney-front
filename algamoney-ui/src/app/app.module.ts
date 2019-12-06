import { SegurancaModule } from './seguranca/seguranca.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageModule } from 'primeng/message';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LancamentosModule,
    PessoasModule,
    CoreModule,
    HttpClientModule,
    SegurancaModule,

    MessageModule,

    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
