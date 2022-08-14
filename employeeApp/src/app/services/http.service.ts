import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url:string='http://localhost:8081/api/v1/'
  constructor(private http:HttpClient) {}
  public fetchAll(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url + 'employees');
  }
  public addEmployee(employee : Employee){
    return this.http.post<Employee>(this.url + 'add_employee',employee)

  }
}
