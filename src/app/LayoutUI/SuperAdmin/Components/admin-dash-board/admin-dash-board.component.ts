import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../Services/course.service';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.scss'],
})
export class AdminDashBoardComponent implements OnInit {
  constructor(public course: CourseService) {}
  collectionData: any;
  itemcount: any;
  ngOnInit(): void {
    console.log(localStorage.getItem('user'));
    this.courseCount();
  }
  courseCount() {
    return this.course.GetCourse().subscribe((res: any) => {
      this.itemcount = res.data.count;
      console.log(this.itemcount);
    });
  }
}
