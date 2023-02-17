import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from '../../Services/category.service';
import { AddCategoryComponent } from './Components/add-category/add-category.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor(private cat: CategoryService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getallCategory();
  }
  displayedColumns: string[] = ['S.No', 'categoryName', 'status', 'Actions'];
  datasource: any;
  getallCategory() {
    return this.cat.getAllCategory().subscribe((res: any) => {
      console.log(res);
      this.datasource = res.data;
      console.log(res.data);
    });
  }

  //Add category Modal

  AddCategory() {
    const dialogRef = this.dialog.open(AddCategoryComponent);
    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
      
      if (res === undefined) {
        this.getallCategory();
      }
    });
  }
  ////delete category Id
  OnDelete(id: any) {
    debugger;
    return this.cat.deletecategory(id).subscribe((res: any) => {
      console.log(res.data);
      if (res.status == true) {
        this.getallCategory();
      }
    });
  }
}
