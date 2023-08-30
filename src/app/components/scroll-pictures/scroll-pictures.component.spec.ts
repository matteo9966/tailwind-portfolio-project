import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollPicturesComponent } from './scroll-pictures.component';

describe('ScrollPicturesComponent', () => {
  let component: ScrollPicturesComponent;
  let fixture: ComponentFixture<ScrollPicturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ScrollPicturesComponent]
    });
    fixture = TestBed.createComponent(ScrollPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
