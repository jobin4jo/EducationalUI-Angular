import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CouponService {
  EduAPI = environment.EducationalAPI;
  couponAPI = 'Coupon/';
  constructor(private http: HttpClient) {}
  getAllCoupon() {
    return this.http.get(this.EduAPI + this.couponAPI + 'GetAllCoupon');
  }
  CreateCoupon(data: any) {
    return this.http.post(
      'https://localhost:7111/api/Coupon/CreateCoupon',
      data
    );
  }
  DeleteById(id: any) {
    return this.http.delete(
      this.EduAPI + this.couponAPI + 'DeleteById?id=' + id
    );
  }
}
export interface Coupon {
  couponString: string;
  discountPercentage: string;
  activeFlag: number;
  startDate: Date;
  endDate: Date;
  purposeOfCoupon: string;
}
