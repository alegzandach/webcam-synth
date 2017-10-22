import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'home-app',
    templateUrl: './home.component.html',
    styleUrls: ['../app.component.css']
  })
  export class HomeComponent {

    public name = 'viewer';
    public state: number = 0;
    public imgWidth = 100;

    @ViewChild('img') elRef: ElementRef;

    public onClick (event) {
      if (this.state === 0){
        this.imgWidth = 150;
        console.log(this.elRef.nativeElement.setPointerCapture());
        this.state = 1;
      }
      else if (this.state === 1){
        this.imgWidth = 100;
        this.state = 0;
      }
    };

    public onMove (event) {
      console.log(event);
    }
  };