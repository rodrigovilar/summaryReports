import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { turmaURL } from '../../../shared/url/url.domain';
import { BaseViewComponent } from 'src/app/core/interface/base-view.component';

@Component({
  selector: 'app-turma-view',
  templateUrl: './turma-view.component.html',
  styleUrls: ['./turma-view.component.scss']
})
export class turmaViewComponent extends BaseViewComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  getServiceURL() {
    return turmaURL.BASE;
  }

  getRouterURL() {
    return 'turmas';
  }

  getActivatedRoute(): ActivatedRoute {
    return this.route;
  }
}
