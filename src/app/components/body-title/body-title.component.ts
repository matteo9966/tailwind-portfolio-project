import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body-title.component.html',
  styleUrls: ['./body-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BodyTitleComponent {
  //@ts-ignore
  @Input({required:true}) title:string;
  //@ts-ignore
  @Input({required:true}) description:string;
  
}
