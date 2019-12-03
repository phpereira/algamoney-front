import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { LancamentoCadastroComponent } from './lancamentos-cadastro/lancamentos-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';




export const customCurrencyMaskConfig = {
  align: 'right',
  allowNegative: false,
  allowZero: true,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.',
  nullable: true
};

@NgModule({
  declarations: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent
   ],
  imports: [
    CommonModule,
    FormsModule,
    SelectButtonModule,
    CalendarModule,
    DropdownModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    TooltipModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),

    SharedModule
  ],
  exports: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent
  ]
})
export class LancamentosModule { }
