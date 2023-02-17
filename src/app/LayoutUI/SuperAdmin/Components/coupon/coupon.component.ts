import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CouponService } from '../../Services/coupon.service';
import { AddCouponComponent } from './Components/add-coupon/add-coupon.component';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss'],
})
export class CouponComponent implements OnInit {
  displayedColumns: string[] = [
    'S.No',
    'couponString',
    'startDate',
    'endDate',
    'purposeOfCoupon',
    'activeFlag',
    'Actions',
  ];
  datasource: any;
  constructor(public coupon: CouponService, private mat: MatDialog) {}

  ngOnInit(): void {
    this.getCoupon();
  }
  getCoupon() {
    debugger;
    return this.coupon.getAllCoupon().subscribe((res: any) => {
      console.log(res.data.data);
      this.datasource = res.data.data;
    });
  }
  OnAddCoupon() {
    const dialogRef = this.mat.open(AddCouponComponent);
    debugger;
    dialogRef.afterClosed().subscribe((res: any) => {
      if (res == undefined) {
        this.getCoupon();
      }
    });
  }
  OnDelete(id: any) {
    return this.coupon.DeleteById(id).subscribe((res: any) => {
      console.log(res);
      if (res.code == 200) {
        this.getCoupon();
      }
    });
  }
}
