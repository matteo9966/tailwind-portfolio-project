import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowImageComponent } from './slideshow-image.component';

describe('SlideshowImageComponent', () => {
  let component: SlideshowImageComponent;
  let fixture: ComponentFixture<SlideshowImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SlideshowImageComponent]
    });
    fixture = TestBed.createComponent(SlideshowImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
