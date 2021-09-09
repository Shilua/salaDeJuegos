import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
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

    private router: Router
    ) {

   }
    
  ngOnInit() {
  }

  async onRegister(){
    this.authSvc.onRegister(this.user).then(response => {
      this.router.navigate(['/home']);
    });

  }

  login(){
    this.router.navigate(['/']);
  }

}