import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component'

@Component({
    selector: 'bio-page',
    templateUrl: './bio.component.html',
    styleUrls: ['./bio.component.css']
  })

  export class BioComponent implements OnInit{
    ngOnInit(): void {
     
    }

    public transition = () => {
      let bio = document.querySelector("div.bioStart");
      let pic = document.querySelector("img.picStart");
      let bg = document.querySelector("div.bgStart");

      bio.className = "bio"
      pic.className = "pic"
      bg.className = "bg"
    }
  };