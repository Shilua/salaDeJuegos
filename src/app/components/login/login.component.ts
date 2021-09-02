import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../classes/user';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user : User = new User();

  constructor(
    private authSrv : AuthService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.authSrv.onLogin(this.user).then(res =>{
      this.router.navigate(['/quien-soy']);
    });
  }

  register(){
    this.router.navigate(['/register']);
  }

  loadData(){
    this.user.email = 'admin@admin.com';
    this.user.pass = 'administrador';
  }

}
