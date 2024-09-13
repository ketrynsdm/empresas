import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from 'src/app/services/service.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-opening-company',
  templateUrl: './opening-company.component.html',
  styleUrls: ['./opening-company.component.scss'],
})
export class OpeningCompanyComponent implements OnInit {
  form!: FormGroup;
  registro!: any;
  estado!: any;

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private service: ServiceService,
    private formBuilder: FormBuilder,
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.createForm();
    this.getRegistro();
    this.getEstado();
  }

  open() {
    this.modalService.open(ModalComponent);
  }

  createForm() {
    this.form = this.formBuilder.group({
      ds_responsavel: new FormControl('', Validators.required),
      nu_cpf: new FormControl('', [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(11),
        Validators.pattern('[0-9]{3}.?[0-9]{3}.?[0-9]{3}.-?[0-9]{2}'),
      ]),
      date_nascimento: new FormControl(''),
      ds_nome_fantasia: new FormControl('', Validators.required),
      co_entidade_registro: new FormControl('', Validators.required),
      co_cep: new FormControl(''),
      ds_logradouro: new FormControl(''),
      ds_bairro: new FormControl(''),
      ds_complemento: new FormControl(''),
      ds_municipio: new FormControl('', Validators.required),
      co_uf: new FormControl('', Validators.required),
    });
  }

  getRegistro(): void {
    this.service.getRegistro().subscribe({
      next: (data) => {
        this.registro = data;
      },
    });
  }

  getEstado(): void {
    this.service.getEstado().subscribe({
      next: (data) => {
        this.estado = data;
      },
    });
  }

  onSubmit(): void {
    const formValue = this.form.getRawValue();
    const factoryData = {
      solicitante: {
        ds_responsavel: formValue.ds_responsavel,
        nu_cpf: formValue.nu_cpf,
        date_nascimento: formValue.date_nascimento,
      },
      empresa: {
        ds_nome_fantasia: formValue.ds_nome_fantasia,
        co_entidade_registro: formValue.co_entidade_registro,
        endereco: {
          co_cep: formValue.co_cep,
          ds_logradouro: formValue.ds_logradouro,
          ds_complemento: formValue.ds_complemento,
          ds_bairro: formValue.ds_bairro,
          ds_municipio: formValue.ds_municipio,
          co_uf: formValue.co_uf,
        },
      },
    };
    this.service.addCompany(factoryData).subscribe({
      next: (data) => {
        this.form.reset();
        this.open();
      },
    });
  }
}
