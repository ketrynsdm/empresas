import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Company } from 'src/app/interfaces/company';
import { ServiceService } from 'src/app/services/service.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss'],
})
export class EditCompanyComponent implements OnInit {
  formById!: FormGroup;
  registro!: any;
  estado!: any;
  id!: number;

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private service: ServiceService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.getRegistro();
    this.getEstado();
    this.createForm();
    this.getByID();
  }

  getByID() {
    this.route.queryParamMap.subscribe((params) => {
      if (params.get('id')) {
        this.service.getCompanyId(Number(params.get('id'))).subscribe((res) => {
          this.formById.patchValue({
            ds_responsavel: res.solicitante.ds_responsavel,
            nu_cpf: res.solicitante.nu_cpf,
            date_nascimento: res.solicitante.date_nascimento,
            ds_nome_fantasia: res.empresa.ds_nome_fantasia,
            co_entidade_registro: res.empresa.co_entidade_registro,
            co_cep: res.empresa.endereco.co_cep,
            ds_logradouro: res.empresa.endereco.ds_logradouro,
            ds_bairro: res.empresa.endereco.ds_bairro,
            ds_complemento: res.empresa.endereco.ds_complemento,
            ds_municipio: res.empresa.endereco.ds_municipio,
            co_uf: res.empresa.endereco.co_uf,
          });
        });
      }
    });
  }

  open() {
    this.modalService.open(ModalComponent);
  }

  createForm(): void {
    this.formById = this.formBuilder.group({
      ds_responsavel: new FormControl('', Validators.required),
      nu_cpf: new FormControl('', [Validators.required]),
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

  keyRegistry(key: number) {
    this.formById.controls['co_entidade_registro'].value === key;
  }

  onSubmit(): void {
    const formValue = this.formById.getRawValue();
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
    this.route.queryParamMap.subscribe((params) => {
      if (params.get('id')) {
        this.service
          .editCompany(Number(params.get('id')), factoryData)
          .subscribe((data) => {
            this.service.get();
            this.formById.reset();
            this.router.navigate(['/home']);
          });
      }
    });
  }
}
