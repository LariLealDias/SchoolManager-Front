import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Student } from './student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private readonly API = 'https://localhost:7075/Student';

  constructor(private http: HttpClient) { }

  //api req
  read(): Observable<Student[]>{
    return this.http.get<Student[]>(this.API);
  }
    // read(): Observable<Class[]>{
  //   return this.http.get<Class[]>(this.API);
  // }
}
