import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { portfolio_list } from '../../data/portfolio.model';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {

  portfolio_item: any;
  next_portfolio_item: any;
  prev_portfolio_item: any;

  constructor(private route: ActivatedRoute) { }

  public getRoutes(): void {
    let curr_route_index = 0;
    this.route.paramMap.subscribe(params => {
      this.portfolio_item = portfolio_list.find((item) => {

        return item.route_url === params.get('route_url');
      });

      curr_route_index = portfolio_list.findIndex((item) => {
        return item.route_url === params.get('route_url');
      });

      if (curr_route_index === 0) {
        this.prev_portfolio_item = portfolio_list[portfolio_list.length - 1];
        this.next_portfolio_item = portfolio_list[curr_route_index + 1];
      } else if (curr_route_index === portfolio_list.length - 1) {
        this.next_portfolio_item = portfolio_list[0];
        this.prev_portfolio_item = portfolio_list[curr_route_index - 1];
      } else {
        this.next_portfolio_item = portfolio_list[curr_route_index + 1];
        this.prev_portfolio_item = portfolio_list[curr_route_index - 1];
      }
    });
  }

  ngOnInit() {
    this.getRoutes();
  }

}
