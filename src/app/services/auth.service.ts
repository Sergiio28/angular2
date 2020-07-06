import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from '../shared/user.class';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged: any = false;
  constructor(public afAuth: AngularFireAuth, public router: Router) { 
    afAuth.authState.subscribe(user =>(this.isLogged = user));
  }

  async onLogin (user:User) {
    try {
      return await this.afAuth.signInWithEmailAndPassword(
          user.email,
          user.password
         )
    }catch(error){
      console.log('Error on login user', error);
    }
  }
  async onRegister (user:User) {
    try {
      return await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
    }catch(error){
      console.log('Error on register user', error);
    }
  }
  async logout() {
    this.afAuth.signOut();
    this.router.navigateByUrl('/login');

  }
}
