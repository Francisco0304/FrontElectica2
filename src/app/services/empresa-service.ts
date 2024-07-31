import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from "../empresa";

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private baseUrl = 'http://localhost:8080/api/empresas';

  constructor(private http: HttpClient) { }

  saveEmpresa(empresa: Empresa, idPractica: number): Observable<any> {
    const url = `${this.baseUrl}/${idPractica}`;
    return this.http.post(url, empresa); // Enviar el objeto Practica en el cuerpo de la solicitud
  }
}
