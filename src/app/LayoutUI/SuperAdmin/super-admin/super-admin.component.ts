import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordComponent } from '../Components/change-password/change-password.component';
import { UserService } from '../Services/user.service';
import { ProfileDetailComponent } from '../Components/profile-detail/profile-detail.component';
@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.scss'],
})
export class SuperAdminComponent implements OnInit {
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private user: UserService
  ) {}
  collectionData: any;
  ArrayData: any;
  name: any;
  ngOnInit(): void {
    this.collectionData = localStorage.getItem('user');
    const main = JSON.parse(this.collectionData);
    this.name = main.userId.name;
  }
  gotoLogin() {
    this.router.navigate(['']);
  }
  openDialog() {
    const dialogRef = this.dialog.open(ChangePasswordComponent);
    dialogRef.afterClosed();
  }
  PopUpDetail() {
    const st = JSON.parse(this.collectionData);
    const id = st.userId.userId;
    return this.user.GetUserDetailById(id).subscribe((res: any) => {
      this.ArrayData = res.data;
      const dialogRef = this.dialog.open(ProfileDetailComponent, {
        // data: {
        //   userName: this.ArrayData.userId.userName,
        //   role: this.ArrayData.userId.role,
        //   status: this.ArrayData.userId.status,
        //   phoneNumber: this.ArrayData.userId.phoneNumber,
        //   address: this.ArrayData.userId.address,
        //   city: this.ArrayData.userId.city,
        //   state: this.ArrayData.userId.state,
        //   emailId: this.ArrayData.userId.emailId,
        // },
        data:this.ArrayData.userId
      });
      console.log(this.ArrayData.userId);
      
      dialogRef.afterClosed();
    });
  }
}
