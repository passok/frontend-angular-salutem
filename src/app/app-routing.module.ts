import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { PessoasReadComponent } from './components/views/pessoas/pessoas-read/pessoas-read.component';
import { PessoasCreateComponent } from './components/views/pessoas/pessoas-create/pessoas-create.component';
import { PessoasDeleteComponent } from './components/views/pessoas/pessoas-delete/pessoas-delete.component';
import { PessoasUpdateComponent } from './components/views/pessoas/pessoas-update/pessoas-update.component';
import { ContatosReadAllComponent } from './components/views/contatos/contatos-read-all/contatos-read-all.component';
import { ContatosCreateComponent } from './components/views/contatos/contatos-create/contatos-create.component';
import { ContatosUpdateComponent } from './components/views/contatos/contatos-update/contatos-update.component';
import { ContatosDeleteComponent } from './components/views/contatos/contatos-delete/contatos-delete.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:'pessoas',
    component: PessoasReadComponent
  },
  {
    path:'pessoas/create',
    component: PessoasCreateComponent
  },
  {
    path:'pessoas/delete/:id',
    component: PessoasDeleteComponent
  },
  {
    path:'pessoas/update/:id',
    component: PessoasUpdateComponent
  },
  {
    path:'pessoas/:id_p/contatos',
    component: ContatosReadAllComponent
  },
  {
    path:'pessoas/:id_p/contatos/create',
    component: ContatosCreateComponent
  },
  {
    path:'pessoas/:id_p/contatos/:id/update',
    component: ContatosUpdateComponent
  },
  {
    path:'pessoas/:id_p/contatos/:id/delete',
    component: ContatosDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
