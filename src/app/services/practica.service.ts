import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Practica} from "../practica";

@Injectable({
  providedIn: 'root'
})
export class PracticaService {

  private baseUrl = 'http://localhost:8080/practicas';

  constructor(private http: HttpClient) { }

  getPracticasByDocente(idDocente: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${idDocente}`);
  }


  getEstudiantesByPractica(practicaId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/estudiantes/${practicaId}`);
  }

  getResumenPracticas(fechaInicio: string, fechaFin: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/periodo?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);
  }

  savePractica(practica: Practica, idDocente: number): Observable<any> {
    const url = `${this.baseUrl}/${idDocente}`; // Construir la URL con el ID del docente
    return this.http.post(url, practica); // Enviar el objeto Practica en el cuerpo de la solicitud
  }
}
