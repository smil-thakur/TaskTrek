import { Component } from '@angular/core';
import { CommonComponentsModule } from '../../common-components/common-components.module';
import { MatTabBody, MatTab, MatTabHeader, MatTabContent, MatTabGroup } from "@angular/material/tabs"
import { TicketWindowComponent } from '../ticket-window/ticket-window.component';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonComponentsModule,
    MatTabGroup,
    MatTab,
    TicketWindowComponent,
    MatButton
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
