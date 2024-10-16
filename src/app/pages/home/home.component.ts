import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/interfaces/company';
import { ServiceService } from 'src/app/services/service.service';
import { RouteComponent } from 'src/app/shared/components/route-component/route-component.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends RouteComponent implements OnInit {
  list: any;
  cards: Company[] = [];
  card!: Company;

  constructor(private service: ServiceService) {
    super();
  }

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
