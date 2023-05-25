import { Component, OnInit } from '@angular/core';
import { SelectService } from 'src/app/service/Data/select-resource/select.service';

@Component({
  selector: 'app-get-resource',
  templateUrl: './get-resource.component.html',
  styleUrls: ['./get-resource.component.css']
})
export class GetResourceComponent implements OnInit {
  userChoice! : string ;

  constructor( selectService: SelectService) {
    this.userChoice = selectService.getUserChoice();
  }

  ngOnInit(): void {

  }




}
