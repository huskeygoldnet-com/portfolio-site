import { Component } from '@angular/core';
import { fadeAnimation } from './animations/animation';
import { RouterOutlet, UrlSegment } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {

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
