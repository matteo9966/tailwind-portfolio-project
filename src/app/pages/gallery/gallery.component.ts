import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  ViewContainerRef,
  ElementRef,
  OnDestroy,
  ComponentRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryImageComponent } from 'src/app/components/gallery-image/gallery-image.component';
import { Subject, take } from 'rxjs';
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
  loadingImageComponent: ComponentRef<GalleryImageComponent> | null = null;
  @ViewChild('containerRef', { read: ViewContainerRef })
  //@ts-ignore
  container: ViewContainerRef;

  @ViewChild('observe')
  //@ts-ignore
  observe: ElementRef;

  ngAfterViewInit(): void {
    this.createObserverAndObserve();
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
    component.setInput('src',imagesList[this.current].src)
    component.setInput('alt',imagesList[this.current].alt)
    this.current++;
    return component;
  }

  /**
   * @description creates the intersection observer and starts observing
   * the span that shows the element
   */
  createObserverAndObserve() {
    this.observer = new IntersectionObserver((entries) => {
      const observed = entries[0];
      if (this.loadingImageComponent) {
        //wait for it to complete just return, I'll be listening
        return;
      }

      if (observed.isIntersecting || observed.intersectionRatio > 0) {
        const component = this.appendImage();
        if (component) {
          this.loadingImageComponent=component;
          component.instance.loaded //loaded emitter emits when the image is loaded so i can load another image
            .asObservable()
            .pipe(take(1))
            .subscribe(async () => {
              this.loadingImageComponent = null;
              const isVisible = await this.isVisible();
              if(isVisible){
               this.appendImage();

              }
            });
        }
      }
    });
    this.observer.observe(this.observe.nativeElement);
  }
  isVisible(){
    return new Promise(resolve=>{
      const intersection = new IntersectionObserver((entries=>{
          const entry = entries[0];
          if(!entry){
            resolve(false)
            return
          }
         resolve(entry.isIntersecting)
      }));
      intersection.observe(this.observe.nativeElement)
    })
  }
}
