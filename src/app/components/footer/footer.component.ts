import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  constructor() { }

  onPrivacyClick(): void {
    // Aquí puedes manejar la navegación a avisos de privacidad
    console.log('Navegando a avisos de privacidad');
  }
}
