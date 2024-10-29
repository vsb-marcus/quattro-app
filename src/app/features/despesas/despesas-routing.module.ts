import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDespesasComponent } from './component/list-despesas/list-despesas.component';
import { AddEditDespesasComponent } from './component/add-edit-despesas/add-edit-despesas.component';

const routes: Routes = [
    {
      path: '',
      component: ListDespesasComponent,
    },
    {
    path: 'add-edit',
    component: AddEditDespesasComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class DespesasRoutingModule { }