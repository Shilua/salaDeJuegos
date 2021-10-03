import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  ahorcado(){
    this.router.navigate(['juegos/ahorcado'])
  }

  mayorOMenor(){
    this.router.navigate(['juegos/mayor-o-menor'])
  }

}
