import { ChangeDetectionStrategy, Component,ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-slides',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlidesComponent {
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
  currentIndex = 0;
  constructor(private cdr:ChangeDetectorRef){
    this.circulateUsers();
  }


  setCurrentIndex(i: number) {
    this.currentIndex = i;
  }

  circulateUsers() {
    interval(3000).pipe(takeUntilDestroyed()).subscribe(()=>{
      const length= this.data.length;
      if(length===0){
        return
      }
      if(this.currentIndex>=length-1){
        this.currentIndex=0;
      }
      else{
        this.currentIndex++;
      }
      this.cdr.markForCheck();
    });
  }
}
