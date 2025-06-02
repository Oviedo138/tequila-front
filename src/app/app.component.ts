import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import SwiperCore, { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';
import { Option } from './components/banner-sec/options.component';

import * as AOS from 'aos';
SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tequila-front';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (isPlatformBrowser(this.platformId)) {
          window.scrollTo(0, 0);
        }
      }
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (isPlatformBrowser(this.platformId)) {
        AOS.init({
          once: true,
        });
      }
    }, 100);
  }

  onOptionSelected(option: Option): void {
    console.log('Opción seleccionada:', option);

    // Aquí puedes manejar la lógica cuando se selecciona una opción
    // Por ejemplo, navegar a una ruta específica, filtrar contenido, etc.

    switch(option.id) {
      case 'vive-magia':
        console.log('Navegando a Vive su magia');
        this.router.navigate(['/vive-magia']);
        break;
      case 'atractivos-actividades':
        console.log('Navegando a Atractivos actividades');
        this.router.navigate(['/atractivos-actividades']);
        break;
      case 'festividades':
        console.log('Navegando a Festividades');
        this.router.navigate(['/festividades']);
        break;
      case 'hoteles':
        console.log('Navegando a Hoteles');
        this.router.navigate(['/hoteles']);
        break;
      case 'restaurante':
        console.log('Navegando a Restaurante');
        this.router.navigate(['/restaurante']);
        break;
      case 'tours':
        console.log('Navegando a Tours');
        this.router.navigate(['/tours']);
        break;
      default:
        console.log('Opción no reconocida');
    }
  }
}
