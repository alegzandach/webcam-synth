import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
    selector: 'home-app',
    templateUrl: './home.component.html',
    styleUrls: ['../app.component.css']
  })
  export class HomeComponent {

    public name = 'viewer';
    public state: boolean = false;
    public imgWidth = 100;

    @ViewChild('img') img: ElementRef;

    public onClick (event) {
      this.img.nativeElement.addEventListener('scroll', () => console.log('ev1'));
      this.img.nativeElement.onpointermove = this.pointerdown_handler;
      this.img.nativeElement.setPointerCapture(1);
      if (!this.state){
        this.imgWidth = 150;
        this.state = true;
      }
      else if (this.state){
        this.imgWidth = 100;
        this.state = false;
      }
    };

    public startTouch (event) {
      console.log(event);
    }

    public wheel(ev){
      ev.preventDefault();
      console.log(ev);
      if(ev.deltaY < 0){
        this.imgWidth = this.imgWidth + ev.deltaY;
      }else if(ev.deltaY > 0){
        this.imgWidth = this.imgWidth + ev.deltaY;
      }
    }

    public onMove (event) {
      // event.preventDefault();
      // console.log(event);
    }

    public pointerdown_handler(ev) {
      console.log(ev);
      //this.img.nativeElement.setPointerCapture();
      //console.log("pointerDown", ev);
      return false;
    }
  };