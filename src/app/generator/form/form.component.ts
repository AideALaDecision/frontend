import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output() numberSend = new EventEmitter<number>();

  form !: FormGroup;
  submitted : boolean = false;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){
    this.form = this.formBuilder.group({
      number: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    });
  }

  get numberControl() {
    return this.form.get('number');
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      // Le formulaire est valide, vous pouvez soumettre les données
      console.log('Formulaire valide. Soumission des données...');

      const numberValue = this.form.get('number')?.value;

      this.numberSend.emit(numberValue);

    } else {
      // Le formulaire est invalide, affichez un message d'erreur ou prenez des mesures
      console.log('Le formulaire est invalide. Veuillez corriger les erreurs.');
    }
  }

}
