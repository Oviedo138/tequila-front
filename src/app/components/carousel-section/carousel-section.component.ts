import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-section',
  templateUrl: './carousel-section.component.html',
  styleUrl: './carousel-section.component.scss'
})
export class CarouselSectionComponent {

  public images: any = [
    '/assets/images/carousel/img-2.webp',
    '/assets/images/carousel/img-3.webp',
    '/assets/images/carousel/img-5.webp',
    '/assets/images/carousel/img-1.webp',
    '/assets/images/carousel/img-4.webp',
    '/assets/images/carousel/img-2.webp',
    '/assets/images/carousel/img-3.webp',
    '/assets/images/carousel/img-5.webp',
    '/assets/images/carousel/img-1.webp',
    '/assets/images/carousel/img-4.webp',
    '/assets/images/carousel/img-2.webp',
    '/assets/images/carousel/img-3.webp',
    '/assets/images/carousel/img-5.webp',
    '/assets/images/carousel/img-1.webp',
    '/assets/images/carousel/img-4.webp',
    '/assets/images/carousel/img-2.webp',
    '/assets/images/carousel/img-3.webp',
    '/assets/images/carousel/img-5.webp',
    '/assets/images/carousel/img-1.webp',
    '/assets/images/carousel/img-4.webp',
    '/assets/images/carousel/img-2.webp',
    '/assets/images/carousel/img-3.webp',
    '/assets/images/carousel/img-5.webp',
    '/assets/images/carousel/img-1.webp',
    '/assets/images/carousel/img-4.webp',
    '/assets/images/carousel/img-2.webp',
    '/assets/images/carousel/img-3.webp',
    '/assets/images/carousel/img-5.webp',
    '/assets/images/carousel/img-1.webp',
    '/assets/images/carousel/img-4.webp',
  ];

  swiperConfig: any = {
    allowTouchMove: true,
    navigation: false,
    slidesPerView: 1.1,
    spaceBetween: 0,
    initialSlide: 1,
  };

}
