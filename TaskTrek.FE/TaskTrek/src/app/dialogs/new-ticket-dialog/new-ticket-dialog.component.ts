import { Component } from '@angular/core';
import { MatDialogTitle } from "@angular/material/dialog"

@Component({
    selector: 'app-new-ticket-dialog',
    imports: [MatDialogTitle],
    templateUrl: './new-ticket-dialog.component.html',
    styleUrl: './new-ticket-dialog.component.scss'
})
export class NewTicketDialogComponent {

}
