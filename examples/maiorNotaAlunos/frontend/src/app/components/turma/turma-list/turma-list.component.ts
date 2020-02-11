import { Component, OnInit } from '@angular/core';

import { BaseListComponent } from '../../../core/interface/base-list.component';

import { turmaURL } from '../../../shared/url/url.domain';
import { PropertyType } from 'src/app/core/domain/property-type.domain';
import { Comparison } from 'src/app/core/domain/comparison.domain';

@Component({
  selector: 'app-turma-list',
  templateUrl: './turma-list.component.html',
  styleUrls: ['./turma-list.component.scss']
})
export class turmaListComponent extends BaseListComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  getServiceURL(): string {
    return turmaURL.BASE;
  }

  getRouterURL(): string {
    return 'turmas';
  }

  advancedSearch(): void {
    this.addSearch('aluno', 'Aluno', PropertyType.String, Comparison.Like);
    this.addSearch(
      'disciplina',
      'Disciplina',
      PropertyType.String,
      Comparison.Like
    );
    this.addSearch('nota', 'Nota', PropertyType.String, Comparison.Like);
    this.addSearch('anoConclusao', 'Ano conclusao', PropertyType.String, Comparison.Like);
  }
}
