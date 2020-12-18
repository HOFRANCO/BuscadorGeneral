import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RepositorioService {

  comites: any[] = [];

  url = 'https://script.google.com/a/davivienda.com/macros/s/AKfycbwBCXo3xd3gNZGzzJcFnSih-u3_PbQLw40KdeZ4KgKUgnMj_kQ/exec';

  constructor(private http: HttpClient, private router: Router) {
    this.getComitesDos();
  }

  getComites() {
    return this.http.jsonp(this.url, 'callback');
  }


  getComitesDos() {
    return this.http.jsonp(this.url, 'callback')
      .subscribe(
        (data: any[]) => this.comites = data,
        (error) => console.log(error)
      );
  }


  buscarComite(termino: string) {
    let comitesArr: any[] = [];

    if (termino.length === 0) {
      this.router.navigateByUrl('/home');
    }

    termino = termino.toLocaleLowerCase();

    for (let comite of this.comites) {

      let tema = comite.tema.toLocaleLowerCase();
      let aprobados = comite.proyectosAprobados.toLocaleLowerCase();

      if (tema.indexOf(termino) >= 0) {
        comitesArr.push(comite);
      }

      else if (aprobados.indexOf(termino) >= 0) {
        comitesArr.push(comite);
      }

    }

    return comitesArr;

  }


  buscarfecha(termino: string) {

    let anio, mes;

    if (termino.length == 7) {
      anio = termino.substring(0, 4);
      mes = termino.substring(5, 7);

    } else if (termino.length == 4) {
      anio = termino;
      mes = undefined;

    } else if (termino.length == 2) {
      anio = undefined;
      mes = termino;
    }


    let comitesArr: any[] = [];

    if (anio !== undefined && mes !== undefined) {

      for (let comite of this.comites) {

        let fecha = comite.fecha.substring(0, 4)
        let fechaMes = comite.fecha.substring(5, 7);

        if (fecha.indexOf(anio) >= 0) {
          if (fechaMes.indexOf(mes) >= 0) {
            comitesArr.push(comite);
          }
        }
      }

      return comitesArr;

    } else if (anio !== undefined) {

      for (let comite of this.comites) {

        let fecha = comite.fecha.substring(0, 4);

        if (fecha.indexOf(anio) >= 0) {
          comitesArr.push(comite);
        }
      }

      return comitesArr;

    } else if (mes !== undefined) {

      for (let comite of this.comites) {

        let fecha = comite.fecha.substring(5, 7);

        if (fecha.indexOf(mes) >= 0) {
          comitesArr.push(comite);
        }
      }

      return comitesArr;
    }
  }

}
