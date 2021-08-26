import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/user/model/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  register: Register = { name: '', email: '', password: '', password2: '' };
  constructor() {}

  registerSubmit() {
    console.log(JSON.stringify(this.register));
  }

  ngOnInit(): void {}
}
