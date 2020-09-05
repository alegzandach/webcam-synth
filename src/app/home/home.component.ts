import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}

  public current = 'bio';
  public bioDiv;
  public resumeDiv;
  public projectsDiv;
  public contactDiv;

  ngOnInit(): void {
    this.bioDiv = document.getElementById('bio').offsetTop
    this.resumeDiv = document.getElementById('resume').offsetTop
    this.projectsDiv = document.getElementById('projects').offsetTop
    this.contactDiv = document.getElementById('contact').offsetTop
    window.addEventListener('scroll', () => {
      this.checkPosition(window.pageYOffset)
    });
  }

  public checkPosition = (position) => {
    if (position > this.bioDiv && position < this.resumeDiv && this.current != 'bio') {
      this.current = 'bio'
      console.log(this.current)
    }
    if (position > this.resumeDiv && position < this.projectsDiv && this.current != 'resume') {
      this.current = 'resume'
      console.log(this.current)
    }
    if (position > this.projectsDiv && position < this.contactDiv && this.current != 'projects') {
      this.current = 'projects'
      console.log(this.current)
    }
    if (position >= this.contactDiv && this.current != 'contact') {
      this.current = 'contact'
      console.log(this.current)
    }
  }
}
