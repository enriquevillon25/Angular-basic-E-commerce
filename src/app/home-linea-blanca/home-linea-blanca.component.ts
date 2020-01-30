import { Component, OnInit } from '@angular/core';
import {Product} from './../products/product.model';

@Component({
  selector: 'app-home-linea-blanca',
  templateUrl: './home-linea-blanca.component.html',
  styleUrls: ['./home-linea-blanca.component.scss']
})
export class HomeLineaBlancaComponent implements OnInit {
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/lavadora.jpg',
      title: 'Lavadora',
      price: 1500,
      description: 'Tiene un tambor central grande con orificios que gira, dentro de otro tambor cerrado, mientras entra agua, haciendo que se mezcle el detergente con la ropa sucia. El tambor se mueve con un motor eléctrico. Los motores más comunes están situados detrás o debajo del tambor y trasmiten la tracción por poleas o correas.',
      type: 1
    },
    {
      id: '2',
      image: 'assets/images/refrigerador.jpeg',
      title: 'Refrigerador',
      price: 1500,
      description: 'El frío se produce mediante un sistema de refrigeración por compresión, alimentado por corriente eléctrica y, a veces, por un sistema de absorción usando como combustible queroseno o gas butano.',
      type: 1
    },
    {
      id: '3',
      image: 'assets/images/cocina.jpg',
      title: 'Cocina',
      price: 1500,
      description: 'Según el modo de cocinar los alimentos, una cocina sirve para hervir, cocer, freír, asar o fundir. Los alimentos se cocinan por lo general mediante utensilios de cocina (como ollas, sartenes, cazuelas o parrillas).',
      type: 1
    },
    {
      id: '4',
      image: 'assets/images/microondas.jpeg',
      title: 'Microondas',
      price: 1500,
      description: 'balblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllab',
      type: 1
    },
    {
      id: '5',
      image: 'assets/images/licuadora.jpg',
      title: 'Licuadora',
      price: 1500,
      description: 'balblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllabbalblalablblablablbllab',
      type: 1
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
