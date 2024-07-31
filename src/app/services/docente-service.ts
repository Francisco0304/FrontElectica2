import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Practica} from "../practica";
import {Docente} from "../docente";

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  private baseUrl = 'http://localhost:8080/api/docentes';

  constructor(private http: HttpClient) { }

  saveDocente(docente: Docente): Observable<any> {
    return this.http.post<Docente>(this.baseUrl, docente); // Enviar el objeto Practica en el cuerpo de la solicitud
  }
}
