import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RoleURL } from '../../../shared/url/url.domain';
import { BaseViewComponent } from 'src/app/core/interface/base-view.component';

@Component({
  selector: 'app-role-view',
  templateUrl: './role-view.component.html',
  styleUrls: ['./role-view.component.scss']
})
export class RoleViewComponent extends BaseViewComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  getServiceURL() {
    return RoleURL.BASE;
  }

  getRouterURL() {
    return 'roles';
  }

  getActivatedRoute(): ActivatedRoute {
    return this.route;
  }

  equalsSelect(o1, o2) { }
}
