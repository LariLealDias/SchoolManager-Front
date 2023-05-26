import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Class } from './class';


@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private readonly API = 'https://localhost:7075/Class';
  constructor(private http: HttpClient) { }

  //req API
  read(): Observable<Class[]>{
    return this.http.get<Class[]>(this.API);
  }
}
