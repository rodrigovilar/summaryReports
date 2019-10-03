import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserURL } from '../../../shared/url/url.domain';
import { BaseViewComponent } from 'src/app/core/interface/base-view.component';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent extends BaseViewComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  getServiceURL() {
    return UserURL.BASE;
  }

  getRouterURL() {
    return 'users';
  }

  getActivatedRoute(): ActivatedRoute {
    return this.route;
  }
}
