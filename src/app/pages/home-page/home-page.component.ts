import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  onOptionSelected(event: any) {
    console.log('Opción seleccionada:', event);
  }

}
