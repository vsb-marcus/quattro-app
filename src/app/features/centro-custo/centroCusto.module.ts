import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { AddEditCentrocustoComponent } from './component/add-edit-centrocusto/add-edit-centrocusto.component';
import { ListCentrocustoComponent } from './component/list-centrocusto/list-centrocusto.component';

@NgModule({
  declarations: [
    // AddEditDespesasComponent,
    // ListDespesasComponent
  
    AddEditCentrocustoComponent,
    ListCentrocustoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule,
  ],
})
export class CentroCustoModule { }