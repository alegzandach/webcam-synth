import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
    selector: 'projects-page',
    templateUrl: './projects.component.html',
    styleUrls: ['../../app.component.css']
  })

  export class ProjectsComponent {
    public view = 'list'

    public toggle = (change) => {
      this.view = change;
    }
  };