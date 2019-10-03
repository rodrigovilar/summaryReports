import { Component, OnInit } from '@angular/core';

import { BaseListComponent } from '../../../core/interface/base-list.component';

import { PermissionURL } from '../../../shared/url/url.domain';
import { PropertyType } from 'src/app/core/domain/property-type.domain';
import { Comparison } from 'src/app/core/domain/comparison.domain';

@Component({
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.scss']
})
export class PermissionListComponent extends BaseListComponent
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  getServiceURL(): string {
    return PermissionURL.BASE;
  }

  getRouterURL(): string {
    return 'permissions';
  }

  advancedSearch(): void {
    this.addSearch('name', 'Name', PropertyType.String, Comparison.Like);
    this.addSearch(
      'description',
      'Description',
      PropertyType.String,
      Comparison.Like
    );
  }
}
