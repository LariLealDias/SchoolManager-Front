import { Subject } from 'src/app/service/API/service-subject/subject';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private readonly API = 'https://localhost:7075/Subject';
  constructor(
    private http : HttpClient
  ) { }

  read() : Observable<Subject[]>{
    return this.http.get<Subject[]>(this.API);
  }

  create(subject : Subject) : Observable<Subject>{
    return this.http.post<Subject>(this.API, subject);
  }

}
