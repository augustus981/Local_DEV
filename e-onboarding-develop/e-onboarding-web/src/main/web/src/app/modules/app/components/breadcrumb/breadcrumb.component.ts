import { distinctUntilChanged, filter } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  public breadcrumbs: IBreadcrumb[];
  isShowBreadcrumd = true;

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd), distinctUntilChanged())
      .subscribe(() => {
        this.isShowBreadcrumd = true;
        this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
      });

    this.translateService.onLangChange.subscribe(event => {
      this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
    });
  }

  buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
    const breadcrumbData = route.routeConfig && route.routeConfig.data && route.routeConfig.data.breadcrumb ?
      route.routeConfig.data.breadcrumb : null;

    // let label = route.routeConfig && route.routeConfig.data && route.routeConfig.data.breadcrumb ?
    //   this.translateService.instant(route.routeConfig.data.breadcrumb.label) : '';
    // let path = route.routeConfig ? route.routeConfig.path : '';

    const label = breadcrumbData && breadcrumbData.label ? this.translateService.instant(breadcrumbData.label) : '';
    let path = route.routeConfig ? route.routeConfig.path : '';
    const showBreadcrumb = breadcrumbData && breadcrumbData.showBreadcrumb === false ? false : true;
    const showBreadcrumbItem = breadcrumbData && breadcrumbData.showBreadcrumbItem === false ? false : true;

    // if showBreadcrumb is false => do not show breadcrumb
    if (!showBreadcrumb) {
      this.isShowBreadcrumd = showBreadcrumb;
    }

    // If the route is dynamic route such as ':id', remove it
    const lastRoutePart = path.split('/').pop();
    const isDynamicRoute = lastRoutePart.startsWith(':');
    if (isDynamicRoute && !!route.snapshot) {
      const paramName = lastRoutePart.split(':')[1];
      path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
      // label = route.snapshot.params[paramName];
    }

    const nextUrl = path ? `${url}/${path}` : url;

    const breadcrumb: IBreadcrumb = {
      label,
      url: nextUrl,
      showBreadcrumb,
      showBreadcrumbItem
    };

    const newBreadcrumbs = breadcrumb.label ? [...breadcrumbs, breadcrumb] : [...breadcrumbs];
    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }

    return newBreadcrumbs;
  }

}

export interface IBreadcrumb {
  label: string;
  url: string;
  showBreadcrumb: boolean;
  showBreadcrumbItem: boolean;
}
