import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-text-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-card.component.html',
  styleUrls: ['./text-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
/**
 * @description TextCardComponent is the card inside the home page that is animated when hovering with the mouse.
 * it contains a short description and an icon that is animated
 */
export class TextCardComponent {

}
