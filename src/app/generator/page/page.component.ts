import { Component } from '@angular/core';
import { Establishment } from 'src/app/interfaces/Establishment';
import { Student } from 'src/app/interfaces/Student';
import { ApiService } from 'src/app/services/api.service';
import { Observable, first } from 'rxjs';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {

  students !: Student[];
  establishments !: Establishment[];
  

  constructor(private apiService : ApiService){}

  n !: number;

  setN(n: number) {
    this.n = n;
    if(this.n){
      console.log(this.n);
      this.apiService.getStudents().pipe(first()).subscribe( students => this.students = students);
      this.apiService.getEstablishements().pipe(first()).subscribe( establishments => this.establishments = establishments);  
    }
  }

}
