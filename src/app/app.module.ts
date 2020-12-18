import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ComiteComponent } from './components/comite/comite.component';

// SERVICIOS
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { RepositorioService } from './services/repositorio/repositorio.service';

// RUTAS
import { APP_ROUTING } from './routes';
import { HomeComponent } from './components/home/home.component';
import { BuscadorFechaComponent } from './components/buscador-fecha/buscador-fecha.component';

import { FormsModule } from '@angular/forms';
import { ComiteFechaComponent } from './component/comite-fecha/comite-fecha.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    ComiteComponent,
    HomeComponent,
    BuscadorFechaComponent,
    ComiteFechaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [RepositorioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
