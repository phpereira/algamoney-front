import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {
  lancamentos = [
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date('06, 30, 2017'),
      dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José' },
    { tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: new Date('06, 10, 2017'),
      dataPagamento: new Date('06, 09, 2017'), valor: 80000, pessoa: 'Atacado Brasil' },
    { tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: new Date('07, 20, 2017'),
      dataPagamento: null, valor: 14312, pessoa: 'Ministério da Fazenda' },
    { tipo: 'DESPESA', descricao: 'Mensalidade de escola', dataVencimento: new Date('06, 05, 2017'),
      dataPagamento: new Date('05, 30, 2017'), valor: 800, pessoa: 'Escola Abelha Rainha' },
    { tipo: 'RECEITA', descricao: 'Venda de carro', dataVencimento: new Date('08, 18, 2017'),
      dataPagamento: null, valor: 55000, pessoa: 'Sebastião Souza' },
    { tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: new Date('07, 10, 2017'),
      dataPagamento: new Date('07, 09, 2017'), valor: 1750, pessoa: 'Casa Nova Imóveis' },
    { tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: new Date('07, 13, 2017'),
      dataPagamento: null, valor: 180, pessoa: 'Academia Top' }
  ];
}
