import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureCardComponent } from '../picture-card/picture-card.component';

@Component({
  selector: 'app-scroll-pictures',
  standalone: true,
  imports: [CommonModule, PictureCardComponent],
  templateUrl: './scroll-pictures.component.html',
  styleUrls: ['./scroll-pictures.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollPicturesComponent {

}
