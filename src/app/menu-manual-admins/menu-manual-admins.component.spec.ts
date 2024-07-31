import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuManualAdminsComponent } from './menu-manual-admins.component';

describe('MenuManualAdminsComponent', () => {
  let component: MenuManualAdminsComponent;
  let fixture: ComponentFixture<MenuManualAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuManualAdminsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuManualAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
