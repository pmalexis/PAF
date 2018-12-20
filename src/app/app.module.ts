import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoiffuresComponent} from "./coiffures/coiffures.component";
import { CoiffureComponent } from './coiffure/coiffure.component';
import {FormsModule} from "@angular/forms";
import { AjoutCoiffureComponent } from './ajout-coiffure/ajout-coiffure.component';

@NgModule({
  declarations: [
    AppComponent,
    CoiffureComponent,
    CoiffuresComponent,
    AjoutCoiffureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
