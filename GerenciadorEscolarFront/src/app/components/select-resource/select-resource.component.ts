import { SelectService } from './../../service/Data/select-resource/select.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-resource',
  templateUrl: './select-resource.component.html',
  styleUrls: ['./select-resource.component.css']
})
export class SelectResourceComponent implements OnInit {
  selectedOption: string = '';

  constructor(
    private router: Router,
    private selectService: SelectService
    ) { }

  ngOnInit(): void {
  }

  backToHome(){
    this.router.navigate([''])
  }
  toContinue(){
    switch(this.selectedOption){
      case 'class':
        this.selectService.setUserChoice('Turma');
        this.router.navigate(['/get-resource']);
        break;
      case 'classSchedule':
        alert();
        break;
      case 'student':
        alert();
        break;
      case 'subject':
        alert();
        break;
      case 'teacher':
        alert();
        break;
      default: alert('Você precisa selecionar algo ante de enviar');
    }
  }

  //

}
