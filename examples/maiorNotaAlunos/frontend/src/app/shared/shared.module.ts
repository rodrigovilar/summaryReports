import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { UserService } from './service/user.service';
import { LoggedinGuard } from './security/loggedin.guard';

@NgModule({
  imports: [CommonModule, TranslateModule, RouterModule],
  declarations: [],
  exports: [],
  providers: [UserService, LoggedinGuard]
})
export class SharedModule {}
