import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private Auth: AuthService // private toast: ToastrService
  ) {}
  RegisterForm!: FormGroup;

  ngOnInit(): void {
    this.RegisterForm = this.fb.group({
      email: [null, Validators.required],
      userName: [null, Validators.required],
      password: [null, Validators.required],
      Cpassword: [null, Validators.required],
      country: [null, Validators.required],
      state: [null, Validators.required],
      District: [null, Validators.required],
    });
  }

  Register() {
    debugger;
    var registerReq = new Register();
    registerReq.UserName = this.RegisterForm.get('userName')?.value;
    (registerReq.EmailId = this.RegisterForm.get('email')?.value),
      (registerReq.Password = this.RegisterForm.get('password')?.value),
      (registerReq.Address = this.RegisterForm.get('country')?.value),
      (registerReq.State = this.RegisterForm.get('state')?.value),
      (registerReq.City = this.RegisterForm.get('District')?.value),
      (registerReq.Status = 1),
      (registerReq.Role = 'User');
    console.log(registerReq, 'jyftf');
    console.log(this.RegisterForm.value);
    return this.Auth.Register(registerReq).subscribe((res: any) => {
      console.log(res);
      if ((res.Status = 'true')) {
        this.RegisterForm.reset();
        // this.toast.success('User Registeration !!! ', 'SuccessFully !!');
      } else {
        // this.toast.error('User Not  Registeration !!! ', 'SuccessFully !!');
      }
    });
  }

  BacktoLogin() {
    this.router.navigate(['']);
  }
}
export interface Food {
  value: string;
  viewValue: string;
}
export class Register {
  UserName?: string;
  Password?: string;
  Role?: string;
  Status?: number;
  PhoneNumber?: string;
  Address?: string;
  City?: string;
  State?: string;
  EmailId?: string;
}
