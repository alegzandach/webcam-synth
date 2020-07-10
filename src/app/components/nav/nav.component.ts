import { Component, ElementRef, ViewChild, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'nav-component',
    templateUrl: './nav.component.html',
    styleUrls: ['../../app.component.css']
  })

  export class NavComponent {

    @Output()
    clicked: EventEmitter<string> = new EventEmitter<string>()

    constructor(
      private router: Router
    ) { }

    public changePage = (page) => {
      this.router.navigate([`/${page}`])
      this.clicked.emit(page);
    }
  };