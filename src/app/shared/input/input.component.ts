import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() control!: FormControl | any;
  @Input() type:
    | 'text'
    | 'number'
    | 'radio'
    | 'date'
    | 'password'
    | 'email'
    | 'search'
    | 'range' = 'text';
  @Input() minlength = '';
  @Input() maxlength = '';
  @Input() id = '';
  @Input() value = '';
  @Input() placeholder = '';

  constructor() {}

  ngOnInit(): void {}
}
