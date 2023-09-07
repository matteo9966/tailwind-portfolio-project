import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesSlideshowComponent } from './images-slideshow.component';

describe('ImagesSlideshowComponent', () => {
  let component: ImagesSlideshowComponent;
  let fixture: ComponentFixture<ImagesSlideshowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ImagesSlideshowComponent]
    });
    fixture = TestBed.createComponent(ImagesSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
