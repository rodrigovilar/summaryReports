import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { EnumItemsService } from './../../../shared/enums/enum-items';
import { ActivatedRoute } from '@angular/router';

import { BaseEditComponent } from '../../../core/interface/base-edit.component';

import { RoleURL } from '../../../shared/url/url.domain';
import { PermissionURL } from '../../../shared/url/url.domain';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.scss']
})
export class RoleEditComponent extends BaseEditComponent implements OnInit {
  permissions: any[];

  constructor(
    private route: ActivatedRoute,
    private enumItemsService: EnumItemsService
  ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.service.getAll(PermissionURL.BASE).subscribe(result => {
      this.permissions = result['items'];
    });
  }

  getFormControls(): Object {
    return {
      id: this.formBuilder.control(undefined, []),
      name: this.formBuilder.control(undefined, []),
      description: this.formBuilder.control(undefined, []),
      permissions: this.formBuilder.control(undefined, [])
    };
  }

  getServiceURL() {
    return RoleURL.BASE;
  }

  getRouterURL() {
    return 'roles';
  }

  isUpdatePartial(): boolean {
    return true;
  }

  getActivatedRoute(): ActivatedRoute {
    return this.route;
  }
}
