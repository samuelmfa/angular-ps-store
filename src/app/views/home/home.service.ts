import { Injectable } from '@angular/core';
import { IProdutos } from './produtos-interface';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
 private produtos: Array<IProdutos> = [
    {
      id: 1,
      image: '../../../assets/god_of_war.webp',
      label: 'Exclusive',
      console: 'PS4 | PS5',
      valor: 'R$ 235,63',
    },
    {
      id: 2,
      image: '../../../assets/bob-esponja.avif',
      label: 'BlackFriday',
      console: 'PS5',
      valor: 'R$ 160,00',
    },
    {
      id: 3,
      image: '../../../assets/spider-man.avif',
      label: 'Exclusive',
      console: 'PS4 | PS5',
      valor: 'R$ 300,00',
    },
    {
      id: 4,
      image: '../../../assets/tales.avif',
      label: 'Destaque',
      console: 'PS4',
      valor: 'R$ 250,00',
    },
    {
      id: 5,
      image: '../../../assets/ufc5.avif',
      label: 'Exclusive',
      console: 'PS4 | PS5',
      valor: 'R$ 170,00',
    },
  ];

  constructor() {}


  getListaProdutos(){
    return this.produtos;
  }



}
