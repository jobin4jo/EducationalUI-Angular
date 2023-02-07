import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TutorService {
  EduAPI = environment.EducationalAPI;
  TUTAPI = 'Tutor/';
  constructor(private http: HttpClient) {}
  getAllTutorList() {
    return this.http.get(this.EduAPI + this.TUTAPI + 'GetAllTutorList');
  }
  getDetailById(id: number) {
    return this.http.get(this.EduAPI + this.TUTAPI + 'DetailById?id=' + id);
  }
  createTutor(data: any) {
    return this.http.post(this.EduAPI + this.TUTAPI + 'AddTutor', data);
  }
  deteteTutorById(id: number) {
    return this.http.delete(this.EduAPI + this.TUTAPI + 'ById?id=' + id);
  }
  UpdateTutor(data: any, id: number) {
    return this.http.put(this.EduAPI + this.TUTAPI + 'UpdateTutor/' + id, data);
  }
}
