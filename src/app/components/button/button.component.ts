import { ChangeDetectionStrategy, Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
 @Input() buttonType:'primary'|'secondary'='primary';
 @Input() type:'submit'|'button'='button';
 


}
