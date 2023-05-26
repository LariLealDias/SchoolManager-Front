import { Component, Input,OnInit} from '@angular/core';
import { Class } from 'src/app/service/API/service-class/class';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {
 @Input() resource : Class = {
  id: 0,
  grade: '',
  section: '',
  shift: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
