import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: StepperComponent }]
})
export class StepperComponent extends CdkStepper implements OnInit {
  @Input() formGroup: any;
  @Input() title: string;
  @Input() isMasterDetail: boolean;
  @Input() hidePrevious: string;
  @Output() onSubmit = new EventEmitter();
  @Output() onReturn = new EventEmitter();
  @Input() isEdit: boolean;
  submitUsed: boolean;
  returnUsed: boolean;
  steps: any[] = [];

  ngOnInit() {
    this.submitUsed = this.onSubmit.observers.length > 0;
    this.returnUsed = this.onReturn.observers.length > 0;
  }

  onClick(index: number): void {
    this.updateSelectedControl();
    this.selectedIndex = index;
  }

  next() {
    if (this.isMasterDetail && this.selectedIndex == 0 && !this.isEdit) {
      this.onSubmit.emit();
    }
    this.updateSelectedControl();
    super.next();
  }

  previous() {
    this.updateSelectedControl();
    super.previous();
  }

  private updateSelectedControl() {
    const control = this.selected.stepControl;
    if (control) {
      control.updateValueAndValidity();
      this.markFormGroupTouched(control);
    }
  }

  private markFormGroupTouched(formGroup) {
    formGroup.markAsTouched();
    const controls = (<any>Object).values(formGroup.controls);
    controls.forEach(control => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
