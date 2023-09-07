import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  inject,
  Renderer2,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, fromEvent, throttleTime, takeUntil, map } from 'rxjs';
import { AnimationPlayer } from '@angular/animations';
import { ObserveVisibilityDirective } from 'src/app/directives/observe-visibility.directive';
import { SlideIn2Directive } from 'src/app/directives/slide-in-2.directive';
@Component({
  selector: 'app-moving-images',
  standalone: true,
  imports: [CommonModule, ObserveVisibilityDirective, SlideIn2Directive],
  templateUrl: './moving-images.component.html',
  styleUrls: ['./moving-images.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [],
})
export class MovingImagesComponent implements AfterViewInit, OnDestroy {
  private destroy$ = new Subject();
  private renderer = inject(Renderer2);

  // @ts-ignore
  player: AnimationPlayer;

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  @ViewChild('largeImage') image!: ElementRef;

  @ViewChild('image1') topImage!: ElementRef;
  @ViewChild('image2') bottomImage!: ElementRef;

  ngAfterViewInit(): void {
    this.renderer.addClass(this.image.nativeElement, 'dontshow');

    if (
      this.image.nativeElement &&
      this.topImage.nativeElement &&
      this.bottomImage.nativeElement
    ) {
      fromEvent<MouseEvent>(this.image.nativeElement, 'mousemove')
        .pipe(
          takeUntil(this.destroy$),
          throttleTime(30),
          map((event: MouseEvent) => {
            return {
              xPerc:
                event.offsetX /
                (<HTMLElement>this.image.nativeElement).offsetWidth,
              yPerc:
                event.offsetY /
                (<HTMLElement>this.image.nativeElement).offsetHeight,
            };
          })
        )
        .subscribe((event) => {
          this.renderer.setStyle(
            this.topImage.nativeElement,
            'transform',
            `translate(${10 * event.xPerc}px,${10 * event.yPerc}px)`
          );
          this.renderer.setStyle(
            this.bottomImage.nativeElement,
            'transform',
            `translate(-${10 * event.xPerc}px,-${10 * event.yPerc}px)`
          );
          console.log();
        });
    }

    fromEvent<MouseEvent>(this.image.nativeElement, 'mouseleave')
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.renderer.removeStyle(this.topImage.nativeElement, 'transform');
        this.renderer.removeStyle(this.bottomImage.nativeElement, 'transform');
      });
  }
}
