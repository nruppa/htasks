import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { TestService } from '../test.service';
@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
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
  image:any
  
  constructor(private fb: FormBuilder, private router: Router, private test: TestService,private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.calender = this.fb.group({
      selecteddate: [''],
    });

    this.primengConfig.ripple = true;

    this.items = [{
      label: '',
      items: [{
        label: 'Timesheets',
        routerLink:'time-sheets',
      },]
    },]
  }

}
