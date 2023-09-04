import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent {

}
