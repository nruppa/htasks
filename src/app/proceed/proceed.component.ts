import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TestService } from '../test.service';

@Component({
  selector: 'app-proceed',
  templateUrl: './proceed.component.html',
  styleUrls: ['./proceed.component.css'],
})
export class ProceedComponent implements OnInit {
  form: any;
  maxsize: number = 1000000
  result!: number;
  number !: string;
  display: boolean = false;
  sum1!: number;
  constructor(private test: TestService, private route: Router, private fb: FormBuilder, private service: MessageService, private conformation: ConfirmationService) { }
  weekDates: any = []
  dateTime = new Date()
  proceed=true
  days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  ngOnInit(): void {

    let data = localStorage.getItem('weekData');
    this.weekDates = data
    this.weekDates = data?.split(',')
    // this.test.weekDates.subscribe(x => {
    //   this.weekDates = x
    //   console.log('data', this.weekDates)
    //   
    // })

    this.form = this.fb.group({
      Notes: '',
      hours0: '',
      hours1: '',
      hours3: '',
      hours2: '',
      hours4: '',
      hours5: '',
      hours6: ''
    });
  }

  Draft(data: any) {
    localStorage.setItem('data', JSON.stringify(data));
    this.service.add({ severity: 'success', summary: 'success', detail: 'DATA SAVED IN  DRAFT' });
    this.test.onPatch(data)
  }
  submit(data: any) {
    this.test.notes = (data.Notes)
    this.test.sum = parseInt(data.hours0) + parseInt(data.hours1) + parseInt(data.hours2) + parseInt(data.hours3) + parseInt(data.hours4) + parseInt(data.hours5) + parseInt(data.hours6);
    this.sum1 = this.test.sum;
    console.log(this.test.sum);
    this.display = true;
  }
  onBasicUploadAuto(event: any) {
    this.service.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
  }
  Totalhrs() {
    this.display=false;
    if (this.sum1<=40)
      this.route.navigate(["/date/time-sheets/demo"])
    else
      this.service.add({ severity: 'error', summary: 'Error', detail: 'YOU CAN NOT SUBMIT MORE THAN 40HRS' });
  }
}
