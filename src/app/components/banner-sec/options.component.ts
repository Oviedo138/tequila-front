import { Component, EventEmitter, Output } from '@angular/core';

export interface Option {
  id: string;
  icon: string;
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
      icon: '🏛️',
      label: 'Vive su magia'
    },
    {
      id: 'atractivos-actividades',
      icon: '🎯',
      label: 'Atractivos actividades'
    },
    {
      id: 'festividades',
      icon: '🎭',
      label: 'Festividades'
    },
    {
      id: 'hoteles',
      icon: '🏨',
      label: 'Hoteles'
    },
    {
      id: 'restaurante',
      icon: '🍽️',
      label: 'Restaurante'
    },
    {
      id: 'tours',
      icon: '📷',
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
