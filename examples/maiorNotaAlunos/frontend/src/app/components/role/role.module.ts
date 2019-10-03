import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { TooltipModule } from 'ngx-tooltip';

import { TranslateModule } from '@ngx-translate/core';

import { RoleListComponent } from './role-list/role-list.component';
import { RoleViewComponent } from './role-view/role-view.component';
import { RoleEditComponent } from './role-edit/role-edit.component';

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
    component: RoleListComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionRead('role')]
      },
      breadcrumb: {
        pre: 'home',
        key: 'role-list',
        title: 'Roles',
        url: 'roles',
        icon: 'icon-list',
        buttons: [
          {
            url: ['/roles/create'],
            label: 'system.new',
            icon: 'fa fa-plus',
            permissions: [...SecurityUtil.getPermissionInsert('role')]
          }
        ]
      }
    }
  },
  {
    path: 'create',
    component: RoleEditComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionInsert('role')]
      },
      breadcrumb: {
        pre: 'role-list',
        key: 'role-create',
        title: 'Cadastrar Role',
        icon: 'icon-warning'
      }
    }
  },
  {
    path: 'edit/:id',
    component: RoleEditComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionUpdate('role')]
      },
      breadcrumb: {
        pre: 'role-list',
        key: 'role-edit',
        title: 'Editar Role',
        icon: 'icon-warning'
      }
    }
  },
  {
    path: 'view/:id',
    component: RoleViewComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionRead('role')]
      },
      breadcrumb: {
        pre: 'role-list',
        key: 'role-view',
        title: 'Visualizar Role',
        icon: 'icon-warning'
      }
    }
  }
];

@NgModule({
  declarations: [RoleListComponent, RoleEditComponent, RoleViewComponent],
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
export class RoleModule {}
