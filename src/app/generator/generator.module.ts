import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { FormComponent } from './form/form.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlueButtonComponent } from './blue-button/blue-button.component';
import { AffectationsComponent } from './affectations/affectations.component';



@NgModule({
  declarations: [
    PageComponent,
    FormComponent,
    PreferencesComponent,
    BlueButtonComponent,
    AffectationsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class GeneratorModule { }
