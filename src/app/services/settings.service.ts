import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkedTheme = document.querySelector('#theme');

  constructor() {
    // TEMA DEFAULT ./assets/css/colors/blue-dark.css
    // * 1. Get theme from localStorage
    const selectedThemeUrl = localStorage.getItem('theme') || './assets/css/colors/blue-dark.css';
    // * 2. Apply the theme
    this.linkedTheme.setAttribute('href', selectedThemeUrl);
  }

  /**
   * 
   * @param theme Theme String
   */
  changeTheme(theme: string): void {
    const url = `./assets/css/colors/${theme}.css`;
    // Cambiar atributo
    this.linkedTheme.setAttribute('href', url);
    // Guardar el tema
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }


  checkCurrentTheme(): void {
    const links = document.querySelectorAll('.selector');

    // * 2. Barrer el elemento
    links.forEach(elem => {
      // * 2.1 Eliminar la clase working
      elem.classList.remove('working');
      // * 2.2 Obtener el valor data-theme que contiene el nombre del tema
      const btnTheme = elem.getAttribute('data-theme');
      // * 2.3 Hacer dos urls
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkedTheme.getAttribute('href');

      // * 2.3 Agregar la clase working
      if (btnThemeUrl === currentTheme) {
        elem.classList.add('working');
      }

    });
  }
  
}
