import { Component, Input } from '@angular/core';
import { Establishment } from 'src/app/interfaces/Establishment';
import { Student } from 'src/app/interfaces/Student';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent {
  @Input() students !: Student[];
  @Input() establishments !: Establishment[];

  onSubmit(){
    console.log("Lancement de l'algorithme Gale & Shapley");
  }
}
