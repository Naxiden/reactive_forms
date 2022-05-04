import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NameNotTakenComponent } from './form/reactive-form/validators/name-not-taken/name-not-taken.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    NameNotTakenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
