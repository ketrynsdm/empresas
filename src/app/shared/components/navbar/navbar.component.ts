import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() btn: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate() {
    this.router.navigate(['abertura-de-empresa']);
  }
}
