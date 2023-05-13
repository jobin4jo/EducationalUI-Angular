import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/LayoutUI/SuperAdmin/Services/course.service';
import * as signalR from '@microsoft/signalr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private course: CourseService) {
    this.onhubconnection();
  }
  collection: any;
  meg: any[] = [];
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

  onhubconnection() {
    let connection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7111/notify', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets,
      })
      .build();

    connection.start();

    connection.on('BroadcastMessage', (message) => {
      console.log(message);
    });
  }
}
