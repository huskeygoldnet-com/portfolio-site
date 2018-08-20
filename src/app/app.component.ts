import { Component } from '@angular/core';
import { fadeAnimation } from './animations/animation';
import { Router, RouterOutlet, UrlSegment, NavigationEnd } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
  }

  getState(outlet: RouterOutlet) {

    try {
      if (outlet.activatedRouteData['depth'] === 0 || outlet.activatedRouteData['depth'] === 1 ) {
        return outlet.activatedRoute.snapshot.url[0].path;
      } else {
        return outlet.activatedRoute.snapshot.url[1].path;
      }
    } catch (e) {
      return;
    }
  }

}
