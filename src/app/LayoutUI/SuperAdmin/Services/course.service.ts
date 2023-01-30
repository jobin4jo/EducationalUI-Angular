import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CourseService {
  EduAPI = environment.EducationalAPI;
  CourseAPI = 'Course/';
  constructor(private http: HttpClient) {}
  GetCourse() {
    return this.http.get(this.EduAPI + this.CourseAPI + 'GetAllCourse');
  }
  DeleteCourseById(Id: any) {
    return this.http.delete(
      this.EduAPI + this.CourseAPI + 'DeleteByCourseId',
      Id
    );
  }
}
