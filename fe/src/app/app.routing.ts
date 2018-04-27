import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import components
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/event.component';
import { EditPersonComponent } from './event/editPerson/editPerson.component';
import { ReportsComponent } from './graphicReports/reports/reports.component';
import { ReportTrimestralComponent} from './graphicReports/report-trimestral/report-trimestral.component';
import { ReportEventComponent } from './graphicReports/report-event/report-event.component';
import { CarteraComponent } from "./cartera/cartera.component";
import { InfoCarteraComponent } from "./cartera/info-cartera/info-cartera.component";
import { EditCarteraComponent } from "./cartera/edit-cartera/edit-cartera.component";
import { EjecutivoComponent } from "./ejecutivo/ejecutivo.component";
import { EditEjecutivoComponent } from './ejecutivo/edit-ejecutivo/edit-ejecutivo.component';
import { PersonaComponent } from "./event/persona/persona.component";
import { EditComponent } from "./event/persona/edit/edit.component";
import { AddSucursalComponent } from './sucursal/addSucursal/addsucursal.component';
import { HeroFormComponent } from "./hero-form/hero-form.component";
import { DetalleCajaComponent } from './sucursal/detalle-caja/detalle-caja.component';
import { DetallePersonalComponent } from './sucursal/detalle-personal/detalle-personal.component';



const appRoutes: Routes = [
   { path: '', component: HomeComponent },//ruta basica
   { path: 'login', component: LoginComponent },
   {
      path: 'home', component: HomeComponent,
      children: [
         { path: 'home', redirectTo: 'home', pathMatch: 'full' },
         { path: 'events', component: EventsComponent },
         { path: 'event/:id', component: EventComponent },
         { path: 'editPerson/:id', component: EditPersonComponent },
         { path: 'reports', component: ReportsComponent },
         { path: 'trimestral', component: ReportTrimestralComponent },
         { path: 'reportEvent/:id', component: ReportEventComponent },
         { path: 'persons', component: PersonaComponent},
         { path: 'persons/edit/:id', component: EditComponent},
         { path: 'cartera', component:CarteraComponent},
         { path: 'cartera/:id',component:InfoCarteraComponent},
         { path: 'cartera/edit/:name',component:EditCarteraComponent},
         { path: 'ejecutivo', component:EjecutivoComponent},
         { path: 'ejecutivo/edit/:active', component:EditEjecutivoComponent},
         { path: 'sucursal/add', component: AddSucursalComponent},
         { path: 'sucursal/detalleCaja', component: DetalleCajaComponent},
         { path: 'sucursal/personal', component: DetallePersonalComponent},
         { path: 'formulariobase',component:HeroFormComponent}

      ]

   },

   //{path: '', component: LoginFormComponent}
   { path: '**', component: HomeComponent }//ruta redir

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);