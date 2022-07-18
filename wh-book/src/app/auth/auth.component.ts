import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [AuthService]
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  isSignedIn = false

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.createForm();
  }

  ngOnInit(): void {
    if (localStorage.getItem('user') !== null)
      this.isSignedIn = true
    else
      this.isSignedIn = false
  }

  async onSignIn(data: any) {
    await this.authService.signin(data.value.email, data.value.password)
    if (this.authService.isLoggedIn)
      this.isSignedIn = true;
      console.log(this.authForm.value);
      this.authForm.reset()
  }

  handleLogout() {
    this.isSignedIn = false
  }

  createForm() {
    this.authForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  // onSubmit() {
    
  //   // this.authForm.reset()
  //   // this.sendRequest();
  // }

  // sendRequest(): void {
  // this.authService.getData('https://ya.ru/').subscribe(() =>{
  //    console.log('Ok')
  //   },
  //   () => {
  //     console.log('Error')
  //   });
}

