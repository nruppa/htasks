import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TestService } from '../test.service';

@Component({
  selector: 'app-save2draft',
  templateUrl: './save2draft.component.html',
  styleUrls: ['./save2draft.component.css']
})
export class Save2draftComponent implements OnInit {

  form: any;
  maxsize: number = 1000000
  result!: number;
  number !: string;
  display: boolean = false;
  sum1!: number;
  data1: any;
  constructor(private test: TestService, private route: Router, private fb: FormBuilder, private service: MessageService, private conformation: ConfirmationService) { }
  weekDates: any = []
  dateTime = new Date()
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
    this.weekDates = data?.split(',')
    // this.test.weekDates.subscribe(x => {
    //   // this.weekDates = x
    //   console.log('data', this.weekDates)
    //   
    // })


    this.data1 = (JSON.parse(localStorage.getItem('data') || ''));

    console.log(this.data1);

    this.form = this.fb.group({
      Notes: this.data1.Notes,
      hours0: this.data1.hours0,
      hours1: this.data1.hours1,
      hours2: this.data1.hours2,
      hours3: this.data1.hours3,
      hours4: this.data1.hours4,
      hours5: this.data1.hours5,
      hours6: this.data1.hours6
    });
  }
  clickMe() {
    this.route.navigateByUrl('/back')
  }

  submit(data: any) {
    this.test.notes = (data.Notes)
    this.test.sum = parseInt(data.hours0) + parseInt(data.hours1) + parseInt(data.hours2) + parseInt(data.hours3) + parseInt(data.hours4) + parseInt(data.hours5) + parseInt(data.hours6);
    this.sum1 = this.test.sum;
    console.log(this.test.sum);
    this.display = true;
  }

  Totalhrs() {
    this.display=false
    if (this.sum1 <= 40)
      this.route.navigate(["date/time-sheets/demo"])
    else
      this.service.add({ severity: 'error', summary: 'Error', detail: 'YOU CAN NOT SUBMIT MORE THAN 40HRS' });
  }
}
