import { Component } from '@angular/core';
import { PageHeaderComponent } from "../common-components/page-header/page-header.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from "@angular/material/select"
import { MatStepperModule } from "@angular/material/stepper"
import { NgFor } from '@angular/common';
import { Devices } from '../enums/Devices';
import { operatingSystem } from '../enums/OperatingSystem';
import { browsers } from '../enums/Browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-create-new-ticket',
  imports: [PageHeaderComponent, MatFormFieldModule, MatInputModule, MatSelectModule, MatStepperModule, NgFor, MatCardModule, MatButtonModule],
  templateUrl: './create-new-ticket.component.html',
  styleUrl: './create-new-ticket.component.scss'
})
export class CreateNewTicketComponent {
  osList = operatingSystem
  deviceList = Devices
  browserList = browsers

  // export interface Ticket {
  //     title: string,
  //     desc: string,
  //     steps: string,
  //     priority: Priority,
  //     severity: Severity,
  //     dateTime: Date,
  //     freq: TicketFreq,
  //     environment: TicketEnvironment
  //     additional: TicketAdditional | null,
  // }
  //   export enum Priority {
  //     severe = 0,
  //     high = 1,
  //     medium = 2,
  //     low = 3
  // }

  //   export enum Severity {
  //     critical = 0,
  //     major = 1,
  //     minor = 2
  // }



}
