import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Renderer2,
  inject,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserveVisibilityDirective } from 'src/app/directives/observe-visibility.directive';

@Component({
  selector: 'app-text-card',
  standalone: true,
  imports: [CommonModule, ObserveVisibilityDirective],
  templateUrl: './text-card.component.html',
  styleUrls: ['./text-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/**
 * @description TextCardComponent is the card inside the home page that is animated when hovering with the mouse.
 * it contains a short description and an icon that is animated
 */
export class TextCardComponent implements AfterViewInit {
  renderer = inject(Renderer2);
  elementRef = inject(ElementRef);
  @ViewChild('card')
  cardRef!: ElementRef;

  ngAfterViewInit(): void {
    this.renderer.addClass(this.cardRef.nativeElement, 'hide-class');
  }

  onVisible(){
    this.renderer.addClass(this.cardRef.nativeElement,'show-class-animation')
  }
}
