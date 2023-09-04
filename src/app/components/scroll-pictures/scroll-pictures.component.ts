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
  slidingImages = [
    {
      description: 'Visit the zoo and meet the animals',
      imageUrl: 'assets/images/gallery1.jpg',
    },
    {
      description: 'Have fun in their habitat',
      imageUrl: 'assets/images/gallery2.jpg',
    },
    {
      description: 'Play with the animals',
      imageUrl: 'assets/images/gallery3.jpg',
    },
    {
      description: 'Just relax in the nature with the pets',
      imageUrl: 'assets/images/gallery4.jpg',
    },
    {
      description: 'Meet the best creatures of the world',
      imageUrl: 'assets/images/gallery5.jpg',
    },
    {
      description: 'Not only small but also big animals',
      imageUrl: 'assets/images/gallery6.jpg',
    },
    {
      description: 'Explore the savana',
      imageUrl: 'assets/images/gallery7.jpg',
    },
    {
      description: 'Enjoy the company of the animals',
      imageUrl: 'assets/images/gallery8.jpg',
    },
  ];
}
