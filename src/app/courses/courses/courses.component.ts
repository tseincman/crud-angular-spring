import { Component } from '@angular/core';
import { Course } from '../model/Course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses: Course[] = [];
  displayedColumns = ["name","category"];


  constructor(private coursesService: CoursesService){
  }

  ngOnInit(): void {
    this.courses = this.coursesService.list();
  }


}
