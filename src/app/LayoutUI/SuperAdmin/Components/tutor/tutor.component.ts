import { Component, OnInit } from '@angular/core';
import { TutorService } from '../../Services/tutor.service';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.scss'],
})
export class TutorComponent implements OnInit {
  constructor(private tutor: TutorService) {}
  displayedColumns: string[] = [
    'S.No',
    'tutorName',
    'tutorPhotoPath',
    // 'tutorDescription',
    'Actions',
  ];
  datasource: any;
  ngOnInit(): void {
    this.getAllTutorList();
  }
  getAllTutorList() {
    return this.tutor.getAllTutorList().subscribe((res: any) => {
      this.datasource = res.data;
      console.log(res);
    });
  }
  OnTutorDelete(data: any) {
    var id = data.tutorid;
    return this.tutor.deteteTutorById(id).subscribe((res: any) => {
      console.log(res);
      this.getAllTutorList();
    });
  }
}
