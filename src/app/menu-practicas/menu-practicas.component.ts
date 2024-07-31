import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PracticaService } from '../services/practica.service';
import { Practica } from '../practica';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-practicas',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './menu-practicas.component.html',
  styleUrls: ['./menu-practicas.component.css']
})
export class MenuPracticasComponent {
  id: number = 0;
  destino: string = '';
  fechaSalida: Date = new Date();
  fechaRegreso: Date = new Date();
  docenteId: number = 0; // ID del docente a seleccionar

  constructor(private practicaService: PracticaService, private router: Router) { }

  crearPractica() {
    let practica = new Practica(this.id, this.destino, this.fechaSalida, this.fechaRegreso);
    console.log(practica);

    this.practicaService.savePractica(practica, this.docenteId).subscribe(
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
