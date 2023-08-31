import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slides',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlidesComponent {
  currentIndex = 0;

  data = [
    {
      imageURL: 'assets/images/avatar1.webp',
      description:
        'Zoo, you are the best! We were so pleased to support an animal by visiting your fantastic place! Definitely will come back! "',
      name: 'Anz Zimmer',
    },
    {
      imageURL: 'assets/images/avatar2.webp',
      description:
        'I visited the zoo with my family and it was an amazing experience. All animals were well-groomed and active.  "',
      name: 'Anz Zimmer 2',
    },
    {
      imageURL: 'assets/images/avatar3.webp',
      description:
        'The zoo exceeded my expectations in every way. The animal exhibits were extensive, and the animals appeared to be well-cared! "',
      name: 'Anz Zimmer 3',
    },
    {
      imageURL: 'assets/images/avatar4.webp',
      description:
        'My family and I had a wonderful time at the zoo! The animal exhibits were well-maintained and offered a variety! "',
      name: 'Anz Zimmer 4',
    },
  ];

  setCurrentIndex(i:number){
    this.currentIndex=i;
  }
}
