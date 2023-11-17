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
  case !: number;

  setSizeAndCaseOption(formValues: any) {
    this.n = formValues.size;
    this.case = formValues.caseOption;
    if(this.n){
      console.log(this.n);
      this.apiService.getStudentsAndEstablishements(this.n, this.case).pipe(first()).subscribe(data =>
        {
          this.students = data.students;
          this.establishments = data.establishments;
        });  
    }
  }

}
