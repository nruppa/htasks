import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit {

  constructor() { }
  date!: Date ;
  date1!: Date ;

  ngOnInit(): void {

  }

}
