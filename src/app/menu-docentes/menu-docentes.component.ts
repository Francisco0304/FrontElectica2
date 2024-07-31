import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {DocenteService} from "../services/docente-service";
import {Router} from "@angular/router";
import {Docente} from "../docente";

@Component({
  selector: 'app-menu-docentes',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './menu-docentes.component.html',
  styleUrl: './menu-docentes.component.css'
})
export class MenuDocentesComponent {

  id: number = 0;
  nombre: string = '';
  identificacion: string = '';

  constructor(private docenteService: DocenteService, private router: Router) { }

  crearDocente() {
    let docente = new Docente(this.id, this.nombre, this.identificacion);
    console.log(docente);

    this.docenteService.saveDocente(docente).subscribe(
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
