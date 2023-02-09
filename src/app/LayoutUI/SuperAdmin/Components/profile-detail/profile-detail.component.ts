import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss'],
})
export class ProfileDetailComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ProfileDetailComponent>) {}
  // data: any;
  ngOnInit(): void {}
}
