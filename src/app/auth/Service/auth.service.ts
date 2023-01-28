import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  EduAPI = environment.EducationalAPI;
  AuthAPI = 'User/';
  constructor(private http: HttpClient) {}
  Register(Register: any) {
    return this.http.post(
      this.EduAPI + this.AuthAPI + 'registration',
      Register
    );
  }
  UserLogin(userData: any) {
    return this.http.post(this.EduAPI + this.AuthAPI + 'Login', userData);
  }
}
