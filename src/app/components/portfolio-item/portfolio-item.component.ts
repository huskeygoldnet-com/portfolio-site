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
  portfolio_routes: Array<string>;
  current_portfolio_item: string;
  next_portfolio_item: string;
  prev_portfolio_item: string;

  constructor(private route: ActivatedRoute) { }

  public getRoutes(): void {
    let curr_route_index = 0;

    this.route.paramMap.subscribe(params => {
      // console.log(params.get('route_url'));
      this.portfolio_item = portfolio_list.find((item) => {

        return item.route_url === params.get('route_url');
      });

      curr_route_index = portfolio_list.findIndex((item) => {
        return item.route_url === params.get('route_url');
      });


      this.portfolio_routes = portfolio_list.map((item) => {
        return item.route_url;
      });

      // this.current_portfolio_item = this.portfolio_item.route_url;
      if (curr_route_index === 0) {
        this.prev_portfolio_item = this.portfolio_routes[this.portfolio_routes.length - 1];
        this.next_portfolio_item = this.portfolio_routes[curr_route_index + 1];
      } else if (curr_route_index === this.portfolio_routes.length - 1) {
        this.next_portfolio_item = this.portfolio_routes[0];
        this.prev_portfolio_item = this.portfolio_routes[curr_route_index - 1];
      } else {
        this.next_portfolio_item = this.portfolio_routes[curr_route_index + 1];
        this.prev_portfolio_item = this.portfolio_routes[curr_route_index - 1];
      }

      console.log(this.portfolio_routes);

      console.log('Next portfolio item is: ' + this.next_portfolio_item);
      console.log('Prev portfolio item is: ' + this.prev_portfolio_item);






    });




  }

  ngOnInit() {
    this.getRoutes();
    console.log('component route changed');
  }

}
