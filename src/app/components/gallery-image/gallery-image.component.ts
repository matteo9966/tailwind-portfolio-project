import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  Inject,
  ElementRef,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule,NgOptimizedImage} from '@angular/common';
import { BehaviorSubject, Subject } from 'rxjs';
@Component({
  selector: 'app-gallery-image',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryImageComponent {
  @Input({ required: true }) src = '';
  @Input({ required: true }) alt = '';
  @Output() loaded: EventEmitter<boolean> = new EventEmitter();
  elementRef = Inject(ElementRef);
  // changeDetectionRef = Inject(ChangeDetectorRef)
   private showBlurry$ = new BehaviorSubject(true) ;

  onLoaded(e: any) {
    this.loaded.emit(true);
    setTimeout(() => {
      this.showBlurry$.next(false);
      this.showBlurry$.complete();
    }, 2000);
  }

  get blurry$(){
    return this.showBlurry$.asObservable();
  }
}
