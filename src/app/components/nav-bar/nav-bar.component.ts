import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  public sidebarVisible: boolean = false;
  public searchbarVisible: boolean = false;

  private scrollListener: boolean = true;
  public scrollFlag: string = '';
  public url: string = '';
  public paddingScrollHeader = '';

  public routers = [
    {
      name: 'Inicio',
      route: '/home',
      goTo: 'nav'
    },
    {
      name: 'Los 177 Pueblos Mágicos',
      route: '/home',
      goTo: 'nav'
    },
    {
      name: 'Estados',
      route: '/home',
      goTo: 'nav'
    },
    {
      name: 'México Desconocido',
      route: '/home',
      goTo: 'nav'
    },
  ]

  constructor(
    private renderer: Renderer2,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any,
  ) { }

  ngOnInit(): void {
    this.scrollListener = true;
    this.renderer.listen('window', 'scroll', (e) => {
      if (this.scrollListener) {
        this.scrollFlag =
          e.target.scrollingElement.scrollTop > 75 ? 'scroll' : '';
        this.paddingScrollHeader = '0px';
      }
    });
  }

  goTo(path: any, event?: any) {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        let element = document.querySelector('#' + path) as HTMLElement;
        let topOfElement = element.offsetTop - 100;
        window.scroll({ top: topOfElement, behavior: 'smooth' });
      }, 200);
    }
  }

  search(value: string) {
    this.router.navigate(['/properties'], {
      queryParams: {
        operation: value,
      }
    });
  }

}
