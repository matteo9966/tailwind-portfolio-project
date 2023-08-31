import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, delay, filter } from 'rxjs';

@Directive({
  selector: '[observeVisibility]',
  standalone:true,
})
/** 
 * @description how it works:
 * this directive uses the intersectio observer of the dom.
 * it emits a visible event when the element is visible in the dom.
 * 
 * Inside the ngOnInit create the observer. 
 * check for entry.isIntersecting || entry.intersectionRatio > 0 inside 
 * the callback function provided to the intersectionObserver class.
 * if is observable use a subject$ observable inside the directive and 
 * call next with the intersection entry and the observer
 * 
 * inside ngAfterViewInit start observing the observable, 
 * subscribe to the subject$ 
 * 
 * isVisible function:
 * it is usedd inside the callback function of the subject$ subscription:
 * i recieve a value from the subject and check if the element is visible:
 *  - create an intersection observer that emits obly once: 
 *   -- create the observer, pass the element and return a promise that resolves with entry.intersectionRatio > 0 
 *      and disconnect
 * if is visible emit the visible event and stop observing
 *   
 * 
 * */ 
export class ObserveVisibilityDirective
  implements OnDestroy, OnInit, AfterViewInit {
  @Input() debounceTime = 200;
  @Input() threshold = 1;
  @Output() visible = new EventEmitter<HTMLElement>();

  private observer: IntersectionObserver | undefined;
  private subject$ = new Subject<{
    entry: IntersectionObserverEntry;
    observer: IntersectionObserver;
  }|null>();

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.createObserver();
  }

  ngAfterViewInit() {
    this.startObservingElements();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }

    this.subject$.next(null);
    this.subject$.complete();
  }

  private isVisible(element: HTMLElement) {
    return new Promise(resolve => {
      const observer = new IntersectionObserver(([entry]) => {
        resolve(entry.intersectionRatio > 0 );
        observer.disconnect();
      });

      observer.observe(element);
    });
  }

  private createObserver() {
    const options = {
      rootMargin: '0px',
      // threshold: this.threshold,
    };

    const isIntersecting = (entry: IntersectionObserverEntry) =>
      entry.isIntersecting || entry.intersectionRatio > 0;

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (isIntersecting(entry)) {
          this.subject$.next({ entry, observer });
        }
      });
    }, options);
  }

  private startObservingElements() {
    if (!this.observer) {
      return;
    }

    this.observer.observe(this.element.nativeElement);

    this.subject$
      .pipe(delay(this.debounceTime), filter(Boolean))
      .subscribe(async ({ entry, observer }) => {
        const target = entry.target as HTMLElement;
        const isStillVisible = await this.isVisible(target);

        if (isStillVisible) {
          this.visible.emit(target);
          observer.unobserve(target);
        }
      });
  }
}