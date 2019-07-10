import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../course';

import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  @Input() course: Course;
  @Output() courseChange = new EventEmitter<Course>();

  public newCourse: Course;
  submitted = false;
  isSubmit = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.newCourse = new Course();
  }

  addcourse(addForm): void {
    if (addForm.valid) {
      this.isSubmit = !this.isSubmit;
      this.submitted = true;
      console.log(this.newCourse);
      this.http.post<Course>('/api/addcourse', this.newCourse);
      this.courseChange.emit(this.newCourse);
    } else {
      console.log('Form is invalid');
    }
  }

  mySub() {
    this.isSubmit = !this.isSubmit;
  }

}
