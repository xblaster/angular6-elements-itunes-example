import {
  Input,
  Component,
  ViewEncapsulation,
  EventEmitter,
  Output
} from '@angular/core';

import { CuriaService } from '../curia.service';
import { JsonpModule, Jsonp, Response } from '@angular/http';

@Component({
  selector: 'custom-button',
  template: `<button mat-flat-button (click)="handleClick()">{{label}}</button>
  <custom-search-bar></custom-search-bar>
  <br/>
  <div *ngFor="let song of songs ">
  <img [src]="song.artworkUrl100"/>
  {{song.artistName}} - {{song.trackName}}
  <hr/>
  </div>
  `,
  styleUrls: ['./button.component.scss'
  ]
})

export class ButtonComponent {

  constructor(private curia: CuriaService, private jsonp: Jsonp) { }

  @Input() label = 'default label';
  @Output() action = new EventEmitter<number>();
  private clicksCt = 0;
  public songs;

  handleClick() {
    const term = 'mambo';
    const apiRoot = 'https://itunes.apple.com/search';
    const apiURL = `${apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
    this.clicksCt++;

    this.jsonp.request(apiURL).subscribe(x => {
      this.songs = x.json().results;
      console.log(this.songs);
    });


    this.action.emit(this.clicksCt);
  }
}
