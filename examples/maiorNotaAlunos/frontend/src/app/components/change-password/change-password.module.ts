import { NgModule } from '@angular/core';
import { ChangePasswordComponent } from './change-password.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ControlMessageModule } from 'src/app/core/component/control-message/control-message.module';
import { LoadingButtonModule } from 'src/app/core/component/loading-button/loading-button.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChangePasswordComponent,
    canActivate: []
  }
];

@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ControlMessageModule,
    LoadingButtonModule,
    RouterModule.forChild(routes),
    RouterModule
  ]
})
export class ChangePasswordModule {}
