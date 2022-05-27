import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form:FormGroup;
  students: Student[] = [];

  constructor(public studentservice:StudentService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id : new FormControl('', [Validators.required]),
     studentname: new FormControl('',[ Validators.required,]),
      Emailid: new FormControl('', [Validators.required]),
        phonenumber:new FormControl ('', [Validators.required,]),
       age: new FormControl('', [Validators.required,]),
       joineddate:new FormControl('', [Validators.required]),
    

    });
  }
  

  

  get f(){
    return this.form.controls;
  }

    submit(){
      console.log(this.form.value);
      this.studentservice.create(this.form.value).subscribe(res => {
           console.log('Post created successfully!');
           this.router.navigateByUrl('student/index');
      })
 }
  
}

