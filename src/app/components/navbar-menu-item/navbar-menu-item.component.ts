import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-menu-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-menu-item.component.html',
  styleUrls: ['./navbar-menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarMenuItemComponent {
  @Input() label="";
  @Input() menuLinks:{label:string,link:string}[]=[]
}
