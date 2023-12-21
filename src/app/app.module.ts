import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecyclingAreaComponent } from './components/recycling-area/recycling-area.component';
import { FlipCardWasteComponent } from './components/flip-card-waste/flip-card-waste.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    InfoCardComponent,
    RecyclingAreaComponent,
    FlipCardWasteComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCheckboxModule,
        MatButtonModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
