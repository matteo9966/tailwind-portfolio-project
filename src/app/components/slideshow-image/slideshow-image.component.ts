import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slideshow-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slideshow-image.component.html',
  styleUrls: ['./slideshow-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideshowImageComponent {
  //@ts-ignore
  @Input({ required: true }) slideNumbers: number;
  //@ts-ignore
  @Input({ required: true }) slideNumber: number;

  elementRef = inject(ElementRef);
  render = inject(Renderer2);
  ngOnInit() {
    if (this.slideNumbers > 0) {
      const middle = Math.floor(this.slideNumbers / 2);
      if (this.slideNumber == middle) {
    
      }
    }
  }
}
