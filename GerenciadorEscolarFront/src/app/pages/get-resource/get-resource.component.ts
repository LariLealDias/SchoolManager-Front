import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Class } from 'src/app/service/API/service-class/class';
import { ClassService } from 'src/app/service/API/service-class/class.service';


@Component({
  selector: 'app-get-resource',
  templateUrl: './get-resource.component.html',
  styleUrls: ['./get-resource.component.css']
})
export class GetResourceComponent implements OnInit {
  userChoice!: string;
  informationHome : string | null;
  readClass : Class[] = [];


  constructor(
    private classService : ClassService,
    private route : ActivatedRoute
    ) {
    this.informationHome = localStorage.getItem('informationHome');
    console.log(this.informationHome);
  }



  ngOnInit(): void {
    this.getUserChoice();
  }

  getUserChoice(): void{
    this.route.params.subscribe(params => {
      this.userChoice = params['value'];
      this.getByResource();
    });
  }

  getByResource(){
    if(this.informationHome == 'read' && this.userChoice == 'Turma'){
      this.classService.read().subscribe((arrayOfClassRead =>{
        this.readClass = arrayOfClassRead;
      }));
    }

  }


}
