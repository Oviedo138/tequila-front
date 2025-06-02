import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display current year', () => {
    const currentYear = new Date().getFullYear();
    expect(component.currentYear).toBe(currentYear);
  });

  it('should render copyright text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.copyright')?.textContent).toContain('Pueblos Mágicos | México Desconocido');
  });

  it('should render privacy link', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.privacy-link')?.textContent).toContain('Avisos de privacidad');
  });

  it('should call onPrivacyClick when privacy link is clicked', () => {
    spyOn(component, 'onPrivacyClick');
    const privacyLink = fixture.nativeElement.querySelector('.privacy-link');
    privacyLink.click();
    expect(component.onPrivacyClick).toHaveBeenCalled();
  });
});
