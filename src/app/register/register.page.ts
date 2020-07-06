import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {User} from '../shared/user.class';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user : User = new User();
  
  constructor(private authSvc: AuthService, private router: Router) { 
 
  }
  
  ngOnInit() {
  }
  
async onRegister(formulario){
  // let password= document.getElementById('password');
  // let password2= document.getElementById('password2');
  let password = formulario.value.password;
  let password2 = formulario.value.password2;
  if (password==password2) {
    const user = await this.authSvc.onRegister(this.user);
    if (user) {
      console.log("Registrado correctamente");
      $('.msg_error2').html('<div class="alert alert-success" role="alert">Te has registrado correctamente</div>');
      setTimeout(() => {  this.router.navigateByUrl('/login'); }, 1000);
      
    }else{
      $('.msg_error2').html('<div class="alert alert-danger" role="alert">No te has registrado correctamente</div>');
      console.log("No te has registrado");
    }
    
  }else{
    $('.msg_error2').html('<div class="alert alert-danger" role="alert">Las contraseñas no coinciden</div>');
  }
   
  
  }


}
