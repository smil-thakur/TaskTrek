import { Component, Input } from '@angular/core';
import { Ticket } from '../../models/TicketModel';
import { MatCard, MatCardFooter, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { Priority } from '../../enums/Priority';
import { PriorityColor } from '../../enums/PriorityColor';
import { DatePipe, NgClass, NgStyle } from '@angular/common';

@Component({
    selector: 'app-ticket-card',
    imports: [MatCard, MatCardTitle, MatCardSubtitle, NgClass, MatCardFooter, DatePipe],
    templateUrl: './ticket-card.component.html',
    styleUrl: './ticket-card.component.scss'
})
export class TicketCardComponent {
  @Input() ticket!: Ticket

  isSevere() {
    return this.ticket.priority === Priority.severe;
  }
  isHigh() {
    return this.ticket.priority === Priority.high;
  }
  isMedium() {
    return this.ticket.priority === Priority.medium;
  }
  isLow() {
    return this.ticket.priority === Priority.low;
  }

}
