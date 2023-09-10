import { ChangeDetectionStrategy, Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ticket } from 'src/app/models/tickets.interface';
@Component({
  selector: 'app-ticket-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketCardComponent {
@Input({required:true}) ticket!: Ticket;
@Input({required:true}) isWeekend!:boolean;
@Input({required:true}) weekendPerc:number=0; //price = price+price*weekendPerc
get title(){
  return this.ticket.title;
}

get subtitle(){
  return this.ticket.subtitle || "";
}

get longDescription(){
  return this.ticket.longDescription;
}

get detailsList(){
  return this.ticket.detailList
}

private get percFactor(){
 if(this.isWeekend)return 1
 return 0
}
get price(){
  return this.ticket.price + this.weekendPerc*this.ticket.price*this.percFactor
}
}
