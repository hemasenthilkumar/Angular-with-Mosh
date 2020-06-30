import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  categories = [{id:1, name:"development"}, {id:2, name:"Agile"}];
  constructor() { }

  ngOnInit(): void {
  }

  submit(f)
  {
    console.log("submitted");
  }
}
