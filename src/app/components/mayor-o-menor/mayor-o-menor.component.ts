import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mayor-o-menor',
  templateUrl: './mayor-o-menor.component.html',
  styleUrls: ['./mayor-o-menor.component.css']
})
export class MayorOMenorComponent implements OnInit {
  numeroSiguiente:number;
  numeroActual:number;
  constructor() {
    this.numeroSiguiente = Math.floor(Math.random()* (12 - 1) + 1);
    this.numeroActual = Math.floor(Math.random()* (12 - 1) + 1);
   }

  ngOnInit(): void {
    
  }

  mayor(){
    if (this.numeroSiguiente > this.numeroActual) {
      console.log('ganaste');
    }
    else{
      console.log('perdiste');
    }
    this.numeroActual = this.numeroSiguiente;
    this.numeroSiguiente = Math.floor(Math.random()* (12 - 1) + 1);
  }

  menor(){
    if (this.numeroSiguiente < this.numeroActual) {
      console.log('ganaste');
    }
    else{
      console.log('perdiste');
    }
    this.numeroActual = this.numeroSiguiente;
    this.numeroSiguiente = Math.floor(Math.random()* (12 - 1) + 1);
  }

}
