import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'gif-container',
    templateUrl: './gif-container.component.html',
  })

  export class GifContainer {
    public gifUrl = '';
    public showSearch = true;

    constructor(
      private router: Router
    ) {}

    public load = (url) => {
      this.showSearch = false
      this.gifUrl = url
    }

    public back = () => {
      this.showSearch = true;
    }
  };