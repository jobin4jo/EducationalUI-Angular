import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/Notificationservice/snackbar.service';

import { AuthService } from '../Service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private router: Router,
    private Http: AuthService,
    private snack: SnackbarService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      UserName: new FormControl(''),
      password: new FormControl(''),
    });
  }
  login() {
    if (this.loginForm.value == null) {
      this.snack.openSnackBar('Something Went Wrong', 'Undo');
    } else {
      this.Http.UserLogin(this.loginForm.value).subscribe((res: any) => {
        console.log(res.data.role);
        if (res.data.role == 'Admin') {
          var name = res.data.name;
          this.snack.openSnackBar('Sucessfully ' + name + '', 'Splash');
          localStorage.setItem('user', JSON.stringify(res.data));
          this.loginForm.reset();
          this.router.navigate(['Admin']);
        } else if (res.data.role == 'User') {
          this.router.navigate(['']);
        }
      });
    }
  }
  goToRegister() {
    this.router.navigate(['signup']);
  }
  // openSnackBar() {
  //   this._snackBar.open("")
  // }
}
