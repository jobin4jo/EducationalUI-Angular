import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.scss'],
})
export class AdminDashBoardComponent implements OnInit {
  constructor() {}
  collectionData:any;
  ngOnInit(): void {
    console.log(localStorage.getItem('user'));  
  
  }
}
