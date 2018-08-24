import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import { debounce } from 'rxjs/operators';
import { timer } from 'rxjs/observable/timer';

@Component({
  selector: 'custom-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  public form: FormGroup;
  @Input() loading: boolean;
  @Output() search = new EventEmitter<string>();


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      search: ''
    });
  }

  public clear() {
    this.form.controls['search'].setValue('');
  }

  ngOnInit() {
    this.form.value.search = '';

    // emit search each 400ms
    this.form.controls['search'].valueChanges.pipe(debounce(() => timer(400))).subscribe(val => {
      this.search.emit(val);
    });
  }

}
