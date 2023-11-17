import { Injectable } from '@angular/core';
import { Student } from '../interfaces/Student';
import { Establishment } from '../interfaces/Establishment';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = "http://localhost:8083/api";

  students : Student[] = [
    {
      id: 1,
      preferences: [2, 1, 3]
    },
    {
      id: 2,
      preferences: [1, 2, 3]
    },
    {
      id: 3,
      preferences: [1, 2, 3]
    }
  ];

  establishments : Establishment[] = [
    {
      id: 1,
      priorities: [1, 3, 2]
    },
    {
      id: 2,
      priorities: [2, 1, 3]
    },
    {
      id: 3,
      priorities: [2, 1, 3]
    }
  ];

  constructor(private http: HttpClient) { }

  getStudents() : Observable<Student[]> {
    return of(this.students);
  }

  getEstablishements() : Observable<Establishment[]> {
    return of(this.establishments);
  }

  getStudentsAndEstablishements(size: number, caseId: number) : Observable<any> {
    const url = `${this.apiUrl}/preferences?size=${size}&caseID=${caseId}`;
    return this.http.get<any>(url);
  }

}
