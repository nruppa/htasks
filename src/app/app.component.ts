import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items!: MenuItem[];
  title: any;

  constructor(private messageService: MessageService, private primengConfig: PrimeNGConfig,private router:Router) { }

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.items = [{
      label: '',
      items: [{
        label: 'Timesheets',
        routerLink:'/date',
      },]
    },]
  }
 
}


