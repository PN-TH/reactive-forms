import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = []
  user: User = new User;

  name = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  adress = new FormControl('');
  cp = new FormControl('');
  ville = new FormControl('');
  display: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.user.name = this.name.value,
    this.user.email = this.email.value,
    this.user.password = this.password.value,
    this.user.adress = this.adress.value,
    this.user.cp = this.cp.value,
    this.user.ville = this.ville.value
    this.users.push(this.user)
    this.user = new User
    this.display = true;
    
  }
}
