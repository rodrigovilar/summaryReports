import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { TooltipModule } from 'ngx-tooltip';

import { TranslateModule } from '@ngx-translate/core';

import { turmaListComponent } from './turma-list/turma-list.component';
import { turmaViewComponent } from './turma-view/turma-view.component';
import { turmaEditComponent } from './turma-edit/turma-edit.component';

import { SecurityUtil } from 'src/app/core/security/security.util';
import { SpinnerModule } from 'src/app/core/component/spinner/spinner.module';
import { SortHeaderModule } from 'src/app/core/directive/sort-header/sort-header.module';
import { PaginatorModule } from 'src/app/core/component/paginator/paginator.module';
import { PageSizeModule } from 'src/app/core/component/page-size/page-size.module';
import { SimpleSearchModule } from 'src/app/core/component/simple-search/simple-search.module';
import { DeleteConfirmationModule } from 'src/app/core/component/delete-confirmation/delete-confirmation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingButtonModule } from 'src/app/core/component/loading-button/loading-button.module';
import { ControlMessageModule } from 'src/app/core/component/control-message/control-message.module';
import { Select2Module } from 'src/app/shared/directive/select2/select2.module';
import { AdvancedSearchModule } from 'src/app/core/component/advanced-search/advanced-search.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ButtonChooseModule } from 'src/app/shared/directive/button-choose/button-choose.module';
import { StepperModule } from 'src/app/core/component/stepper/stepper.module';
import { ListModule } from 'src/app/core/component/list/list.module';
import { NgxMaskModule } from 'ngx-mask';

const routes: Routes = [
  {
    path: '',
    component: turmaListComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionRead('turma')]
      },
      breadcrumb: {
        pre: 'home',
        key: 'turma-list',
        title: 'Turmas',
        url: 'turmas',
        icon: 'icon-list',
        buttons: [
          {
            url: ['/turmas/create'],
            label: 'system.new',
            icon: 'fa fa-plus',
            permissions: [...SecurityUtil.getPermissionInsert('turma')]
          }
        ]
      }
    }
  },
  {
    path: 'create',
    component: turmaEditComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionInsert('turma')]
      },
      breadcrumb: {
        pre: 'turma-list',
        key: 'turma-create',
        title: 'Cadastrar ',
        icon: 'icon-warning'
      }
    }
  },
  {
    path: 'edit/:id',
    component: turmaEditComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionUpdate('turma')]
      },
      breadcrumb: {
        pre: 'turma-list',
        key: 'turma-edit',
        title: 'Editar ',
        icon: 'icon-warning'
      }
    }
  },
  {
    path: 'view/:id',
    component: turmaViewComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionRead('turma')]
      },
      breadcrumb: {
        pre: 'turma-list',
        key: 'turma-view',
        title: 'Visualizar ',
        icon: 'icon-warning'
      }
    }
  }
];

@NgModule({
  declarations: [turmaListComponent, turmaEditComponent, turmaViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterModule.forChild(routes),
    SortHeaderModule,
    RouterModule,
    SpinnerModule,
    TooltipModule,
    PaginatorModule,
    PageSizeModule,
    SimpleSearchModule,
    AdvancedSearchModule,
    DeleteConfirmationModule,
    LoadingButtonModule,
    ControlMessageModule,
    Select2Module,
    ButtonChooseModule,
    NgxPermissionsModule,
    StepperModule,
    NgxMaskModule.forRoot(),
    ListModule
  ],
  providers: []
})
export class turmaModule {}
