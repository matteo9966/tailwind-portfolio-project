import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryImageComponent } from './gallery-image.component';

describe('GalleryImageComponent', () => {
  let component: GalleryImageComponent;
  let fixture: ComponentFixture<GalleryImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GalleryImageComponent]
    });
    fixture = TestBed.createComponent(GalleryImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});