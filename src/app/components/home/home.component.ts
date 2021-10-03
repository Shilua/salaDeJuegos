import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authSvc: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.authSvc.getCurrentUser().then((response:any)=>{
      console.log(response.email);
      localStorage.setItem('email',response.email);
    });
  }

  juegos(){
    this.router.navigate(['juegos'])
  }

}
