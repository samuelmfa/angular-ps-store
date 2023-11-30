import { Component, Input, OnInit } from '@angular/core';
import { IProdutos } from '../../views/home/produtos-interface';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent implements OnInit {

  @Input()
  produto: IProdutos;

  constructor() { }

  ngOnInit() {
  }

}
