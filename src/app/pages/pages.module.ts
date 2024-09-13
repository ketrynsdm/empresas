import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { OpeningCompanyComponent } from './opening-company/opening-company.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { CepTextPipe } from '../shared/pipes/cep-text.pipe';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [HomeComponent, OpeningCompanyComponent, EditCompanyComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    NgbTypeaheadModule,
  ],
})
export class PagesModule {}
