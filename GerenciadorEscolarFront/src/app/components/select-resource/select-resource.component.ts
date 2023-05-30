import { SelectService } from './../../service/Data/select-resource/select.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-resource',
  templateUrl: './select-resource.component.html',
  styleUrls: ['./select-resource.component.css']
})
export class SelectResourceComponent implements OnInit {
  selectedOption!: string ;
  informationHome : string | null;


  constructor(
    private router: Router,
    ) {
      this.informationHome = localStorage.getItem('informationHome');
     }

  ngOnInit(): void {
  }

  backToHome(){
    this.router.navigate(['']);
  }
  toContinue(){
    switch(this.selectedOption){
      case 'class':
        if(this.informationHome == 'read'){
          this.router.navigate(['/get-resource/Turma']);
        }else if(this.informationHome == 'create'){
          this.router.navigate(['/create-resource/Turma']);
        }
        break;
      case 'classSchedule':
        alert();
        break;
      case 'student':
        if(this.informationHome == 'read'){
          this.router.navigate(['/get-resource/Estudante']);
        }else if(this.informationHome == 'create'){
          this.router.navigate(['/create-resource/Estudante']);
        }
        break;
      case 'subject':
        alert();
        break;
      case 'teacher':
        alert();
        break;
      default: alert('Você precisa selecionar algo antes de enviar');
    }
  }

  //

}
