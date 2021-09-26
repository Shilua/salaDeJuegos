import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginLogService } from 'src/app/services/login-log.service';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../classes/user';;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User = new User();


  constructor(
    private authSvc:AuthService,
    private usersSvc:UserService,
    private logSvc : LoginLogService,
    private router: Router
    ) {

   }
    
  ngOnInit() {
  }

  async onRegister(){
    this.authSvc.onRegister(this.user).then(response => {
      let fecha = new Date();
      this.user.uid = this.user.email;
      this.usersSvc.createElement(this.user);
      this.logSvc.createElement({
        usuario:this.user.email,
        fecha: fecha
       });
      this.router.navigate(['/home']);
    });

  }

  login(){
    this.router.navigate(['/']);
  }

}