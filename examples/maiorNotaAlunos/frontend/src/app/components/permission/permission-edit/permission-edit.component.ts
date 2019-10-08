import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { EnumItemsService } from './../../../shared/enums/enum-items';
import { ActivatedRoute } from '@angular/router';

import { BaseEditComponent } from '../../../core/interface/base-edit.component';

import { PermissionURL } from '../../../shared/url/url.domain';

@Component({
  selector: 'app-permission-edit',
  templateUrl: './permission-edit.component.html',
  styleUrls: ['./permission-edit.component.scss']
})
export class PermissionEditComponent extends BaseEditComponent
  implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private enumItemsService: EnumItemsService
  ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  getFormControls(): Object {
    return {
      id: this.formBuilder.control(undefined, []),
      name: this.formBuilder.control(undefined, []),
      description: this.formBuilder.control(undefined, [])
    };
  }

  getServiceURL() {
    return PermissionURL.BASE;
  }

  getRouterURL() {
    return 'permissions';
  }

  isUpdatePartial(): boolean {
    return true;
  }

  getActivatedRoute(): ActivatedRoute {
    return this.route;
  }
}
