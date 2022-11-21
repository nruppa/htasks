import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { setupTestingRouterInternal } from '@angular/router/testing';
import { TestService } from '../test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myform: any;
  name = "Niharika"
  pswd = "1212"
  display: any
  value: any
  constructor(private fb: FormBuilder, private route: Router, private test: TestService) { }
  ngOnInit(): void {
    this.myform = this.fb.group({
      username: '',
      password: ''
    })
  }
  signin(x: any) {
    if (this.name == x.username && this.pswd == x.password) {
      this.test.page = true;
      this.route.navigateByUrl("/date")
    }
    else {
      this.test.page = false;
    }
  }
}
