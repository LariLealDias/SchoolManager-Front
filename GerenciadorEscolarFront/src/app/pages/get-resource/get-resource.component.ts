import { Component, OnInit } from '@angular/core';
import { SelectService } from 'src/app/service/Data/select-resource/select.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-get-resource',
  templateUrl: './get-resource.component.html',
  styleUrls: ['./get-resource.component.css']
})
export class GetResourceComponent implements OnInit {
  userChoice!: string;
  informationHome : string | null;


  constructor(private selectService: SelectService) {
    // this.userChoice = selectService.getUserChoice();
    this.informationHome = localStorage.getItem('informationHome');
    console.log(this.informationHome);
  }



  ngOnInit(): void {
    this.getUserChoice();
    this.getByResource();
  }

  getUserChoice(): string{
    this.userChoice = this.selectService.getUserChoice();
    return this.userChoice;
  }

  getByResource(){
    if(this.informationHome == 'create'){
      alert();
    }
  }


}
