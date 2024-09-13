import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() type: 'submit' | 'button' = 'button';
  @Input() disabled: boolean = false;
  @Output() click = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onClick(event: any) {
    event.stopPropagation();
    this.click.emit(event);
  }
}
