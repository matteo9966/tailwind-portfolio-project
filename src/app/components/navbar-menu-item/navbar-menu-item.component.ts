import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-menu-item',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar-menu-item.component.html',
  styleUrls: ['./navbar-menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarMenuItemComponent {
  @Input() label="";
  @Input() link =""; //the link to the page
  @Input() menuLinks:{label:string,link:string}[]=[]
}
