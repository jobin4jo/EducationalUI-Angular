import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  EduAPI = environment.EducationalAPI;
  USERAPI = 'User/';
  constructor(private http: HttpClient) {}

  GetUserDetailById(id: number) {
    return this.http.get(
      this.EduAPI + this.USERAPI + 'UserDetailGetByUserId?UserId=' + id
    );
  }
  GetAllUserList() {
    return this.http.get(this.EduAPI + this.USERAPI + 'GetAllUser');
  }
}
