import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-component',
  templateUrl: './route-component.component.html',
  styles: [''],
})
export class RouteComponent {
  router = inject(Router);
}
