import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouteReuseStrategy } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CustomReuseStrategy } from '../routing/route-reuse-strategy';

import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';
import { PortfolioItemComponent } from '../components/portfolio-item/portfolio-item.component';
import { ContactComponent } from '../components/contact/contact.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';


const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Zach Bayoff | Web Developer | Home', depth: 0 } },
  { path: 'about', component: AboutComponent, pathMatch: 'full', data: { title: 'Zach Bayoff | Web Developer | About', depth: 1 } },
  { path: 'portfolio', component: PortfolioComponent, pathMatch: 'full', data: { title: 'Zach Bayoff | Web Developer | Portfolio', depth: 1 } },
  { path: 'portfolio/:route_url', component: PortfolioItemComponent, pathMatch: 'full', data: { depth: 2, } },
  { path: 'contact', component: ContactComponent, pathMatch: 'full', data: { title: 'Zach Bayoff | Web Developer | Contact', depth: 1, } },
  { path: '**', component: NotfoundComponent, pathMatch: 'full', data: { title: 'Zach Bayoff | Web Developer', depth: 1, } }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomReuseStrategy
    }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {




}
