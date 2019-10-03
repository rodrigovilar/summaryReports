import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { LoginComponent } from './login.component';
import { LoadingButtonModule } from 'src/app/core/component/loading-button/loading-button.module';
import { ControlMessageModule } from 'src/app/core/component/control-message/control-message.module';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule,
    RouterModule.forChild(routes),
    RouterModule,
    LoadingButtonModule,
    ControlMessageModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: []
})
export class LoginModule {}
