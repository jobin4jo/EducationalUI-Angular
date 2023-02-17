import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CouponService } from 'src/app/LayoutUI/SuperAdmin/Services/coupon.service';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.scss'],
})
export class AddCouponComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddCouponComponent>,
    private fb: FormBuilder,
    private coupon: CouponService
  ) {}
  CouponForm!: FormGroup;
  ngOnInit(): void {
    this.getFormLoad();
  }
  getFormLoad() {
    this.CouponForm = this.fb.group({
      couponString: [''],
      discountPercentage: [''],
      activeFlag: [''],
      startDate: [''],
      endDate: [''],
      purposeOfCoupon: [''],
    });
  }
  onNoClick() {
    this.dialogRef.close();
  }
  OnSubmit() {
    console.log(this.CouponForm.value);
    var data = {
      couponString: this.CouponForm.value.couponString,
      discountPercentage: this.CouponForm.value.discountPercentage,
      activeFlag: (this.CouponForm.value.activeFlag = true ? 1 : 0),
      startDate: this.CouponForm.value.startDate,
      endDate: this.CouponForm.value.endDate,
      purposeOfCoupon: this.CouponForm.value.purposeOfCoupon,
    };
    console.log(data);
    return this.coupon.CreateCoupon(data).subscribe((res: any) => {
      debugger;
      var data = res != null ? true : false;
      this.dialogRef.close({ data });
      console.log(res);
      this.onNoClick();
    });
  }
}
