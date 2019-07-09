import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String;

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

  courses = this.http.getcourses<Course[]>('/api/courses');
}
