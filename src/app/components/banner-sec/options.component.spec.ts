import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OptionsComponent, Option } from './options.component';

describe('OptionsComponent', () => {
  let component: OptionsComponent;
  let fixture: ComponentFixture<OptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.options-title')?.textContent).toContain('Selecciona tu próxima aventura');
  });

  it('should render all 6 options', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const optionButtons = compiled.querySelectorAll('.option-button');
    expect(optionButtons.length).toBe(6);
  });

  it('should have correct options', () => {
    expect(component.options.length).toBe(6);
    expect(component.options[0].label).toBe('Vive su magia');
    expect(component.options[1].label).toBe('Atractivos actividades');
    expect(component.options[2].label).toBe('Festividades');
    expect(component.options[3].label).toBe('Hoteles');
    expect(component.options[4].label).toBe('Restaurante');
    expect(component.options[5].label).toBe('Tours');
  });

  it('should emit optionSelected when option is clicked', () => {
    spyOn(component.optionSelected, 'emit');
    const testOption = component.options[0];

    component.onOptionClick(testOption);

    expect(component.optionSelected.emit).toHaveBeenCalledWith(testOption);
  });

  it('should set clicked option as active and others as inactive', () => {
    const firstOption = component.options[0];
    const secondOption = component.options[1];

    // Set first option as active initially
    firstOption.isActive = true;

    // Click second option
    component.onOptionClick(secondOption);

    expect(firstOption.isActive).toBeFalsy();
    expect(secondOption.isActive).toBeTruthy();
  });

  it('should add active class to clicked button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const firstButton = compiled.querySelector('.option-button') as HTMLElement;

    firstButton.click();
    fixture.detectChanges();

    expect(firstButton.classList).toContain('active');
  });
});
