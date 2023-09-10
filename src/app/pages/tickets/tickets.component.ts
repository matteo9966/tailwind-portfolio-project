import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from 'src/app/components/hero/hero.component';
import { BodyTitleComponent } from 'src/app/components/body-title/body-title.component';
import { ToggleComponent } from '../../components/toggle/toggle.component';
import { TicketCardComponent } from 'src/app/components/ticket-card/ticket-card.component';
import { Ticket } from 'src/app/models/tickets.interface';

@Component({
  selector: 'app-tickets',
  standalone: true,
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    HeroComponent,
    BodyTitleComponent,
    ToggleComponent,
    TicketCardComponent,
  ],
})
export class TicketsComponent {
  isWeekend = false;

  tickets: Ticket[] = [
    {
      detailList: [
        'Free Wi-Fi',
        'Photo With Animals',
        'Babies are free',
        'Audio tour guide',
      ],
      longDescription:
        'Our Zoo is home to over 1,000 animals from around the world, including mammals, birds, reptiles.',
      subtitle: '4-12 yrs',
      price: 13,
      title: 'Child',
    },
    {
      detailList: [
        'From 3 adults',
        'From 5 children',
        'Babies are free',
        'Audio tour guide',
      ],
      longDescription:
        'Our Zoo is home to over 1,000 animals from around the world, including mammals, birds, reptiles.',
      subtitle: '4-12+ yrs',
      price: 50,
      title: 'Family',
    },
    {
      detailList: [
        'From 3 adults',
        'From 5 children',
        'Babies are free',
        'Audio tour guide',
      ],
      longDescription:
        'Our Zoo is home to over 1,000 animals from around the world, including mammals, birds, reptiles.',
      subtitle: '12+ yrs',
      price:25,
      title: 'Adult',
    },
  ];

  onChangeActive(active: boolean) {
    this.isWeekend = active;
  }
}
