import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {User} from '../shared/user.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user : User = new User();
  
  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }
async onLogin(){
const user = await this.authSvc.onLogin(this.user);
if (user) {
  console.log("Has entrado correctamente");
  $('.msg_error').html('<div class="alert alert-success" role="alert">Entrando...</div>');
  setTimeout(() => {  this.router.navigateByUrl('/nuevo-parte'); }, 1000);
  setTimeout(() => {  $('.msg_error').hide(); }, 1000);
}else{
  $('.msg_error').html('<div class="alert alert-danger" role="alert">Usuario o contraseña incorrectas</div>');
  console.log("Usuario o contraseña incorrectas");
}

}
}