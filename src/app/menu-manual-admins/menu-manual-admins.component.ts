import { Component } from '@angular/core';
import { PracticaService } from '../services/practica.service';
import { DatePipe } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common'; // Importa CommonModule aquí

@Component({
  selector: 'app-menu-manual-admins',
  templateUrl: './menu-manual-admins.component.html',
  standalone: true,
  imports: [
    CommonModule, // Agrega CommonModule aquí
    FormsModule,
    DatePipe
  ],
  styleUrls: ['./menu-manual-admins.component.css']
})
export class MenuManualAdminsComponent {
  docenteId: number = 0;
  practicaId: number = 0;
  fechaInicio: string = '';
  fechaFin: string = '';

  practicasDocente: any[] = [];
  estudiantesPractica: any[] = [];
  resumenPracticas: any[] = [];
  mensaje: string = '';
  tableData: any;

  constructor(private practicaService: PracticaService) { }

  ngOnInit(): void { }

  buscarPracticasDocente() {
    this.practicaService.getPracticasByDocente(this.docenteId).subscribe(
      data => {
        this.practicasDocente = data;
        this.mensaje = 'Búsqueda exitosa';
        console.log(data);
      },
      error => {
        console.error(error);
        this.mensaje = 'Error al buscar prácticas del docente';
      }
    );
  }

  buscarEstudiantesPractica() {
    this.practicaService.getEstudiantesByPractica(this.practicaId).subscribe(
      data => {
        this.estudiantesPractica = data;
        this.mensaje = 'Búsqueda exitosa';
        console.log(data);
      },
      error => {
        console.error(error);
        this.mensaje = 'Error al buscar estudiantes por ID de práctica';
      }
    );
  }

  buscarResumenPracticas() {
    this.practicaService.getResumenPracticas(this.fechaInicio, this.fechaFin).subscribe(
      data => {
        this.resumenPracticas = data;
        this.mensaje = 'Búsqueda exitosa';
      },
      error => {
        console.error(error);
        this.mensaje = 'Error al buscar resumen de prácticas';
      }
    );
  }
}
