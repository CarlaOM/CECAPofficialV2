import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import{ routing, appRoutingProviders } from './app.routing';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { AppheaderComponent } from './home/plantilla/appheader/appheader.component';
import { AppfooterComponent } from './home/plantilla/appfooter/appfooter.component';
import { AppmenuComponent } from './home/plantilla/appmenu/appmenu.component';
import { AppsettingsComponent } from './home/plantilla/appsettings/appsettings.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/event.component';
import { PersonaComponent } from "./event/persona/persona.component"


//Services
import { UserService} from './services/user.service';
import { SearchPipe } from './event/filtro/filtropersona.pipe';
import { FilterPipe } from "./event/persona/filter.pipe";


import {HttpClientModule} from '@angular/common/http';
import { AddProgramComponent } from './events/addProgram/addProgram.component';
import { AddEventComponent } from './events/addEvent/addEvent.component';
import { AddPersonComponent } from './event/addPerson/addPerson.component';
import { EditPersonComponent } from './event/editPerson/editPerson.component';
import { AddEjecutivoComponent } from './ejecutivo/add-ejecutivo/add-ejecutivo.component';

//Graphics
import { ChartsModule } from 'ng2-charts';
import { ReportsComponent } from './graphicReports/reports/reports.component';
import { BarraComponent } from './graphicReports/reports/barra/barra.component';
import { LineaComponent } from './graphicReports/reports/linea/linea.component';
import { TortaComponent } from './graphicReports/reports/torta/torta.component';
import { ReportTrimestralComponent } from './graphicReports/report-trimestral/report-trimestral.component';
import { BarComponent } from './graphicReports/report-trimestral/bar/bar.component';
import { ReportEventComponent } from './graphicReports/report-event/report-event.component';
import { BarEventComponent } from './graphicReports/report-event/bar-event/bar-event.component';

import { AddCarteraComponent } from './cartera/add-cartera/add-cartera.component';
import { CarteraComponent } from './cartera/cartera.component';
import { InfoCarteraComponent } from './cartera/info-cartera/info-cartera.component';
import { EditCarteraComponent } from './cartera/edit-cartera/edit-cartera.component';

import { EjecutivoComponent } from './ejecutivo/ejecutivo.component';
import { EditEjecutivoComponent } from './ejecutivo/edit-ejecutivo/edit-ejecutivo.component';

import { SucursalComponent } from './sucursal/sucursal.component';
import { AddSucursalComponent } from './sucursal/addSucursal/addsucursal.component';
import { EditComponent } from './event/persona/edit/edit.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ProgramaComponent } from './programa/programa.component';
import { ModuloComponent } from './programa/modulo/modulo.component';
import { EditProgramaComponent } from './programa/edit-programa/edit-programa.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingsComponent,
    EventsComponent,
    EventComponent,
    AddProgramComponent,
    AddEventComponent,
    AddPersonComponent,
    PersonaComponent,
    EditPersonComponent,
    
    ReportsComponent,
    ReportTrimestralComponent,
    ReportEventComponent,
    LineaComponent,
    BarraComponent,
    TortaComponent,
    BarComponent,
    BarEventComponent,
    
    SearchPipe,
    AddEjecutivoComponent,
    AddCarteraComponent,
    CarteraComponent,
    InfoCarteraComponent,
    EditCarteraComponent,
    EjecutivoComponent,
    EditEjecutivoComponent,
    EditComponent,
    FilterPipe,
    SucursalComponent,
    AddSucursalComponent,
    HeroFormComponent,
    
    ProgramaComponent,
    ModuloComponent,
    EditProgramaComponent,
  ],
  imports: [
    BrowserModule,
    AsyncLocalStorageModule,
    routing,//aniadir routing
    HttpClientModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    
  ],
  providers: [
    appRoutingProviders,
    UserService,
    FilterPipe,
  ],//aniadir appRo..
  bootstrap: [AppComponent]
})
export class AppModule { }