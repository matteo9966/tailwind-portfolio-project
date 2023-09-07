import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SlideIn2Directive } from 'src/app/directives/slide-in-2.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage,SlideIn2Directive],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  //@ts-ignore
  @Input({required:true}) backgroundSrc: string;
  //@ts-ignore
  @Input({required:true}) altBg: string;
  //@ts-ignore
  @Input({required:true}) title: string;
  //@ts-ignore
  @Input() subtitle: string;

}
