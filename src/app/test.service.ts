import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService implements OnInit {
  sum!: number;
  page!:boolean
  notes: any = [];
  formData: any;
  constructor() { }
  weekDates = new BehaviorSubject<any>([])
  ngOnInit(): void {
  }
  onPatch(data: any) {
    this.formData = data
  }
}


