import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  students: Student[] = [];
  
  constructor(public studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router) { }
    
  ngOnInit(): void {
    this.studentService.getAll().subscribe((data: Student[])=>{
      this.students = data;
      console.log(this.students);
    })  
  }
}

    

     
