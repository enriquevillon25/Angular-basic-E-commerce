import { Component, OnInit } from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'app-computacion',
  templateUrl: './computacion.component.html',
  styleUrls: ['./computacion.component.scss']
})
export class ComputacionComponent implements OnInit {
  products: Product[] = [
  {
    id: '16',
    image: 'assets/images/laptop.jpg',
    title: 'Laptop',
    price: 1500,
    description: 'balblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllab',
    type: 4
  },
  {
    id: '17',
    image: 'assets/images/ssd.jpeg',
    title: 'Disco Duro SSD',
    price: 100,
    description: 'balblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllab',
    type: 4
  },
  {
    id: '18',
    image: 'assets/images/ram.jpeg',
    title: 'Memoria Ram',
    price: 1500,
    description: 'balblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllab',
    type: 4
  },
  {
    id: '19',
    image: 'assets/images/usb.jpg',
    title: 'Cable usb',
    price: 10,
    description: 'balblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllab',
    type: 4
  },
  {
    id: '20',
    image: 'assets/images/tarjetagrafica.jpeg',
    title: 'Tarjeta Grafica',
    price: 1000,
    description: 'balblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllab',
    type: 4
  },
];
  constructor() { }

  ngOnInit() {
  }

}
