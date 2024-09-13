import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../interfaces/company';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private urlApi: string = 'http://localhost:3000';
  private urlApiEstado: string =
    'https://servicodados.ibge.gov.br/api/v1/localidades/estados/';

  constructor(private http: HttpClient) {}

  get(): Observable<Company[]> {
    const url = `${this.urlApi}/empresas`;
    return this.http.get<Company[]>(url);
  }

  getRegistro(): Observable<Company[]> {
    const url = `${this.urlApi}/entidade-registro`;
    return this.http.get<Company[]>(url);
  }

  getEstado(): Observable<Company[]> {
    const url = `${this.urlApiEstado}`;
    return this.http.get<Company[]>(url);
  }

  getCompanyId(id: number): Observable<Company> {
    const url = `${this.urlApi}/empresas/${id}`;
    return this.http.get<Company>(url);
  }

  addCompany(data: Company): Observable<Company> {
    const url = `${this.urlApi}/empresas`;
    return this.http.post<Company>(url, data);
  }

  editCompany(id: number, body: Company): Observable<Company> {
    const url = `${this.urlApi}/empresas/${id}`;
    return this.http.put<Company>(url, body);
  }
}
