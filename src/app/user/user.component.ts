import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../user';

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
      email: [''],
      password: [''],
    }),
    address: this.fb.group({
      street: [''],
      cp: [''],
      ville: ['']
    })
  });

  display: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onClick() {
    console.log(this.userForm.value);
    this.display = true;
}
}
