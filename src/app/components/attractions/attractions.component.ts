import { Component } from '@angular/core';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrl: './attractions.component.scss'
})
export class AttractionsComponent {
  public url = 'assets/images/Attractions/'
  public attractions = [`${this.url}1.webp`,`${this.url}2.jpeg`,`${this.url}3.jpeg`,`${this.url}4.avif`,`${this.url}5.jpg`];
}
