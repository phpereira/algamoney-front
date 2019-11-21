import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import {TooltipModule} from 'primeng/tooltip';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';

@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavbarComponent,
    PessoaPesquisaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    PaginatorModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
