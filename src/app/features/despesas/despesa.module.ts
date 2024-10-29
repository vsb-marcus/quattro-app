import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditDespesasComponent } from './component/add-edit-despesas/add-edit-despesas.component';
import { ListDespesasComponent } from './component/list-despesas/list-despesas.component';
import { DespesasRoutingModule } from './despesas-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AddEditDespesasComponent,
    ListDespesasComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DespesasRoutingModule,
    MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule,
    MatIconModule
  ],
})
export class DespesasModule { }