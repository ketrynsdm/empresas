import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/interfaces/company';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  list: any;
  cards: Company[] = [];
  card!: Company;

  constructor(
    private service: ServiceService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getCard();
  }

  getCard(): void {
    this.service.get().subscribe({
      next: (data) => {
        return (this.cards = data);
      },
      error: (erro) => {
        return erro;
      },
      complete: () => {
        return 'requisiçao completa';
      },
    });
  }

  btnview(id: number): void {
    this.service.getCompanyId(id).subscribe((res: Company): void => {
      this.card = res;
    });
  }

  onClick(id: number): void {
    this.router.navigate(['/editar-empresa'], {
      queryParams: { id: this.card.id },
    });
  }
}
