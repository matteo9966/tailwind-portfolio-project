import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  ViewContainerRef,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryImageComponent } from 'src/app/components/gallery-image/gallery-image.component';
import { Subject } from 'rxjs';
const imagesList = [
  {
    src: 'assets/images/gallery1.jpg',
    alt: 'animal image',
  },
  {
    src: 'assets/images/gallery2.jpg',
    alt: 'animal image',
  },
  {
    src: 'assets/images/gallery3.jpg',
    alt: 'animal image',
  },
  {
    src: 'assets/images/gallery4.jpg',
    alt: 'animal image',
  },
  {
    src: 'assets/images/gallery5.jpg',
    alt: 'animal image',
  },
  {
    src: 'assets/images/gallery6.jpg',
    alt: 'animal image',
  },
  {
    src: 'assets/images/gallery7.jpg',
    alt: 'animal image',
  },
  {
    src: 'assets/images/gallery8.jpg',
    alt: 'animal image',
  },
  {
    src: 'assets/images/gallery9.jpg',
    alt: 'animal image',
  },
  {
    src: 'assets/images/gallery10.jpg',
    alt: 'animal image',
  },
  {
    src: 'assets/images/gallery11.jpg',
    alt: 'animal image',
  },
  {
    src: 'assets/images/gallery12.jpg',
    alt: 'animal image',
  },
  {
    src: 'assets/images/gallery13.jpg',
    alt: 'animal image',
  },
];

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | undefined;
  images = imagesList;
  current = 0;
  intersect$ = new Subject(); //this subject emits when is empty

  @ViewChild('containerRef', { read: ViewContainerRef })
  //@ts-ignore
  container: ViewContainerRef;

  @ViewChild('observe')
  //@ts-ignore
  observe: ElementRef;

  ngAfterViewInit(): void {
    this.createObserverAndObserve()
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.intersect$.complete();
  }

  //TODO: listen to loaded event on current image before going to next one
  appendImage() {
    if (this.current >= this.images.length) {
      this.observer?.disconnect();
      return;
    }
    const component = this.container.createComponent(GalleryImageComponent);
    component.instance.src = imagesList[this.current].src;
    component.instance.alt = imagesList[this.current].alt;
    this.current++;
    component.changeDetectorRef.detectChanges();
  }

  /**
   * @description creates the intersection observer and starts observing
   * the span that shows the element
   */
  createObserverAndObserve() {
    this.observer = new IntersectionObserver((entries) => {
      const observed=entries[0];
      if(observed.isIntersecting || observed.intersectionRatio>0){
        this.appendImage();
      }
    });
    this.observer.observe(this.observe.nativeElement);
  }
}
