import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDrawerComponent } from './text-drawer.component';

describe('TextDrawerComponent', () => {
  let component: TextDrawerComponent;
  let fixture: ComponentFixture<TextDrawerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TextDrawerComponent]
    });
    fixture = TestBed.createComponent(TextDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
