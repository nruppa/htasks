import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { TestService } from '../test.service';


@Component({
  selector: 'app-time-sheets',
  templateUrl: './time-sheets.component.html',
  styleUrls: ['./time-sheets.component.css']
})
export class TimeSheetsComponent implements OnInit {
  display: boolean = false;
  dateTime = new Date();
  weekData: any = []
  curr: any;
  first: any;
  last: any;
  firstday: any;
  lastday: any;
  calender: any;
  sum1: any;
  patchData: any;
  sum: any;
  items!: MenuItem[];
  primengConfig: any;

  constructor(private fb: FormBuilder, private router: Router, private test: TestService, primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.calender = this.fb.group({
      selecteddate: [''],
    });
    this.getDate()
    // this.patchData = this.test.formData
    // console.log(this.patchData);
    // let data = localStorage.getItem('sum1');
    // this.sum = data
    // console.log(data);
  }
  show() {
    this.display = true;
  }
 
  Proceed() {
    this.display=false;
    console.log('first date', this.firstday);
    console.log('last date', this.lastday);
    let data = this.format(this.firstday, this.lastday)
    this.weekData = data
    console.log("Dates", data);
    this.test.weekDates.next(data)
    localStorage.setItem('weekData', this.weekData)   
  }
  getDate() {
    this.firstday = moment().startOf('week').format('');
    this.lastday = moment().endOf('week').format('');
  }
  fetchdate() {
    this.curr = this.calender.controls.selecteddate.value;
    this.first = this.curr.getDate() - this.curr.getDay();
    this.last = this.first + 6;
    this.firstday = new Date(this.curr.setDate(this.first));
    this.lastday = new Date(this.curr.setDate((this.firstday.getDate() + 6)));
  }
  format(startDate: any, endDate: any) {
    var dates = [];
    dates.push(startDate)
    var currDate = moment(startDate).startOf('day');
    var lastDate = moment(endDate).startOf('day');
    while (currDate.add(1, 'days').diff(lastDate) < 0) {
      console.log(currDate.toDate());
      dates.push(currDate.format());
    }
    dates.push(endDate)
    return dates;
  };
}