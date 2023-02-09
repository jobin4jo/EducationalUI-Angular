import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  EduAPI = environment.EducationalAPI;
  cateAPI = 'Category/';
  constructor(public http: HttpClient) {}
  getAllCategory() {
    return this.http.get(this.EduAPI + this.cateAPI + 'GetAllCategory');
  }
  postCategory(data: any) {
    return this.http.post(this.EduAPI + this.cateAPI + 'AddCategory', data);
  }
  deletecategory(id: any) {
    return this.http.delete(
      this.EduAPI + this.cateAPI + 'DeleteCategoryById?Id=' + id
    );
  }
}
export interface category {
  categoryName: string;
}
