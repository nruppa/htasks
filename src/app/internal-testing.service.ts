import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InternalTestingService {
  getProductsSmall: any;
 
  constructor() { }
  sum!: number;

}
