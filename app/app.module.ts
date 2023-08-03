import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{DemoMaterialModule}from 'src/app/Scripts/Main/materialmodule';
import { MAutocompleteComponent } from './test/m-autocomplete/m-autocomplete.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Angutable01Component} from 'src/app/test/angutable01/angutable01.component';
import {TestAlternativeComponent} from 'src/app/Scripts/stored/myBootstrap/test-alternative/test-alternative.component'
import { MatTableModule } from '@angular/material/table'
import {MatPaginatorModule} from '@angular/material/paginator';
import {TestBootstrapComponent} from 'src/app/View/testBootstrap/testBootstrap.component';
import { ProductBoxComponent } from './Library/product-box/product-box.component'

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    MAutocompleteComponent,
    TestAlternativeComponent,
    Angutable01Component,
    TestBootstrapComponent,
    ProductBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,FormsModule, ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
