import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
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

  async onSignUp(data: any) {
    await this.authService.signup(data.value.email, data.value.password)
    if (this.authService.isLoggedIn)
      this.isSignedIn = true
      console.log(this.registerForm.value);
      this.registerForm.reset()
  }

  createForm() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.minLength(3), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  // onSubmit() {
    
  //   //this.registerForm.reset()
  // }
}
