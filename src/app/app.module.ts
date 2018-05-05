import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { WebCamModule } from 'ack-angular-webcam';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    WebCamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
