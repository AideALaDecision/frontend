import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Affectation } from 'src/app/interfaces/Affectation';
import { Establishment } from 'src/app/interfaces/Establishment';
import { Student } from 'src/app/interfaces/Student';

@Component({
  selector: 'app-affectations',
  templateUrl: './affectations.component.html',
  styleUrls: ['./affectations.component.css']
})
export class AffectationsComponent implements OnChanges {
  @Input() affectations !: Affectation[];
  @Input() students !: Student[];
  @Input() establishments !: Establishment[];

  globalStudentSatisfaction: number = 0;
  globalEstablishmentSatisfaction: number = 0;
  globalCombinedSatisfaction: number = 0;


  ngOnInit() {
    this.calculateSatisfactions();
  }
  
  ngOnChanges(changes: SimpleChanges) {
    // Vous pouvez ajouter des conditions supplémentaires si nécessaire
    if (changes['affectations'] || changes['students'] || changes['establishments']) {
      this.calculateSatisfactions();
    }
  }

  calculateSatisfactions() {
    this.students.forEach(student => {
      const affectation = this.affectations.find(a => a.idEtudiant === student.id);
      if (affectation) {
        const preferenceIndex = student.preferences.indexOf(affectation.idEstablishment);
        student.satisfaction = this.calculateSatisfaction(preferenceIndex, student.preferences.length);
      }
    });

    this.establishments.forEach(establishment => {
      const affectation = this.affectations.find(a => a.idEstablishment === establishment.id);
      if (affectation) {
        const priorityIndex = establishment.priorities.indexOf(affectation.idEtudiant);
        establishment.satisfaction = this.calculateSatisfaction(priorityIndex, establishment.priorities.length);
      }
    });

    this.calculateGlobalSatisfactions();
  }

  calculateSatisfaction(index: number, length: number): number {
    return (length - index) / length * 100;
  }

  findStudentSatisfaction(idEtudiant: number): number {
    return this.students.find(student => student.id === idEtudiant)?.satisfaction || 0;
  }

  findEstablishmentSatisfaction(idEstablishment: number): number {
    return this.establishments.find(establishment => establishment.id === idEstablishment)?.satisfaction || 0;
  }

  calculateTotalSatisfaction(idEtudiant: number, idEstablishment: number): number {
    const studentSatisfaction = this.findStudentSatisfaction(idEtudiant);
    const establishmentSatisfaction = this.findEstablishmentSatisfaction(idEstablishment);
    return (studentSatisfaction + establishmentSatisfaction) / 2;
  }

  calculateGlobalSatisfactions() {
    const totalStudentSatisfaction = this.students.reduce((acc, student) => acc + (student.satisfaction ?? 0), 0);
    this.globalStudentSatisfaction = this.students.length > 0 ? totalStudentSatisfaction / this.students.length : 0;
  
    const totalEstablishmentSatisfaction = this.establishments.reduce((acc, establishment) => acc + (establishment.satisfaction ?? 0), 0);
    this.globalEstablishmentSatisfaction = this.establishments.length > 0 ? totalEstablishmentSatisfaction / this.establishments.length : 0;
  
    this.globalCombinedSatisfaction = (this.globalStudentSatisfaction + this.globalEstablishmentSatisfaction) / 2;
  }
  

  }

