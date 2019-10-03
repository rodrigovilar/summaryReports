import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PaginatorComponent],
  exports: [PaginatorComponent],
  providers: []
})
export class PaginatorModule {}
