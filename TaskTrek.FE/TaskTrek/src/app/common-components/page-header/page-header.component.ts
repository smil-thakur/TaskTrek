import { Component, input, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from "@angular/material/divider"
import { Location } from '@angular/common';
@Component({
  selector: 'app-page-header',
  imports: [MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {
  constructor(private location: Location) { }
  @Input() title!: string
  @Input() isBackDisabled: boolean = false;

  public backButtonClicked(): void {
    this.location.back()
  }
}
