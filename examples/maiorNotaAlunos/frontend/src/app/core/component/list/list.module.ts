import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvancedSearchModule } from 'src/app/core/component/advanced-search/advanced-search.module';
import { SortHeaderModule } from 'src/app/core/directive/sort-header/sort-header.module';
import { PaginatorModule } from 'src/app/core/component/paginator/paginator.module';
import { PageSizeModule } from 'src/app/core/component/page-size/page-size.module';
import { SimpleSearchModule } from 'src/app/core/component/simple-search/simple-search.module';
import { DeleteConfirmationModule } from 'src/app/core/component/delete-confirmation/delete-confirmation.module';
import { Select2Module } from 'src/app/shared/directive/select2/select2.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ButtonChooseModule } from 'src/app/shared/directive/button-choose/button-choose.module';
import { TooltipModule } from 'ngx-tooltip';
import { ListComponent } from './list.component';
import { SpinnerModule } from 'src/app/core/component/spinner/spinner.module';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    TooltipModule,
    SortHeaderModule,
    PaginatorModule,
    PageSizeModule,
    SimpleSearchModule,
    DeleteConfirmationModule,
    Select2Module,
    ButtonChooseModule,
    NgxPermissionsModule,
    CommonModule,
    AdvancedSearchModule,
    SpinnerModule
  ],
  declarations: [ListComponent],
  exports: [ListComponent],
  providers: []
})
export class ListModule {}
