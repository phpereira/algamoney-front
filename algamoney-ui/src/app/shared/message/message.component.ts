import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
  <p-message severity="error" text="{{ text }}" *ngIf="temErro()"></p-message>
  `,
  styles: []
})
export class MessageComponent {

  @Input() error;
  @Input() control: FormControl;
  @Input() text: string;

  temErro(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }
}
