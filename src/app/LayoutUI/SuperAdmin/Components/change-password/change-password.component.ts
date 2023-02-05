import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../../Services/course.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  changeForm!: FormGroup;
  data: any;
  constructor(private course: CourseService, private build: FormBuilder) {}

  ngOnInit(): void {
    this.changeForm = new FormGroup({
      prepassword: new FormControl(''),
      newpassword: new FormControl(''),
    });
  }
  onclear() {
    this.changeForm.reset();
  }
  Onchangepassword() {
    debugger;
    this.data = localStorage.getItem('user');
    const collection = JSON.parse(this.data);
    const id = collection.userId.userId;
    console.log(this.changeForm.value);

    this.course
      .changePassword(this.changeForm.value, id)
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}
