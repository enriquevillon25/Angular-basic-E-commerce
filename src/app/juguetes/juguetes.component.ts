import { Component, OnInit } from '@angular/core';
import {Product} from './../products/product.model';

@Component({
  selector: 'app-juguetes',
  templateUrl: './juguetes.component.html',
  styleUrls: ['./juguetes.component.scss']
})
export class JuguetesComponent implements OnInit {
  products: Product[] = [
    {
      id: '10',
      image: 'assets/images/lego.jpg',
      title: 'LEGO',
      price: 1500,
      description: 'balblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllab',
      type: 3
    },
    {
      id: '11',
      image: 'assets/images/batman.jpg',
      title: 'Juguete Batman',
      price: 100,
      description: 'balblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllab',
      type: 3
    },
    {
      id: '12',
      image: 'assets/images/carro.jpeg',
      title: 'Carro',
      price: 50,
      description: 'balblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllab',
      type: 3
    },
    {
      id: '13',
      image: 'assets/images/toy.jpg',
      title: 'Toy Story',
      price: 100,
      description: 'balblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllab',
      type: 3
    },
    {
      id: '14',
      image: 'assets/images/trailer.jpg',
      title: 'Trailer',
      price: 20,
      description: 'babalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllablblalablblablablbllab',
      type: 3
    },
    {
      id: '15',
      image: 'assets/images/muñeca.jpg',
      title: 'Muñeca',
      price: 50,
      description: 'balblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllab',
      type: 3
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
