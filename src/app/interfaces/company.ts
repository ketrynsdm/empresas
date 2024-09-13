export interface Company {
    solicitante: {
      ds_responsavel: string,
      nu_cpf: string,
      date_nascimento: string,
    },
    empresa: {
      ds_nome_fantasia: string,
      co_entidade_registro: number,
      endereco: {
        co_cep: number,
        ds_logradouro: string,
        ds_complemento: string,
        ds_bairro: string,
        ds_municipio: string,
        co_uf: string
      }
    },
    id?: number
}