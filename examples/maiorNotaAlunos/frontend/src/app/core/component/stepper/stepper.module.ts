import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, TranslateModule, CommonModule],
  declarations: [StepperComponent],
  exports: [CdkStepperModule, StepperComponent],
  providers: []
})
export class StepperModule {}
