import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { EnumItemsService } from './../../../shared/enums/enum-items';
import { ActivatedRoute } from '@angular/router';

import { BaseEditComponent } from '../../../core/interface/base-edit.component';

import { turmaURL } from '../../../shared/url/url.domain';

@Component({
  selector: 'app-turma-edit',
  templateUrl: './turma-edit.component.html',
  styleUrls: ['./turma-edit.component.scss']
})
export class turmaEditComponent extends BaseEditComponent implements OnInit {
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
      aluno: this.formBuilder.control(undefined, []),
      disciplina: this.formBuilder.control(undefined, []),
      nota: this.formBuilder.control(undefined, []),
      anoConclusao: this.formBuilder.control(undefined, [])
    };
  }

  getServiceURL() {
    return turmaURL.BASE;
  }

  getRouterURL() {
    return 'turmas';
  }

  isUpdatePartial(): boolean {
    return true;
  }

  getActivatedRoute(): ActivatedRoute {
    return this.route;
  }
}
