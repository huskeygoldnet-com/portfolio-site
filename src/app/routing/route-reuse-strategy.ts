import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';
import { PortfolioItemComponent } from '../components/portfolio-item/portfolio-item.component';

// export class CustomReuseStrategy implements RouteReuseStrategy {

//     handlers: { [key: string]: DetachedRouteHandle } = {};

//     shouldDetach(route: ActivatedRouteSnapshot): boolean {
//         return true;
//     }

//     store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
//         this.handlers[route.routeConfig.path] = null;
//     }

//     shouldAttach(route: ActivatedRouteSnapshot): boolean {
//         return !!route.routeConfig && !!this.handlers[route.routeConfig.path];
//     }

//     retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
//         if (!route.routeConfig) {
//             return null;
//         }
//         return this.handlers[route.routeConfig.path];
//     }

//     shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
//         return false;
//         // return curr.component !== PortfolioItemComponent;
//     }
// }

// export class CustomReuseStrategy extends RouteReuseStrategy {
//     shouldDetach(route: ActivatedRouteSnapshot): boolean { return false; }
//     store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void { }
//     shouldAttach(route: ActivatedRouteSnapshot): boolean { return false; }
//     retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null { return null; }
//     shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
//         return false;
//     }
// }


export class CustomReuseStrategy implements RouteReuseStrategy {

    private handlers: { [key: string]: DetachedRouteHandle } = {};


    constructor() {

    }

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return false;
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        this.handlers[route.url.join('/') || route.parent.url.join('/')] = handle;
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return false;
        // return !!this.handlers[url];
    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        return this.handlers[route.url.join('/') || route.parent.url.join('/')];
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        if (curr.component === PortfolioItemComponent) {
            return false;
        } else {
            return future.routeConfig === curr.routeConfig;
        }

    }

}
