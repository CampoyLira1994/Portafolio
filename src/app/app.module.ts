import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ExperienciaComponent } from './experienciaYCursos/experiencia.component';
import { PortadaComponent } from './portada/portada.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PortafolioWebComponent } from './portafolio-web/portafolio-web.component';
// import { CvComponent } from './cv/cv.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ExperienciaComponent,
    PortadaComponent,
    ContactoComponent,
    PortafolioWebComponent
    // CvComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
