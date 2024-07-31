import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPracticasComponent } from './menu-practicas.component';

describe('MenuPracticasComponent', () => {
  let component: MenuPracticasComponent;
  let fixture: ComponentFixture<MenuPracticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPracticasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPracticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
