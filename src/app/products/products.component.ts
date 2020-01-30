import { Component, OnInit } from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
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
