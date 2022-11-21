import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  sum1!: number;
  note1:any;
  constructor(private test:TestService) { }
 display:any
  ngOnInit(): void {
    this.sum1 = this.test.sum;
    this.note1=this.test.notes
  }
}
