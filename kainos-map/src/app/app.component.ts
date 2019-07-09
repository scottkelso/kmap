import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Course } from '../course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;


  constructor(private http: HttpClient) {}
  courses = this.http.get<Course[]>('/api/getcourses');

}
