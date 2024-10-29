import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [], //Implement auth guard here
    children: [
      {
        path: 'despesas',
        loadChildren: () => import('./features/despesas/despesa.module').then((module) => module.DespesasModule)
      },

      {
        path: '', redirectTo: 'despesas', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
