import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  category,
  CategoryService,
} from 'src/app/LayoutUI/SuperAdmin/Services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private cat: CategoryService,
    private router: Router,
    private mat: MatDialog
  ) {}
  categoryForm!: FormGroup;
  dialog = false;
  ngOnInit(): void {
    this.getLoadForm();
  }
  ////load form Data
  getLoadForm() {
    return (this.categoryForm = this.fb.group({
      categoryName: [''],
    }));
  }
  ////Category Add//
  OnAdd() {
    debugger;
    console.log(this.categoryForm.value);
    return this.cat
      .postCategory(this.categoryForm.value)
      .subscribe((res: any) => {
        console.log(res.data.categoryId);
        this.mat.closeAll();
        // if (res.data.categoryId != null) {
        //   this.dialog = true;
        //   this.router.navigate(['Admin/cat']);
        // }
      });
  }
}
