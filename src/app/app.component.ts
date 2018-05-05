import { Component } from '@angular/core';
declare var require: any;
window['Tone'] = require('tone/build/Tone');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
