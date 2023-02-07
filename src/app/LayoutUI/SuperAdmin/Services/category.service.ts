import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  EduAPI = environment.EducationalAPI;
  cateAPI = 'Category/GetAllCategory';
  constructor(public http: HttpClient) {}
  getAllCategory() {
    return this.http.get(this.EduAPI + this.cateAPI);
  }
}
