import {Route} from "@angular/router";

export const APP_ROUTES: Array<Route> = [{
  path: 'feature-one',
  loadChildren: () => import('./feature-one/feature-one.routes')
}];