import { ChangeDetectionStrategy, Component,EventEmitter,Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-btn-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-btn-mobile.component.html',
  styleUrls: ['./navbar-btn-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarBtnMobileComponent {
 @Output() openChange:EventEmitter<boolean> = new EventEmitter()
 open=true;
}
