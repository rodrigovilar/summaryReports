import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: any;

  currentBreadcrumb: any;

  header: any;

  cache: any[] = [];

  constructor(private activateRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.initBreadcrumbs();
  }

  protected buildBreadCrumb(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Array<any> = []
  ): Array<any> {
    if (!route.firstChild) {
      breadcrumbs[breadcrumbs.length - 1].last = true;
      return breadcrumbs;
    } else if (
      !route.firstChild.component ||
      !route.firstChild.snapshot.data.breadcrumb
    ) {
      return this.buildBreadCrumb(route.firstChild, url, breadcrumbs);
    }
    const title = route.firstChild.snapshot.data.breadcrumb.title;
    const path = route.routeConfig ? route.routeConfig.path : '';
    const icon = route.firstChild.snapshot.data.breadcrumb.icon;
    const nextUrl = `${url}${path}/`;
    const breadcrumb = {
      title: title,
      url: nextUrl,
      icon: icon,
      key: route.firstChild.snapshot.data.breadcrumb.key,
      buttons: route.firstChild.snapshot.data.breadcrumb.buttons
    };
    const newBreadcrumbs = [...breadcrumbs, breadcrumb];
    return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
  }

  // protected buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: Array<any> = []): Array<any> {
  //     if(!route.firstChild) {
  //         breadcrumbs[breadcrumbs.length - 1].last = true;
  //         return breadcrumbs;
  //     }
  //     else if(!route.firstChild.component || !route.firstChild.snapshot.data.breadcrumb) {
  //         return this.buildBreadCrumb(route.firstChild, url, breadcrumbs);
  //     }
  //     const title = route.firstChild.snapshot.data.breadcrumb.title;
  //     const path = route.routeConfig ? route.routeConfig.path : '';
  //     const icon = route.firstChild.snapshot.data.breadcrumb.icon;
  //     const nextUrl = `${url}${path}/`;
  //     const breadcrumb = {
  //         title: title,
  //         url: nextUrl,
  //         icon: icon,
  //         // header: route.firstChild.snapshot.data.breadcrumb.header,
  //         buttons: route.firstChild.snapshot.data.breadcrumb.buttons
  //     };
  //     const newBreadcrumbs = [...breadcrumbs, breadcrumb];
  //     return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
  // }

  initBreadcrumbs(): void {
    this.breadcrumbs = this.buildBreadCrumb(this.activateRoute.root);
    this.postInitBreadcrumbs();

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        distinctUntilChanged(),
        map(() => {
          return this.buildBreadCrumb(this.activateRoute.root);
        })
      )
      .subscribe(breadcrumbs => {
        this.breadcrumbs = breadcrumbs;
        this.postInitBreadcrumbs();
      });
  }

  postInitBreadcrumbs(): void {
    this.header = this.breadcrumbs[this.breadcrumbs.length - 1].header;

    this.currentBreadcrumb = this.breadcrumbs[this.breadcrumbs.length - 1];
  }
}
