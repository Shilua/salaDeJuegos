import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() ruta:string = '';

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  logOut(){
    this.auth.isLogged = false;
    this.auth.logout();
    this.router.navigate(['/']);
  }

  home(){
    this.router.navigate(['home']);
  }

  chat(){
    this.router.navigate(['chat']);
  }

  quienSoy(){
    this.router.navigate(['quien-soy']);

  }

}
