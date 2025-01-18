import { Component, inject } from '@angular/core';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogRef } from "@angular/material/dialog"
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
@Component({
    selector: 'app-new-ticket-dialog',
    imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatButtonModule],
    templateUrl: './new-ticket-dialog.component.html',
    styleUrl: './new-ticket-dialog.component.scss',
})
export class NewTicketDialogComponent {
    constructor(private router: Router) {

    }
    readonly dialogRef = inject(MatDialogRef<NewTicketDialogComponent>);
    public onCancelClick(): void {
        this.dialogRef.close();
    }

    public newTicketClick(): void {
        this.dialogRef.close();
        this.router.navigate(['newticket'])
    }
}
