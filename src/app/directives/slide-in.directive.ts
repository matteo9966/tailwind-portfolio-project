import { Directive,Input } from '@angular/core';
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
/**
 * @description this is a slide in directive intended to reuse the animations
 *
 */
@Directive({
  selector: '[appSlideIn]',
  standalone: true,
  exportAs:'slideIn'
})
export class SlideInDirective implements AfterViewInit {
  private renderer = inject(Renderer2);
  private element = inject(ElementRef);
  private animationBuilder = inject(AnimationBuilder)
  
  //@ts-ignore
  @Input({required:true}) hideClass:string;
  
  constructor() {}

   // @ts-ignore
   player: AnimationPlayer;

  ngAfterViewInit(): void {
    this.renderer.addClass(this.element.nativeElement, this.hideClass);
  }
  runSlideInAnimations(){
    if(this.player){
      this.player.destroy()
    }
    const factory = this.animationBuilder.build(slideInAnimation);
    this.player = factory.create(this.element.nativeElement);
    this.player.play();
  }
}
