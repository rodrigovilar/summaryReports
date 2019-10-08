import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { LoggedinGuard } from './shared/security/loggedin.guard';
import { NgxPermissionsGuard } from 'ngx-permissions';

export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      breadcrumb: {
        key: 'home',
        title: 'home.title',
        url: '/',
        icon: 'icon-home2'
      }
    },
    // canActivate: [LoggedinGuard],
    // canActivateChild: [NgxPermissionsGuard],
    children: [
      {
        path: 'users',
        loadChildren: 'src/app/components/user/user.module#UserModule'
      },
      {
        path: 'turmas',
        loadChildren: 'src/app/components/turma/turma.module#turmaModule'
      },
      {
        path: 'users',
        loadChildren: 'src/app/components/user/user.module#UserModule'
      },
      {
        path: 'permissions',
        loadChildren:
          'src/app/components/permission/permission.module#PermissionModule'
      },
      {
        path: 'roles',
        loadChildren: 'src/app/components/role/role.module#RoleModule'
      },
      {
        path: 'password/change',
        loadChildren:
          'src/app/components/change-password/change-password.module#ChangePasswordModule',
        data: {
          breadcrumb: {
            pre: 'home',
            title: 'change-password.label',
            url: '/password/change',
            icon: 'icon-lock2'
          }
        }
      }
    ]
  },
  // {
  //   path: 'login',
  //   loadChildren: 'src/app/components/login/login.module#LoginModule'
  // },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
