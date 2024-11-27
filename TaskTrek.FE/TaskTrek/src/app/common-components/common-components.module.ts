import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TicketCardComponent } from './ticket-card/ticket-card.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    TicketCardComponent,
  ],
  exports: [HeaderComponent, TicketCardComponent]
})
export class CommonComponentsModule { }
