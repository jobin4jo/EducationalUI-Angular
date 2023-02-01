import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.scss'],
})
export class SuperAdminComponent implements OnInit {
  constructor(private router: Router) {}
  collectionData: any;
  name: any;
  ngOnInit(): void {
    this.collectionData = localStorage.getItem('user');
    const main = JSON.parse(this.collectionData);
    this.name = main.userId.name;
  }
  gotoLogin() {
    this.router.navigate(['']);
  }
}
