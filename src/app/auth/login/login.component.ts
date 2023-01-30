import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private router: Router,
    private Http: AuthService // private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      UserName: new FormControl(''),
      password: new FormControl(''),
    });
  }
  login() {
    this.Http.UserLogin(this.loginForm.value).subscribe((res: any) => {
      console.log(res.data.userId.role);
      if (res.data.userId.role == 'Admin') {
        this.loginForm.reset();
        this.router.navigate(['Admin']);
      } else if (res.data.userId.role == 'User') {
        this.router.navigate(['User']);
      }
    });
    console.log(this.loginForm.value);
  }
  goToRegister() {
    this.router.navigate(['signup']);
  }
}
