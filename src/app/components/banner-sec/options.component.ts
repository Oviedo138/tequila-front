import { Component, EventEmitter, Output } from '@angular/core';

export interface Option {
  id: string;
  icon: string;
  activeIcon: string;
  label: string;
  isActive?: boolean;
}

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent {
  @Output() optionSelected = new EventEmitter<Option>();

  options: Option[] = [
    {
      id: 'vive-magia',
      icon: 'assets/images/estados_b.svg',
      activeIcon: 'assets/images/estados.svg',
      label: 'Vive su magia'
    },
    {
      id: 'atractivos-actividades',
      icon: 'assets/images/archaeological_b.svg',
      activeIcon: 'assets/images/archaeological.svg',
      label: 'Atractivos actividades'
    },
    {
      id: 'festividades',
      icon: 'assets/images/festividades_b.svg',
      activeIcon: 'assets/images/festividades.svg',
      label: 'Festividades'
    },
    {
      id: 'hoteles',
      icon: 'assets/images/hoteles_b.svg',
      activeIcon: 'assets/images/hoteles.svg',
      label: 'Hoteles'
    },
    {
      id: 'restaurante',
      icon: 'assets/images/restaurantes_b.svg',
      activeIcon: 'assets/images/restaurantes.svg',
      label: 'Restaurante'
    },
    {
      id: 'tours',
      icon: 'assets/images/tours_b.svg',
      activeIcon: 'assets/images/tours.svg',
      label: 'Tours'
    }
  ];

  constructor() { }

  onOptionClick(option: Option): void {
    // Reset all options
    this.options.forEach(opt => opt.isActive = false);

    // Set selected option as active
    option.isActive = true;

    // Emit the selected option
    this.optionSelected.emit(option);
  }
}
