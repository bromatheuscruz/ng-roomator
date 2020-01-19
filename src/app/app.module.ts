import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAnimalComponent } from './create-animal/create-animal.component';

import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { AverageWeightComponent } from './average-weight/average-weight.component';
import { HowManyCanBeSoldComponent } from './how-many-can-be-sold/how-many-can-be-sold.component';
import { CurrentValueComponent } from './current-value/current-value.component';
import { CustomCurrentValueComponent } from './custom-current-value/custom-current-value.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAnimalComponent,
    AverageWeightComponent,
    HowManyCanBeSoldComponent,
    CurrentValueComponent,
    CustomCurrentValueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
