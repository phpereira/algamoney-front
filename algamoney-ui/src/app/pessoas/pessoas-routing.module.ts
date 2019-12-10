import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoaCadastroComponent } from './pessoas-cadastro/pessoas-cadastro.component';


const routes: Routes = [
  {
    path: 'pessoas',
    component: PessoaPesquisaComponent,
    data: { roles: ['ROLE_PESQUISAR_PESSOA'] }
  },
  {
    path: 'pessoas/novo',
    component: PessoaCadastroComponent,
    data: { roles: ['ROLE_CADASTRAR_PESSOA'] }
  },
  {
    path: 'pessoas/:codigo',
    component: PessoaCadastroComponent,
    data: { roles: ['ROLE_CADASTRAR_PESSOA'] }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }
