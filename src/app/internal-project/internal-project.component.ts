import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TestService } from '../test.service';
@Component({
  selector: 'app-internal-project',
  templateUrl: './internal-project.component.html',
  styleUrls: ['./internal-project.component.css']
})
export class InternalProjectComponent implements OnInit {

  form: any;
  proposal: any;
  sum: any;
  values:any;
  sum1: any;

  constructor(private test: TestService, private route: Router, private fb: FormBuilder, private service: MessageService, private conformation: ConfirmationService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      h1: '',
      h2: '',
      h3: '',
      h4: '',
      h5: '',
      h6: '',
      h7: '',
      h8: '',
    });
  }
  submit(data: any) {
    this.sum = parseInt(data.h1) + parseInt(data.h2) + parseInt(data.h3) + parseInt(data.h4)+parseInt(data.h5) + parseInt(data.h6) + parseInt(data.h7) + parseInt(data.h8)
    console.log(this.sum);
  }
  onchange()
  {
    console.log(parseInt(this.form.value.h1)+parseInt(this.form.value.h2));
    this.sum1=(parseInt(this.form.value.h1))+(parseInt(this.form.value.h2)|0)+(parseInt(this.form.value.h3)|0)+(parseInt(this.form.value.h4)|0)+(parseInt(this.form.value.h5)|0)+(parseInt(this.form.value.h6)|0)+(parseInt(this.form.value.h7)|0)+(parseInt(this.form.value.h8)|0)
    this.sum1=parseInt(this.form.value.h1)+(parseInt(this.form.value.h2)|0)+(parseInt(this.form.value.h3)|0)+(parseInt(this.form.value.h4)|0)+(parseInt(this.form.value.h5)|0)+(parseInt(this.form.value.h6)|0)+(parseInt(this.form.value.h7)|0)+(parseInt(this.form.value.h8)|0)

  }
}