import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortHeaderirective } from './sort-header.directive';

@NgModule({
  imports: [CommonModule],
  exports: [SortHeaderirective],
  declarations: [SortHeaderirective],
  providers: []
})
export class SortHeaderModule {}
