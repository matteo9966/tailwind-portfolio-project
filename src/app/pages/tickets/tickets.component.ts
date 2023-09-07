import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from 'src/app/components/hero/hero.component';
import { BodyTitleComponent } from 'src/app/components/body-title/body-title.component';
import { ToggleComponent } from "../../components/toggle/toggle.component";

@Component({
    selector: 'app-tickets',
    standalone: true,
    templateUrl: './tickets.component.html',
    styleUrls: ['./tickets.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, HeroComponent, BodyTitleComponent, ToggleComponent]
})
export class TicketsComponent {

}
