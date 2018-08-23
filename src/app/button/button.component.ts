import {
  Input,
  Component,
  ViewEncapsulation,
  EventEmitter,
  Output
} from '@angular/core';

import { CuriaService } from '../curia.service';

@Component({
  selector: 'custom-button',
  template: `<button mat-flat-button (click)="handleClick()">{{label}}</button>`,
  styleUrls: ['./button.component.scss'
  ]
  ,
  encapsulation: ViewEncapsulation.Emulated
})

export class ButtonComponent {
  @Input() label = 'default label';
  @Output() action = new EventEmitter<number>();
  private clicksCt = 0;

  handleClick() {
    this.clicksCt++;
    this.action.emit(this.clicksCt);
  }
}
