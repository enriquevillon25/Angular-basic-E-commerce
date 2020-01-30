import { Component,
         OnInit,
         Input,
         EventEmitter,
         Output,
         SimpleChanges } from '@angular/core';
import {Product} from './../products/product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}
