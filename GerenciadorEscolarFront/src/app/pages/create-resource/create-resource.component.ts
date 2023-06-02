import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'src/app/service/API/service-subject/subject';
import { SubjectService } from 'src/app/service/API/service-subject/subject.service';

@Component({
  selector: 'app-create-resource',
  templateUrl: './create-resource.component.html',
  styleUrls: ['./create-resource.component.css']
})
export class CreateResourceComponent implements OnInit {

  subject : Subject ={
    id: 0,
    title: ''
  }

  constructor(
    private subjectService : SubjectService,
    private router : Router,
    private route : ActivatedRoute,

  ) { }

  ngOnInit(): void {

  }

  CreateResource(){
      this.subjectService.create(this.subject).subscribe(()=>{
        this.router.navigate(['/get-resource/Disciplina']);
      });
  }

}
