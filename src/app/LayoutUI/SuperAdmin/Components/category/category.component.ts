import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../Services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor(private cat: CategoryService) {}

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
}
