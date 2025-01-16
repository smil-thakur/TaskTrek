import { Component, inject } from '@angular/core';
import { LogoComponent } from '../../logo/logo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon"
import { MatTooltipModule } from "@angular/material/tooltip"
import { MatDialog } from "@angular/material/dialog"
import { NewTicketDialogComponent } from '../../dialogs/new-ticket-dialog/new-ticket-dialog.component';
@Component({
  selector: 'app-header',
  imports: [
    LogoComponent,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true
})
export class HeaderComponent {

  readonly newTicketDialog = inject(MatDialog);

  public openNewTicketDialog(): void {
    this.newTicketDialog.open(NewTicketDialogComponent)
  }

}
