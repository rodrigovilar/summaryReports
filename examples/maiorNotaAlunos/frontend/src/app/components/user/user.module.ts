import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { TooltipModule } from 'ngx-tooltip';

import { TranslateModule } from '@ngx-translate/core';
import { UserListComponent } from './user-list/user-list.component';

import { SecurityUtil } from 'src/app/core/security/security.util';
import { SpinnerModule } from 'src/app/core/component/spinner/spinner.module';
import { SortHeaderModule } from 'src/app/core/directive/sort-header/sort-header.module';
import { PaginatorModule } from 'src/app/core/component/paginator/paginator.module';
import { PageSizeModule } from 'src/app/core/component/page-size/page-size.module';
import { SimpleSearchModule } from 'src/app/core/component/simple-search/simple-search.module';
import { DeleteConfirmationModule } from 'src/app/core/component/delete-confirmation/delete-confirmation.module';
import { UserEditComponent } from './user-edit/user-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingButtonModule } from 'src/app/core/component/loading-button/loading-button.module';
import { ControlMessageModule } from 'src/app/core/component/control-message/control-message.module';
import { Select2Module } from 'src/app/shared/directive/select2/select2.module';
import { AdvancedSearchModule } from 'src/app/core/component/advanced-search/advanced-search.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { UserViewComponent } from './user-view/user-view.component';
import { RolePipe } from 'src/app/shared/pipe/role.pipe';
import { ButtonChooseModule } from 'src/app/shared/directive/button-choose/button-choose.module';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionRead('user')]
      },
      // breadcrumb: {
      //     labels: {primary: 'user.title.plural', second: 'user.title.singular'}, label: 'user.title.plural', url: 'users/', icon: 'icon-list',
      //     buttons: [{link: ['/users/create'], icon: 'icon-database-add', label: 'user.title.singular', permissions: ['insert-*', 'insert-user']}],
      // }
      breadcrumb: {
        pre: 'home',
        key: 'user-list',
        title: 'user.title.plural',
        url: 'users',
        icon: 'icon-list',
        buttons: [
          {
            url: ['/users/create'],
            label: 'system.new',
            icon: 'fa fa-plus',
            permissions: [...SecurityUtil.getPermissionInsert('user')]
          }
        ]
      }
    }
  },
  {
    path: 'create',
    component: UserEditComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionInsert('user')]
      },
      breadcrumb: {
        pre: 'user-list',
        key: 'user-create',
        title: 'user.operations.register',
        icon: 'icon-user'
      }
    }
  },
  {
    path: 'edit/:id',
    component: UserEditComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionUpdate('user')]
      },
      breadcrumb: {
        pre: 'user-list',
        key: 'user-edit',
        title: 'user.operations.update',
        icon: 'icon-user'
      }
    }
  },
  {
    path: 'view/:id',
    component: UserViewComponent,
    data: {
      permissions: {
        only: [...SecurityUtil.getPermissionRead('user')]
      },
      breadcrumb: {
        pre: 'user-list',
        key: 'user-view',
        title: 'user.operations.view',
        icon: 'icon-user'
      }
    }
  }
];

@NgModule({
  declarations: [
    UserListComponent,
    UserEditComponent,
    UserViewComponent,
    RolePipe
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
    NgxPermissionsModule
  ],
  providers: []
})
export class UserModule {}
