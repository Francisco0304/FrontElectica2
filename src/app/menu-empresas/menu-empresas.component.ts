import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {EmpresaService} from "../services/empresa-service";
import {Router} from "@angular/router";
import {Empresa} from "../empresa";

@Component({
  selector: 'app-menu-empresas',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './menu-empresas.component.html',
  styleUrl: './menu-empresas.component.css'
})
export class MenuEmpresasComponent {
  id: number = 0;
  nombre: string = '';
  identificacion: string = '';
  practicaId: number = 0; // ID del docente a seleccionar

  constructor(private empresaService: EmpresaService, private router: Router) { }

  crearEmpresa() {
    let empresa = new Empresa(this.id, this.nombre, this.identificacion);
    console.log(empresa);

    this.empresaService.saveEmpresa(empresa, this.practicaId).subscribe(
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
