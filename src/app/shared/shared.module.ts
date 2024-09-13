import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalComponent } from './components/modal/modal.component';
import { CepTextPipe } from './pipes/cep-text.pipe';
import { CpfTextPipe } from './pipes/cpf-text.pipe';

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    NavbarComponent,
    ModalComponent,
    CepTextPipe,
    CpfTextPipe,
  ],
  imports: [CommonModule, BrowserModule, FormsModule, ReactiveFormsModule],
  exports: [
    ButtonComponent,
    CardComponent,
    NavbarComponent,
    ModalComponent,
    CepTextPipe,
    CpfTextPipe,
  ],
})
export class SharedModule {}
