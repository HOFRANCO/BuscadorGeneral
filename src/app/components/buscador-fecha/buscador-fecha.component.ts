import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RepositorioService } from 'src/app/services/repositorio/repositorio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador-fecha',
  templateUrl: './buscador-fecha.component.html',
  styleUrls: ['./buscador-fecha.component.css']
})
export class BuscadorFechaComponent implements OnInit {

  date = new Date();
  anio = '2020';
  mes = '03';

  constructor(private router: Router) {
    this.anio = this.date.getFullYear().toString();
    this.mes = this.setMonth(this.date.getMonth() + 1);
  }

  ngOnInit(): void {
  }

  filtrarFecha(form: NgForm) {

    if (this.anio !== undefined && this.mes !== undefined) {
      this.router.navigate(['/comiteF', this.anio + '-' + this.mes]);

    } else if (this.anio !== undefined) {
      this.router.navigate(['/comiteF', this.anio]);

    } else if (this.mes !== undefined) {
      this.router.navigate(['/comiteF', this.mes]);

    } else {
      return;
    }

  }

  setMonth(month: number): string {
    if (month < 10) { return '0' + month; }
    else { return month.toString(); }
  }

}
