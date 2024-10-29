import { Component } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  title = '🌿 Quattro Café';
  
  isSidenavOpen = false;
  sidenavMode: MatDrawerMode = 'over'; // Definindo o tipo como MatDrawerMode

  constructor(){
    this.checkScreenSize(window.innerWidth);
  }

  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  closeSidenav(): void {
    if (window.innerWidth < 768) {
      this.isSidenavOpen = false;
    }
  }

  checkScreenSize(width: number) {
    if (width > 768) {
      this.isSidenavOpen = true; // Abre o sidenav em telas maiores
      this.sidenavMode = 'side'; // Modo "side" para desktop
    } else {
      this.isSidenavOpen = false; // Fecha o sidenav em telas menores
      this.sidenavMode = 'over'; // Modo "over" para mobile
    }
  }

  logout() {
    // Implementar a lógica de logout aqui, por exemplo, limpar tokens de autenticação e redirecionar para a página de login
    console.log('Usuário deslogado');
    // Aqui você pode redirecionar para a página de login ou outra ação desejada
  }

}
