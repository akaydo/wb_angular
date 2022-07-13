import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [AuthService]
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.createForm();
   }

  ngOnInit(): void {
  }
  createForm() {
    this.authForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  onSubmit() {
    console.log(this.authForm.value);
    this.authForm.reset()
    this.sendRequest();
  }

  sendRequest(): void {
  this.authService.getData('https://ya.ru/').subscribe(() =>{
     console.log('Ok')
    },
    () => {
      console.log('Error')
    });
}
}
