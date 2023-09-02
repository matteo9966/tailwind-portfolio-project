import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBtnMobileComponent } from './navbar-btn-mobile.component';

describe('NavbarBtnMobileComponent', () => {
  let component: NavbarBtnMobileComponent;
  let fixture: ComponentFixture<NavbarBtnMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavbarBtnMobileComponent]
    });
    fixture = TestBed.createComponent(NavbarBtnMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
