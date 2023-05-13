import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/LayoutUI/SuperAdmin/Services/course.service';

@Component({
  selector: 'app-allcourse',
  templateUrl: './allcourse.component.html',
  styleUrls: ['./allcourse.component.scss'],
})
export class AllcourseComponent implements OnInit {
  constructor(private course: CourseService) {}
  collection: any;
  ngOnInit(): void {
    this.getallcourse();
  }
  getallcourse() {
    return this.course.GetCourse().subscribe((res: any) => {
      console.log(res.data.data);
      this.collection = res.data.data;
    });
  }
}
