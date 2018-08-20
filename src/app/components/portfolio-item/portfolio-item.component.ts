import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';

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

  constructor(private route: ActivatedRoute, private router: Router, private meta: Meta) {
    this.meta.addTags([
      { charset: 'utf-8' },
      { name: 'description', content: 'Hi, I\'m Zach - A web developer with skills in HTML5, CSS3, Javascript, Angular, WordPress and much more. Based in Brooklyn, NY.' },
      { name: 'robots', content: 'index, follow' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge, chrome=1' },
      { name: 'author', content: 'Zach Bayoff' },
      { name: 'copyright', content: 'Zach Bayoff' },
      { name: 'keywords', content: 'Web developer, front-end developer, brooklyn' }
    ]);
  }



  public getRoutes(): void {
    let curr_route_index = 0;
    this.route.paramMap.subscribe(params => {
      this.portfolio_item = portfolio_list.find((item) => {
        // conso/le.log(item);
        return item.route_url === params.get('route_url');
      });

      if (this.portfolio_item === undefined) {
        this.router.navigate(['./404']);
      }

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
