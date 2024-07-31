import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEmpresasComponent } from './menu-empresas.component';

describe('MenuEmpresasComponent', () => {
  let component: MenuEmpresasComponent;
  let fixture: ComponentFixture<MenuEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuEmpresasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
