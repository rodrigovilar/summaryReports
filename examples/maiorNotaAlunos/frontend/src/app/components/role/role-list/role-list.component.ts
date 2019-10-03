import { Component, OnInit } from '@angular/core';

import { BaseListComponent } from '../../../core/interface/base-list.component';

import { RoleURL } from '../../../shared/url/url.domain';
import { PropertyType } from 'src/app/core/domain/property-type.domain';
import { Comparison } from 'src/app/core/domain/comparison.domain';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent extends BaseListComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  getServiceURL(): string {
    return RoleURL.BASE;
  }

  getRouterURL(): string {
    return 'roles';
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
