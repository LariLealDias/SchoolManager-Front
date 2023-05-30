import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Class } from 'src/app/service/API/service-class/class';
import { ClassService } from 'src/app/service/API/service-class/class.service';
import { Student } from 'src/app/service/API/service-student/student';
import { StudentService } from 'src/app/service/API/service-student/student.service';

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


  constructor(
    private classService : ClassService,
    private studentService : StudentService,
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
    if(this.informationHome == 'read'){

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
    }
    else if(this.informationHome == 'create'){
      if(this.userChoice == 'Turma'){

      }
    }
  }



  //ifs:
  public getCombinationReadPlusTurma(){
    return this.informationHome == 'read' && this.userChoice == 'Turma';
  }
  public getCombinationReadPlusEstudante(){
    return this.informationHome == 'read' && this.userChoice == 'Estudante';
  }


}
