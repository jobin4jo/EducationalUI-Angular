import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageUploadService {
  
  url = 'https://localhost:7111/api/FileUpload/FileUpload';
  constructor(private http: HttpClient) {}
  imageUploadbasedLocation(location: any, file: File) {
    debugger;
    const formData = new FormData();
    formData.append('course', file);
    return this.http.post(this.url + '?Location=' + location + '', formData);
  }
}
