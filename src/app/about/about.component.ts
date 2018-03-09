import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about = { reference : "1" , designation : "HechAngular" , remarque : "Premier Projet Angular 4" };

  constructor() { }

  ngOnInit() {
  }

}
