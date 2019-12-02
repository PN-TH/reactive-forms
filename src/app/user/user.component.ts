import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../user';
import { passwordValidator } from './password';
import { emailValidator } from './email';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = []
  user: User = new User;

  userForm = this.fb.group({
    name: [''],
    credentials: this.fb.group({
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required, passwordValidator]],
    }),
    address: this.fb.group({
      street: [''],
      cp: [''],
      ville: ['']
    })
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onClick() {
    console.log(this.userForm.value);
}
}
