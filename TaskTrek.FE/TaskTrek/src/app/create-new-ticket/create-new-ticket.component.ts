import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
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
  imports: [ReactiveFormsModule, PageHeaderComponent, MatFormFieldModule, MatInputModule, MatSelectModule, MatStepperModule, NgFor, MatCardModule, MatButtonModule],
  templateUrl: './create-new-ticket.component.html',
  styleUrl: './create-new-ticket.component.scss'
})
export class CreateNewTicketComponent {
  osList = operatingSystem;
  deviceList = Devices;
  browserList = browsers;

  firstStepperForm: FormGroup;
  secondStepperForm: FormGroup;
  thirdStepperForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.firstStepperForm = this.fb.group({
      ticketName: ['', Validators.required],
      description: ['', Validators.required],
      stepsToReplicate: ['', Validators.required],
      priority: ['', Validators.required],
      severity: ['', Validators.required],
      frequency: ['', Validators.required]
    });
    this.secondStepperForm = this.fb.group({
      operatingSystem: ['', Validators.required],
      device: ['', Validators.required],
      browser: ['', Validators.required]
    });
    this.thirdStepperForm = this.fb.group({
      attachment: [],
      logs: []
    })
  }


  onSubmit() {
    console.log('Form Submitted', this.firstStepperForm.value);
    console.log('Form Submitted', this.secondStepperForm.value);
    if (this.firstStepperForm.valid && this.secondStepperForm.valid) {
      console.log('Form Submitted', this.firstStepperForm.value, this.secondStepperForm.value);
    }
  }
}
