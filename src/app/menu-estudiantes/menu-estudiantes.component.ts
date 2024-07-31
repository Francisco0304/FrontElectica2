import { Component } from '@angular/core';
import {EstudianteService} from "../services/estudiante-service";
import {Router} from "@angular/router";
import {Estudiante} from "../estudiante";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-menu-estudiantes',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './menu-estudiantes.component.html',
  styleUrl: './menu-estudiantes.component.css'
})
export class MenuEstudiantesComponent {
  id: number = 0;
  nombre: string = '';
  identificacion: string = '';
  practicaId: number = 0; // ID  a seleccionar

  constructor(private estudianteService: EstudianteService, private router: Router) { }

  crearEstudiante() {
    let estudiante = new Estudiante(this.id, this.nombre, this.identificacion);
    console.log(estudiante);

    this.estudianteService.saveEstudiante(estudiante, this.practicaId).subscribe(
      res => {
        alert('Registro exitoso');
        this.router.navigateByUrl('/menu-inicio');
      },
      error => {
        console.error('Error al registrar práctica', error);
        alert('Ocurrió un error al registrar la práctica');
      }
    );
  }
}
