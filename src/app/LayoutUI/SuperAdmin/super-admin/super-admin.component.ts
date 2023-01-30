import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.scss'],
})
export class SuperAdminComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  gotoLogin() {
    this.router.navigate(['']);
  }
}
