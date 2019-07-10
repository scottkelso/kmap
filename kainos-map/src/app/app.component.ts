import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Component, EventEmitter, Input, Output} from '@angular/core';


import { Course } from '../course';
import axios from 'axios';

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

  newCourse: Course;
  httpOptions:any;
  
  // constructor(private http: HttpClient) {
  //   // let newCourse = new Course();
  //   // newCourse.courseID = 6;
  //   // newCourse.title = "title";
  //   // newCourse.date = "testdate";
  //   // newCourse.description = "desc";
  //   // this.createCourse(newCourse);
  // }

  getHeaders(){
    return  this.httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
    } 
  }




  constructor(private http: HttpClient) {}

  updateCourses(): void {
    this.courses2.push(this.course);
  }

  public onNotify() {
    this.updateCourses();
    this.createCourse(this.course);
  }



  createCourse(param: any){
    console.log(param);
    return axios
        .post('/api/createCourse', param, {headers:this.getHeaders()})
        .then(function (response) {
          console.log(response);
          return response;
      });
  }

  // post(onewCourse) {
  //   console.log(onewCourse);
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //         'Content-Type': 'application/json'
  //     })
  //   }
  //   const test = {something: 'somethingelse'};
  //  // const test2 = 
  //  this.http.post('/api/createCourse', this.newCourse).subscribe();
  //   test2.subscribe(result => { console.log(result); });
  // }

}
