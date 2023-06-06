import { Subject } from 'src/app/service/API/service-subject/subject';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


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

  readWithSkip(skip : number) : Observable<Subject[]>{
    const params = new HttpParams().set('skip', skip.toString()).set('take', '10');
    return this.http.get<Subject[]>(this.API, { params })
  }

  create(subject : Subject) : Observable<Subject>{
    return this.http.post<Subject>(this.API, subject);
  }

}
