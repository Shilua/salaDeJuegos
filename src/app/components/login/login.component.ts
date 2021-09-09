import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../classes/user';
import { Router } from '@angular/router';
import { LoginLogService } from 'src/app/services/login-log.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user : User = new User();

  constructor(
    private authSrv : AuthService,
    private logSrv: LoginLogService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.authSrv.onLogin(this.user).then(res =>{
      if(res?.user != null){ 
        this.logSrv.createElement({
        usuario:this.user.email,
        fecha:Date.now()      
       });
       this.router.navigate(['/home']);
      }
      else
      this.router.navigate(['/error'])
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
