import { ChangeDetectionStrategy, Component,HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from "../button/button.component";

@Component({
    selector: 'app-mobile-menu',
    standalone: true,
    templateUrl: './mobile-menu.component.html',
    styleUrls: ['./mobile-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('enterMenu', [
            state('in', style({ width: '400px' })),
            transition(':enter', [
                style({ width: '0px' }),
                animate("0.7s  cubic-bezier(0.060, 0.975, 0.195, 0.985)", style({ width: '400px' })),
            ]),
            transition(':leave', [
                animate("0.3s  cubic-bezier(0.060, 0.975, 0.195, 0.985)", style({ 'width': '0px' }))
            ])
        ]),
    ],
    host: {
        '[style.overflow]': 'hidden',
        '[@enterMenu]': 'in'
    },
    imports: [CommonModule, RouterLink, ButtonComponent]
})
export class MobileMenuComponent {
}
