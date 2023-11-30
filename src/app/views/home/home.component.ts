import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { IProdutos } from './produtos-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produtos: Array<IProdutos> = new Array<IProdutos>();

  constructor( private service: HomeService) { }

  ngOnInit() {
    this.produtos = this.service.getListaProdutos();
  }

}
