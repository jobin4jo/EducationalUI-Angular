import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../Services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  constructor(private course: CourseService) {}
  dataSource: any;
  displayedColumns = ['courseName', 'courseImageUrl', 'price', 'Actions'];

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
      this.getAllCourse();
    });
  }
}
