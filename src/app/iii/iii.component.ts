import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService, SelectItem } from 'primeng/api';
import { InternalTestingService } from '../internal-testing.service';

@Component({
  selector: 'app-iii',
  templateUrl: './iii.component.html',
  styleUrls: ['./iii.component.css']
})
export class IiiComponent implements OnInit {
  // sum: any;
  // sum1: any;
  // constructor(private fb: FormBuilder) { }
  // form: any;
  // ngOnInit(): void {
  //   this.form = this.fb.group({
  //     h1: '',
  //     h3: '',
  //     h2: '',
  //     h4: '',
  //   });
  //   console.log(this.form);
  // }
  // submit(data: any) {
  //   this.sum = parseInt(data.h1) + parseInt(data.h2) + parseInt(data.h3) + parseInt(data.h4)
  //   console.log(this.sum);
  // }

  // changes(e:any)
  // {
  //   // this.sum = parseInt(data.h1) + parseInt(data.h2) + parseInt(data.h3) + parseInt(data.h4)
  //   this.sum1=parseInt(e.h1)+parseInt(e.h2)
  // }

  form: any;
  products1: any;

  proposal: any;
  // products2!: Product1[];

  statuses!: SelectItem[];

  clonedProducts: { [s: string]: any; } = {};

  constructor(private product1Service: InternalTestingService, private messageService: MessageService) { }

  ngOnInit() {
    this.product1Service.getProductsSmall().then((data: any) => {
      this.products1 = data;
      console.log('this.products1:', this.products1);
    }
    );
    //  this.product1Service.getProductsSmall().then(data => this.products2 = data);

    this.statuses = [{ label: 'In Stock', value: 'INSTOCK' }, { label: 'Low Stock', value: 'LOWSTOCK' }, { label: 'Out of Stock', value: 'OUTOFSTOCK' }]
  }
}
