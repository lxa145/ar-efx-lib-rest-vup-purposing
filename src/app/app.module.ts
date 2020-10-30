/*
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';


// dynamic form builder
//import { DynamicFormBuilderModule } from './dynamic-form-builder/dynamic-form-builder.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

// dynamic form builder
import { DynamicFormBuilderModule } from './formularios/dynamic-form-builder.module';

//import {} from './'

import { AppComponent } from './app.component';
//import { HelloComponent } from './hello.component';


@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule , DynamicFormBuilderModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
