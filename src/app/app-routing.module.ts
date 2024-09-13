import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OpeningCompanyComponent } from './pages/opening-company/opening-company.component';
import { EditCompanyComponent } from './pages/edit-company/edit-company.component';

const routes: Routes = [
  {
    path: 'editar-empresa',
    component: EditCompanyComponent,
  },
  {
    path: 'abertura-de-empresa',
    component: OpeningCompanyComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
