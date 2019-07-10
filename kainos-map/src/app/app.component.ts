import {Component, EventEmitter, Input, Output} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Course } from '../course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  @Input() course: Course;
  @Output() courseChange = new EventEmitter<Course>();
  title: string;
  courses = this.http.get<Course[]>('/api/getcourses');
  courses2: Course[] = [];

  constructor(private http: HttpClient) {}

  updateCourses(): void {
    this.courses2.push(this.course);
  }

  public onNotify() {
    this.updateCourses();
  }


}
