import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // constructor(private http: HttpClient) { }
  // getData(url: string){
  //   return this.http.get(url);
  // }
  isLoggedIn = false;

  constructor(public firebaseAuth: AngularFireAuth) { }

  async signin(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
        window.alert('Выполнен вход в учетную запись')
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
        window.alert('Учетная запись успешно зарегистрирована')
      })
      .catch((error) => {
        window.alert(error.message);
      })
  }

  logout() {
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }
}
