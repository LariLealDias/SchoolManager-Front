import { GetResourceComponent } from './../../pages/get-resource/get-resource.component';
import { Component, Input,OnInit} from '@angular/core';
import { Class } from 'src/app/service/API/service-class/class';
import { Student } from 'src/app/service/API/service-student/student';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {
 @Input() resourceClass : Class = {
    id: 0,
    grade: '',
    section: '',
    shift: '',
  }

  @Input() resourceStudent : Student = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: 0,
    birthDate: new Date()
  }


  constructor(
    public getResource : GetResourceComponent
  ) { }

  ngOnInit(): void {

  }


}
