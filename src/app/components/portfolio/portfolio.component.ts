import { Component, OnInit } from '@angular/core';

import { portfolio_list } from '../../data/portfolio.model';
import { VanillaTilt } from 'vanilla-tilt';








@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolioList = portfolio_list;

  constructor() { }

  ngOnInit() {
    // console.log(VanillaTilt);
  }

}
