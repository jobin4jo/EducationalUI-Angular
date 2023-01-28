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
      console.log(res);
      if ((res.Status = 'True')) {
        this.loginForm.reset();
        
        // this.toast.success('User Login ', 'SuccessFully');
      } else {
        // this.toast.error('User Not Login ', 'SuccessFully');
      }
    });
    console.log(this.loginForm.value);
  }
  goToRegister() {
    this.router.navigate(['signup']);
  }
}
