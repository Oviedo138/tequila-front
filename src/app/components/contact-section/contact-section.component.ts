import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {

  // public images = [
  //   '/assets/images/logos/mex2.png',
  //   '/assets/images/logos/mex2.png',
  //   '/assets/images/logos/mex2.png',
  //   '/assets/images/logos/mex2.png',
  // ]

  constructor(
    // private renderer: Renderer2,
    // private router: Router,
    @Inject(PLATFORM_ID) private platformId: any,
  ) { }

  goTo(path: any, event?: any) {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        let element = document.querySelector('#' + path) as HTMLElement;
        let topOfElement = element.offsetTop - 100;
        window.scroll({ top: topOfElement, behavior: 'smooth' });
      }, 200);
    }
  }

}
