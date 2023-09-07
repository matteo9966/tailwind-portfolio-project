import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  inject,
  ChangeDetectorRef,
  ViewChild,
  HostListener,
  Renderer2,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowImageComponent } from '../slideshow-image/slideshow-image.component';
import {
  Subject,
  combineLatest,
  combineLatestWith,
  interval,
  map,
  sampleTime,
  switchMap,
} from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-images-slideshow',
  standalone: true,
  imports: [CommonModule, SlideshowImageComponent],
  templateUrl: './images-slideshow.component.html',
  styleUrls: ['./images-slideshow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagesSlideshowComponent {
  private _scrollX = 0;

  images=[
    {src:'assets/images/gallery1.jpg',alt:'gallery image'},
    {src:'assets/images/gallery2.jpg',alt:'gallery image'},
    {src:'assets/images/gallery3.jpg',alt:'gallery image'},
    {src:'assets/images/gallery4.jpg',alt:'gallery image'},
    {src:'assets/images/gallery5.jpg',alt:'gallery image'},
    {src:'assets/images/gallery6.jpg',alt:'gallery image'},
    {src:'assets/images/gallery7.jpg',alt:'gallery image'},
    {src:'assets/images/gallery8.jpg',alt:'gallery image'},
    {src:'assets/images/gallery9.jpg',alt:'gallery image'},
    {src:'assets/images/gallery10.jpg',alt:'gallery image'},
    {src:'assets/images/gallery11.jpg',alt:'gallery image'},
    {src:'assets/images/gallery12.jpg',alt:'gallery image'},
  ]

  mouseMove$ = new Subject<{ x: number; y: number }>();
  mouseLeave$ = new Subject<boolean>();
  mouseEnter$ = new Subject<boolean>();
  mouseInside$ = this.mouseLeave$.pipe(
    combineLatestWith(this.mouseEnter$),
    map(([leaved, entered]) => {
      if (!leaved && entered) {
        return true;
      } else {
        return false;
      }
    })
  );
  private _sizesInitialized = false;

  cdr = inject(ChangeDetectorRef);
  renderer = inject(Renderer2);
  //@ts-ignore
  @ViewChild('container', { read: ElementRef }) container: ElementRef;
  @ViewChild('imagescontainer', { read: ElementRef })
  //@ts-ignore
  imagesContainer: ElementRef;
  //@ts-ignore
  imagesContainerScrollWidth: number;
  //@ts-ignore
  containerWidth: number;

  constructor() {
    this.mouseMove$
      .pipe(
        takeUntilDestroyed(),
        sampleTime(100),
        combineLatestWith(interval(100), this.mouseInside$)
      )
      .subscribe(([val, _interval, inside]) => {
        if (inside) {
          this.scroll(val.x, this.containerWidth);
        }
      });
  }

  //scroll to the middle when view is created with

  ngAfterViewInit() {
    //use transform translate
    const containerElement = <HTMLElement>this.container.nativeElement;
    const imagesContainerElement = <HTMLElement>(
      this.imagesContainer.nativeElement
    );
    if (!containerElement || !imagesContainerElement) {
      return;
    }
    this._sizesInitialized = true;
    this.containerWidth = containerElement.clientWidth;
    this.imagesContainerScrollWidth = imagesContainerElement.scrollWidth;

    const middle = Math.floor(
      (this.imagesContainerScrollWidth - this.containerWidth) / 2
    );
    this.scrolledX = middle;
  }

  onMouseOver(e: MouseEvent) {
    if (e == null || !e.target) {
      return;
    }
    const rect = this.container.nativeElement.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top;
    this.mouseMove$.next({ x, y });
  }

  onMouseEnter() {
    this.mouseEnter$.next(true);
    this.mouseLeave$.next(false);
  }
  onMouseLeave() {
    this.mouseEnter$.next(false);
    this.mouseLeave$.next(true);
  }

  /**
   * @description set the scrolledX value to translate the slideshow
   */
  set scrolledX(x: number) {
    const translateX = (x: number) => {
      this.renderer.setStyle(
        this.imagesContainer.nativeElement,
        'transform',
        `translateX(-${x}px)`
      );
    };

    //check if still scrollable
    if (!this._sizesInitialized) {
      return;
    }

    if (x >= this.imagesContainerScrollWidth - this.containerWidth || x < 0) {
      return;
    }
    this._scrollX = x;
    translateX(this._scrollX);
  }

  scroll(mouseX: number, clientWidth: number) {
    const speed=12; //change this speed to make the scroll go faster
    const road = Math.round(this.containerWidth/2);

    if (!mouseX || !clientWidth) return;
    const offsetPause = 0.1 * this.containerWidth; 
    const middle = Math.floor(clientWidth / 2);
    if (mouseX > middle - offsetPause && mouseX < middle + offsetPause) {
      // a space interval within the item stops scrolling [  |<here i dont scroll>|  ]
      return;
    }



    if (mouseX > middle) {
      //translate left

      const travelSpeed = Math.round(((mouseX - road)/road)*speed);
    
      this.scrolledX = this._scrollX + travelSpeed;
    } else {
      const travelSpeed = Math.round(((road-mouseX)/road)*speed);
      this.scrolledX = this._scrollX - travelSpeed;
    }
  }
}
