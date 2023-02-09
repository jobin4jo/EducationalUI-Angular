import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  EduAPI = environment.EducationalAPI;
  USERAPI = 'User/UserDetailGetByUserId?UserId=';
  constructor(private http: HttpClient) {}

  GetUserDetailById(id: number) {
    return this.http.get(this.EduAPI + this.USERAPI + id);
  }
}
