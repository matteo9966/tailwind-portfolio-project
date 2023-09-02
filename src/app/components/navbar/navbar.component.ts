import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../button/button.component";
import { NavbarMenuItemComponent } from "../navbar-menu-item/navbar-menu-item.component";
import { NavbarBtnMobileComponent } from "../navbar-btn-mobile/navbar-btn-mobile.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, ButtonComponent, NavbarMenuItemComponent, NavbarBtnMobileComponent]
})
export class NavbarComponent {

}
