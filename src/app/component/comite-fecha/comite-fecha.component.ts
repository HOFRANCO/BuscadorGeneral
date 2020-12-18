import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositorioService } from 'src/app/services/repositorio/repositorio.service';

@Component({
  selector: 'app-fecha-comite',
  templateUrl: './comite-fecha.component.html',
  styleUrls: ['./comite-fecha.component.css']
})
export class ComiteFechaComponent implements OnInit {

  comites: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private comiteService: RepositorioService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.comites = this.comiteService.buscarfecha(params['fecha']);
    });
  }

}
