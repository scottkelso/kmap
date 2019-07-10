import { Component, OnInit } from '@angular/core';
import { Course } from '../course';

import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  public newCourse: Course;
  submitted = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.newCourse = new Course();
  }

  // onSubmit() {
  //   this.submitted = true;
  //   console.log(this.newCourse);
  //   this.http.post<Course>('/api/addcourse', this.newCourse);
  // }

  addcourse(addForm): void {
    if(addForm.valid) {
      this.submitted = true;
      console.log(this.newCourse);
      this.http.post<Course>('/api/addcourse', this.newCourse);
    } else {
      console.log("Form is invalid");
    }
  }

}
