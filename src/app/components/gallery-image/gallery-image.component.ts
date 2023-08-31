import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  Inject,
  ElementRef,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryImageComponent {
  @Input({ required: true }) src = '';
  @Input({ required: true }) alt = '';
  @Output() loaded: EventEmitter<boolean> = new EventEmitter();
  elementRef = Inject(ElementRef);

  onLoaded(e: any) {
    this.loaded.emit(true);
  }
}
