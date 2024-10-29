import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    // IconsModule,
    // SharedModule,
    FormsModule,
    // NgSelectModule
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,  // Módulo do sidenav
    MatListModule,       // Módulo para a lista de navegação,
    MatExpansionModule
  ]
})
export class LayoutModule { }