import { OnInit } from '@angular/core';
import { BaseEditComponent } from './base-edit.component';

export abstract class baseEditEmbedded extends BaseEditComponent
  implements OnInit {
  protected insert(): void {
    console.log(this.getFormValue());

    this.service.insert(this.getServiceURL(), this.getFormValue()).subscribe(
      result => {
        this.item = result;
        // this.postGetItem()
        this.notification.insertSuccess();
        this.loading = !this.loading;
      },
      error => {
        this.loading = !this.loading;
        this.notification.error(
          error.error ? error.error.message : error.message
        );
      }
    );
  }
}
