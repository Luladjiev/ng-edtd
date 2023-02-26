import {Route} from "@angular/router";
import {API_URL} from '../app.config';
import {ServiceOneService} from "./services/service-one/service-one.service";
import {FeatureOneComponent} from "./feature-one.component";
import {PageOneComponent} from "./pages/page-one/page-one.component";
import {PageTwoComponent} from "./pages/page-two/page-two.component";

export default [{
  path: '',
  providers: [{
    provide: API_URL, useValue: 'http://asd.com',
  }, ServiceOneService],
  component: FeatureOneComponent,
  children: [{
    path: 'page-one',
    component: PageOneComponent
  }, {
    path: 'page-two',
    component: PageTwoComponent,
  }, {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'page-one'
  }],
}] as Array<Route>;