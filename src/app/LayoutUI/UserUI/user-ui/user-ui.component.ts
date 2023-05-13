import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-ui',
  templateUrl: './user-ui.component.html',
  styleUrls: ['./user-ui.component.scss'],
})
export class UserUIComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  Onlogin() {
    this.router.navigate(['login']);
  }
  onregister() {
    this.router.navigate(['signup']);
  }
}
