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
  courses = this.http.get<Course[]>('/api/getcourses');
  constructor(private http: HttpClient) {}

  showAddCourse = false;
  addCourse(): void {
    this.showAddCourse = true;
  }

}
