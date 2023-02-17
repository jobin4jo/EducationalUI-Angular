import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../../Services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  constructor(private course: CourseService, private route: Router) {}
  dataSource: any;
  displayedColumns = [
    'Sl.no',
    'courseName',
    'courseImageUrl',
    'price',
    'Actions',
  ];

  ngOnInit() {
    this.getAllCourse();
  }
  getAllCourse() {
    this.course.GetCourse().subscribe((res: any) => {
      console.log(res.data);

      this.dataSource = res.data;
    });
  }
  OnEdit(id: any) {}
  OnDelete(id: any) {
    debugger;
    return this.course.DeleteCourseById(id).subscribe((res: any) => {
      console.log(res);
      this.getAllCourse();
    });
  }
  onaddCourse() {
    this.route.navigate(['Admin/addCourse']);
  }
}
