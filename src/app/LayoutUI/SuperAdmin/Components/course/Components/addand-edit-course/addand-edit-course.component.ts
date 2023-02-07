import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/LayoutUI/SuperAdmin/Services/category.service';

@Component({
  selector: 'app-addand-edit-course',
  templateUrl: './addand-edit-course.component.html',
  styleUrls: ['./addand-edit-course.component.scss'],
})
export class AddandEditCourseComponent implements OnInit {
  constructor(private cat: CategoryService) {}
  categoryCollection: any;

  ngOnInit(): void {
    this.cat.getAllCategory().subscribe((res: any) => {
      console.log(res);
      this.categoryCollection = res;
    });
  }
}
