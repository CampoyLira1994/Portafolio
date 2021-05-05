import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExperienciaComponent } from './experienciaYCursos/experiencia.component';
import { PortadaComponent } from './portada/portada.component';
import { PortafolioWebComponent } from './portafolio-web/portafolio-web.component';
import { CvComponent } from './cv/cv.component';

const routes: Routes = [
  {path: '',component:PortadaComponent },
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'portafolio', component: PortafolioWebComponent},
  {path: 'cv', component: CvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


