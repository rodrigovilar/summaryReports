import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { TooltipModule } from 'ngx-tooltip';

import { TranslateModule } from '@ngx-translate/core';

import { PermissionListComponent } from './permission-list/permission-list.component';
import { PermissionViewComponent } from './permission-view/permission-view.component';
import { PermissionEditComponent } from './permission-edit/permission-edit.component';

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
    component: PermissionListComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionRead('permission')]
      },
      breadcrumb: {
        pre: 'home',
        key: 'permission-list',
        title: 'Permissions',
        url: 'permissions',
        icon: 'icon-list',
        buttons: [
          {
            url: ['/permissions/create'],
            label: 'system.new',
            icon: 'fa fa-plus',
            permissions: [...SecurityUtil.getPermissionInsert('permission')]
          }
        ]
      }
    }
  },
  {
    path: 'create',
    component: PermissionEditComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionInsert('permission')]
      },
      breadcrumb: {
        pre: 'permission-list',
        key: 'permission-create',
        title: 'Cadastrar Permission',
        icon: 'icon-warning'
      }
    }
  },
  {
    path: 'edit/:id',
    component: PermissionEditComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionUpdate('permission')]
      },
      breadcrumb: {
        pre: 'permission-list',
        key: 'permission-edit',
        title: 'Editar Permission',
        icon: 'icon-warning'
      }
    }
  },
  {
    path: 'view/:id',
    component: PermissionViewComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionRead('permission')]
      },
      breadcrumb: {
        pre: 'permission-list',
        key: 'permission-view',
        title: 'Visualizar Permission',
        icon: 'icon-warning'
      }
    }
  }
];

@NgModule({
  declarations: [
    PermissionListComponent,
    PermissionEditComponent,
    PermissionViewComponent
  ],
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
export class PermissionModule {}
