import { Component, OnInit, Input } from '@angular/core';
import { BaseListComponent } from 'src/app/core/interface/base-list.component';
import { UserURL } from 'src/app/shared/url/url.domain';
import { Comparison } from '../../domain/comparison.domain';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseListComponent {
  @Input() columns: [];
  @Input() isMaterDetail: boolean;
  @Input() idRelationships: number;
  @Input() attrRelationships: string;
  @Input() buttons = [];
  @Input() routerUrl: string;
  @Input() url: any;
  @Input() hideDefaultButtons = false;
  @Input() title: string;

  protected currentFilter: Array<any>;

  ngOnInit() {
    setTimeout(() => {
      super.ngOnInit();
    }, 1000);
  }

  getServiceURL(): string {
    return this.url.BASE;
  }

  ngAfterContentChecked() {
    this.addIdRelationships();
  }

  getRouterURL(): string {
    return this.routerUrl || this.url.BASE;
  }

  addIdRelationships() {
    if (this.isMaterDetail) {
      this.currentFilter = [
        {
          field: this.attrRelationships + '->id',
          comparison: Comparison.Relationships,
          value: this.idRelationships ? this.idRelationships : 0
        }
      ];
    }
  }
}
