import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/LayoutUI/SuperAdmin/Services/category.service';
import { CourseService } from 'src/app/LayoutUI/SuperAdmin/Services/course.service';
import { ImageUploadService } from 'src/app/LayoutUI/SuperAdmin/Services/image-upload.service';

@Component({
  selector: 'app-addand-edit-course',
  templateUrl: './addand-edit-course.component.html',
  styleUrls: ['./addand-edit-course.component.scss'],
})
export class AddandEditCourseComponent implements OnInit {
  constructor(
    private cat: CategoryService,
    private image: ImageUploadService,
    private fb: FormBuilder,
    private course: CourseService,
    private router: Router
  ) {}
  categoryCollection: any;
  location: string = 'CourseCover';
  CourseForm!: FormGroup;
  coverimage = '../../../../../../../assets//linkdin.jpg';
  ngOnInit(): void {
    this.getCategory();
    this.FormLoad();
  }
  FormLoad() {
    return (this.CourseForm = this.fb.group({
      courseName: [''],
      courseImageUrl: [''],
      coursePrice: [''],
      categoryId: [],
      courseDescription: [''],
    }));
  }

  getCategory() {
    return this.cat.getAllCategory().subscribe((res: any) => {
      console.log(res);
      this.categoryCollection = res.data.data;
      console.log(this.categoryCollection);
    });
  }
  async ImageUpload(event: any) {
    const file: File = event.target.files[0];

    console.log(file);
    return this.image
      .imageUploadbasedLocation(this.location, file)
      .subscribe((res: any) => {
        console.log(res);
        if (res.code == 200) {
          // this.defaultImage(res.data);
          console.log(res.data);

          console.log(this.defaultImage(res));
        }
      });
  }
  defaultImage(value: any) {
    if (value.length == 0) {
      this.coverimage = '../../../../../../../assets//linkdin.jpg';
    } else {
      this.coverimage = value.data;

      console.log(this.coverimage);
    }
  }
  ////Course Submit
  OnSubmit() {
    debugger;
    const data = {
      courseName: this.CourseForm.value.courseName,
      courseImageUrl: this.coverimage,
      price: this.CourseForm.value.coursePrice,
      categoryId: this.CourseForm.value.categoryId,
      courseDescription: this.CourseForm.value.courseDescription,
    };
    this.course.addCourse(data).subscribe((res: any) => {
      console.log(res);
      if (res.data.courseId != null) {
        this.CourseForm.reset();
        this.router.navigate(['Admin/course']);
      }
    });

    console.log(data);
  }

  ///Course Form Clear Function
  OnClear() {
    this.CourseForm.reset();
  }
  OnBack() {
    this.router.navigate(['Admin/course']);
  }
}
