import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavComponent } from '../../components/nav/nav.component'

@Component({
    selector: 'projects-page',
    templateUrl: './projects.component.html',
    styleUrls: ['../../app.component.css']
  })

  export class ProjectsComponent {
    public view = 'list'

    constructor(
      private router: Router
    ) {}

    public navigate = (page) => {
      this.router.navigate([`/${page}`])
    }
  };