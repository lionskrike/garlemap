import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MarkerModalComponent} from "./marker-modal/marker-modal.component";

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MarkerModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
