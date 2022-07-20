import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {initializeApp} from "firebase/app";
import { environment } from '../../environments/environment';

const provider = new GoogleAuthProvider();
const app = initializeApp(environment.firebaseConfig);
const auth = getAuth(app);

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor(public firebaseAuth: AngularFireAuth, public router: Router) { }

  async signin(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['book/1']);
      })
      .catch((error) => {
        window.alert(error.message);
      })
  }

  async signup(email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
        window.alert('Учетная запись успешно зарегистрирована');
        this.router.navigate(['auth'])
      })
      .catch((error) => {
        window.alert(error.message);
      })
  }

  signInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;
        const user = result.user;
        this.router.navigate(['book/1'])
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });

  }

  logout() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['auth'])
  }
}
