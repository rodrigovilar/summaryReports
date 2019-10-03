import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent implements OnInit, OnDestroy {
  @Output() protected ok: EventEmitter<boolean> = new EventEmitter<boolean>();

  protected isSubscribed: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.ok.unsubscribe();
  }

  onOK() {
    this.ok.emit(true);
  }

  subscribe(callback: Function): void {
    if (!this.isSubscribed) {
      this.isSubscribed = !this.isSubscribed;
      this.ok.subscribe(callback);
    }
  }
}
