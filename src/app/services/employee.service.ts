import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../common/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8082/api/employees';


  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Employee[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.employees)
    );
  }
}


interface GetResponse {
  _embedded: {
    employees: Employee[];
  }
}