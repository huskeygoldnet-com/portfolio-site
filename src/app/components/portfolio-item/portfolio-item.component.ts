import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { portfolio_list } from '../../data/portfolio.model';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {

  // @Input() portfolio_item;
  portfolio_item: any;

  portfolioList = portfolio_list;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('route_url'));
      this.portfolio_item = portfolio_list.find((item) => {
        return item.route_url === params.get('route_url');
      });
      console.log(this.portfolio_item);
    });
  }

}
