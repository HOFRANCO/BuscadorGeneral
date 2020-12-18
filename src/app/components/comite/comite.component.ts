import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositorioService } from 'src/app/services/repositorio/repositorio.service';

@Component({
  selector: 'app-comite',
  templateUrl: './comite.component.html',
  styleUrls: ['./comite.component.css']
})
export class ComiteComponent implements OnInit {

  comites: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private comiteService: RepositorioService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.comites = this.comiteService.buscarComite(params['termino']);
    });
  }

}
