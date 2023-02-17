import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/LayoutUI/SuperAdmin/Services/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private course: CourseService) {}
  collection: any;
  // show = false;
  ngOnInit(): void {
    this.course.GetCourse().subscribe((res: any) => {
      this.collection = res.data.data;
      console.log(res.data);
    });
  }
  onPython() {
    console.log('trr');
  }
}
