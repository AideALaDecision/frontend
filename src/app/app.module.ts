import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneratorModule } from './generator/generator.module';
import { AlgorithmeModule } from './algorithme/algorithme.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GeneratorModule,
    AlgorithmeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
