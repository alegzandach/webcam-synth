import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NavComponent } from '../components/nav/nav.component'
import { BioComponent } from '../pages/bio/bio.component'
import { ResumeComponent } from '../pages/resume/resume.component'
import { ProjectsComponent } from '../pages/projects/projects.component'
import { ContactComponent } from '../pages/contact/contact.component'

@Component({
    selector: 'home-app',
    templateUrl: './home.component.html',
    styleUrls: ['../app.component.css']
  })

  export class HomeComponent {

    constructor(private actRoute: ActivatedRoute) {
      this.currentPage = this.actRoute.snapshot.params.page;
    }

    public currentPage: string;

    public changePage = (e) => {
      this.currentPage = e
    }
  };