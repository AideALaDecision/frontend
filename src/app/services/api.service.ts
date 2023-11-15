import { Injectable } from '@angular/core';
import { Student } from '../interfaces/Student';
import { Establishment } from '../interfaces/Establishment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

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

  constructor() { }

  getStudents() : Observable<Student[]> {
    return of(this.students);
  }

  getEstablishements() : Observable<Establishment[]> {
    return of(this.establishments);
  }

}
