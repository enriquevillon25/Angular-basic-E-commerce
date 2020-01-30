import { Component,
          OnInit,
          Input,
          Output,
        EventEmitter} from '@angular/core';
import {Product} from './../products/product.model';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


}
