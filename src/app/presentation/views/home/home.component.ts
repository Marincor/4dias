import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {


  constructor() {}

  ngOnInit() {}

  scrollToCompany = () => {
    let companies = document.getElementById('section-company');
    if (companies) companies.scrollIntoView({ behavior: 'smooth' });
  };



}
