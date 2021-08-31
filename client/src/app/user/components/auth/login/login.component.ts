import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/services/auth.service';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  decode: any = {};
  constructor(private authService: AuthService, private router: Router) {}
  errors: any = {};
  ngOnInit(): void {}
  loginSubmit() {
    this.authService.loginUser(this.email, this.password).subscribe(
      (res) => {
        console.log(JSON.stringify(res.token));
        localStorage.setItem('token', res.token);
        this.decode = jwt_decode(res.token);
        console.log(this.decode);
        localStorage.setItem('userDetails', JSON.stringify(this.decode));
        this.router.navigate(['/dashboard/user-dashboard']);
      },
      (err) => {
        console.log(JSON.stringify(err.error));
        this.errors = err.error;
      }
    );
  }
}
