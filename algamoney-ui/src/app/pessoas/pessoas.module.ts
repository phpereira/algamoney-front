import { PessoasRoutingModule } from './pessoas-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { SharedModule } from './../shared/shared.module';
import { PessoaCadastroComponent } from './pessoas-cadastro/pessoas-cadastro.component';
import { PessoaPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';



@NgModule({
  declarations: [
    PessoaPesquisaComponent,
    PessoaCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputMaskModule,
    TableModule,
    TooltipModule,
    ButtonModule,
    PaginatorModule,
    InputTextModule,

    SharedModule,
    PessoasRoutingModule
  ],
  exports: []
})
export class PessoasModule { }
