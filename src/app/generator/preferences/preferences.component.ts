import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() startAlgorithm = new EventEmitter();

  onSubmit(){
    console.log("Lancement de l'algorithme Gale & Shapley");
    this.startAlgorithm.emit();
  }
}
