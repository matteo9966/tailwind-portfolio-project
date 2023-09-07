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
  @Input({ required: true }) src: string;
  //@ts-ignore
  @Input({ required: true }) alt: string;

  elementRef = inject(ElementRef);
  render = inject(Renderer2);
}
