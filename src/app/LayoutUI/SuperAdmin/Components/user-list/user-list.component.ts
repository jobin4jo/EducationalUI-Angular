import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(private user: UserService) {}
  displayedColumns: string[] = [
    'S.No',
    'userName',
    'role',
    'emailId',
    'Actions',
  ];
  datasource: any;

  ngOnInit(): void {
    this.getAlluserlist();
  }

  getAlluserlist() {
    return this.user.GetAllUserList().subscribe((res: any) => {
      console.log(res);
      this.datasource = res.data;
    });
  }
}
