import { Component, OnInit } from '@angular/core';
import {Product} from './../products/product.model';

@Component({
  selector: 'app-home-ropa',
  templateUrl: './home-ropa.component.html',
  styleUrls: ['./home-ropa.component.scss']
})
export class HomeRopaComponent implements OnInit {
  products: Product[] = [
    {
      id: '6',
      image: 'assets/images/polo.jpeg',
      title: 'Polo',
      price: 120,
      description: 'balblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllab',
      type: 2
    },
    {
      id: '7',
      image: 'assets/images/polera.jpg',
      title: 'Polera',
      price: 220,
      description: 'balblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllab',
      type: 2
    },
    {
      id: '8',
      image: 'assets/images/short.jpg',
      title: 'Short',
      price: 90,
      description: 'balbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabblalablblablablbllab',
      type: 2
    },
    {
      id: '9',
      image: 'assets/images/pantalon.jpg',
      title: 'Pantalon',
      price: 250,
      description: 'balblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllab',
      type: 2
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
