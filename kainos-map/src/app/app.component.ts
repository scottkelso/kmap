import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Course } from '../course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String;

  constructor(private http: HttpClient) {}

  /*courses = [
    {
      title: "Test Course",
      date: "8th July 2020",
      location: "Belfast"
    },
    {
      title: "Presentation Skills",
      date: "12th July 2020",
      location: "Derry"
    }
  ];*/

  courses = this.http.get<Course[]>('/api/getcourses');
}
