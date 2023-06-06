import { SubjectService } from './../../service/API/service-subject/subject.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Class } from 'src/app/service/API/service-class/class';
import { ClassService } from 'src/app/service/API/service-class/class.service';
import { Student } from 'src/app/service/API/service-student/student';
import { StudentService } from 'src/app/service/API/service-student/student.service';
import { Subject } from 'src/app/service/API/service-subject/subject';

@Component({
  selector: 'app-get-resource',
  templateUrl: './get-resource.component.html',
  styleUrls: ['./get-resource.component.css']
})
export class GetResourceComponent implements OnInit {
  userChoice!: string;
  informationHome : string | null;
  readClass : Class[] = [];
  readStudent : Student[] = [];
  readSubject : Subject[] = [];
  skip: number = 0;

  constructor(
    private classService : ClassService,
    private studentService : StudentService,
    private subjectService : SubjectService,
    private route : ActivatedRoute,
    private router : Router
    ) {
    this.informationHome = localStorage.getItem('informationHome');
    console.log(this.informationHome);
  }



  ngOnInit(): void {
    this.getUserChoice();
  }

  backToSelect(){
    this.router.navigate(['/select-resource'])

  }

  getUserChoice(): void{
    this.route.params.subscribe(params => {
      this.userChoice = params['value'];
      this.getByResource();
    });
  }

  getByResource(){
      if(this.userChoice == 'Turma'){
        this.classService.read().subscribe((arrayOfClassRead =>{
          this.readClass = arrayOfClassRead;
        }));
      }
      if(this.userChoice == 'Estudante'){
        this.studentService.read().subscribe(( arrayOfStudentRead =>{
          this.readStudent = arrayOfStudentRead;
        }));
      }
      if(this.userChoice == 'Disciplina'){
          this.subjectService.read().subscribe(( arrayOfSubjectRead =>{
            this.readSubject = arrayOfSubjectRead;
        }))
      }

  }



  //ifs:
  public getChoiceTurma(){
    return  this.userChoice == 'Turma';
  }
  public getChoiceEstudante(){
    return  this.userChoice == 'Estudante';
  }

  public getChoiceDisciplina(){
    return this.userChoice == 'Disciplina';
  }


  //btn see more
  getPagination(){
    this.skip += 10;
    this.subjectService.readWithSkip(this.skip).subscribe((arrayOfSubjectRead => {
      this.readSubject = arrayOfSubjectRead;
    }));
  }
}
