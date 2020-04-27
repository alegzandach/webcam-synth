import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GifComponent } from './synths/gif/gif.component';
import { WebcamComponent } from './synths/webcam/webcam.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GifComponent,
    WebcamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
