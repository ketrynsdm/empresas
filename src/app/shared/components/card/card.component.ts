import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Company } from 'src/app/interfaces/company';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Output() clickview = new EventEmitter<any>();
  @Input() card!: Company;

  constructor() {}

  ngOnInit(): void {}

  onClick(event?: number) {
    this.clickview.emit(event);
  }
}
