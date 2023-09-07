import {
  Directive,
  Renderer2,
  ElementRef,
  AfterViewInit,
  inject,
} from '@angular/core';
import { slideInAnimation } from 'src/app/animations/slideIn.animation';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationBuilder,
  AnimationPlayer,
} from '@angular/animations';
import { ObserveVisibilityDirective } from './observe-visibility.directive';
import { take } from 'rxjs';
@Directive({
  selector: '[appSlideIn2]',
  standalone: true,
  hostDirectives: [ObserveVisibilityDirective],
})
export class SlideIn2Directive implements AfterViewInit {
  private renderer = inject(Renderer2);
  private element = inject(ElementRef);
  private animationBuilder = inject(AnimationBuilder);
  private observeVisibility = inject(ObserveVisibilityDirective, {
    self: true,
  });

  // @ts-ignore
  player: AnimationPlayer;

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'opacity', 0);
    //trying directivecomposition
    this.observeVisibility.visible 
      .asObservable()
      .pipe(take(1))
      .subscribe((visible) => {
        
        this.runSlideIn();
      });
  }

  runSlideIn() {
    if (this.player) {
      this.player.destroy();
    }

    const animationFactory = this.animationBuilder.build(slideInAnimation);
    this.player = animationFactory.create(this.element.nativeElement);
    this.player.play();
  }
}
