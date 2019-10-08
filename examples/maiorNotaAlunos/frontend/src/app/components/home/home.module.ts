import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { HomeComponent } from './home.component';
import { SidebarModule } from 'src/app/shared/components/sidebar/sidebar.module';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { SpinnerModule } from 'src/app/core/component/spinner/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    HeaderModule,
    BreadcrumbModule,
    SidebarModule,
    FooterModule,
    SpinnerModule
  ],
  declarations: [HomeComponent],
  providers: [HomeComponent]
})
export class HomeModule {}
