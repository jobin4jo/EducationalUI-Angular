import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CourseService {
  EduAPI = environment.EducationalAPI;
  CourseAPI = 'Course/';
  // https://localhost:7111/api/User/ChangePassword/11
  constructor(private http: HttpClient) {}
  GetCourse() {
    return this.http.get(this.EduAPI + this.CourseAPI + 'GetAllCourse');
  }
  DeleteCourseById(Id: any) {
    debugger;
    return this.http.delete(
      this.EduAPI + this.CourseAPI + 'DeleteByCourseId?id=' + Id
    );
  }
  changePassword(data: any, id: any) {
    return this.http.post(
      'https://localhost:7111/api/User/ChangePassword/' + id,
      data
    );
  }
}
