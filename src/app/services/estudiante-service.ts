import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Estudiante} from "../estudiante";
import {Practica} from "../practica";

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private baseUrl = 'http://localhost:8080/api/estudiantes';

  constructor(private http: HttpClient) { }

  saveEstudiante(estudiante: Estudiante, idPractica: number): Observable<any> {
    const url = `${this.baseUrl}/${idPractica}`;
    return this.http.post(url, estudiante); // Enviar el objeto Practica en el cuerpo de la solicitud
  }
}
