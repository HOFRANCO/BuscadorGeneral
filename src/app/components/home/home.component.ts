import { Component, OnInit } from '@angular/core';
import { RepositorioService } from 'src/app/services/repositorio/repositorio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  comites: any[] = [];

  constructor(private repoService: RepositorioService) {
    this.repoService.getComites()
      .subscribe((data: any) => this.comites = data);
  }

  ngOnInit(): void {
  }

  setReducedData(data: any[]) {
    let tempData: any[] = [];
    for (let i = 0; i < 3; i++) {
      tempData.push(data[i]);
    }
    return tempData;
  }
}
