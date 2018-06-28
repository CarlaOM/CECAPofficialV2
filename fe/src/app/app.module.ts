import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import{ routing, appRoutingProviders } from './app.routing';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';

//modules
//import { AlertsModule } from 'angular-alert-module';
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
import { AlertComponent } from './events/alert/alert.component';


//Services
import { UserService} from './services/user.service';
import { SearchPipe } from './event/filtro/filtropersona.pipe';
import { FilterPipe } from "./event/persona/filter.pipe";
import { SucursalService } from './services/sucursal.service'


import {HttpClientModule} from '@angular/common/http';
import { AddProgramComponent } from './events/addProgram/addProgram.component';
import { AddEventComponent } from './events/addEvent/addEvent.component';
import { AddPersonComponent } from './event/persona/addPerson/addPerson.component';
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
import { AddCorrelativeComponent } from './correlative/add-correlative/add-correlative.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { AddSucursalComponent } from './sucursal/addSucursal/addsucursal.component';
import { EditComponent } from './event/persona/edit/edit.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

import { ProgramaComponent } from './programa/programa.component';
import { EditProgramaComponent } from './programa/edit-programa/edit-programa.component';
import { AddProgramaComponent } from './programa/add-programa/add-programa.component';
import { ModuloComponent } from './modulo/modulo.component';
import { EditModuloComponent } from './modulo/edit-modulo/edit-modulo.component';
import { AddModuloComponent } from './modulo/add-modulo/add-modulo.component';

import { DetalleCajaComponent } from './sucursal/detalle-caja/detalle-caja.component';
import { DetallePersonalComponent } from './sucursal/detalle-personal/detalle-personal.component';

import { InfoEjecutivoComponent } from './ejecutivo/info-ejecutivo/info-ejecutivo.component';
import { IngresoComponent } from './caja/ingreso/ingreso.component';
import { EgresoComponent } from './caja/egreso/egreso.component';

import { facilitadorComponent } from './facilitador/facilitador.component';
import { VistaCajaComponent } from './caja/vista-caja/vista-caja.component';
import { AddFacilitadorComponent } from './facilitador/add-facilitador/add-facilitador.component';
import { EditFacilitadorComponent } from './facilitador/edit-facilitador/edit-facilitador.component';
import { ProfilePersonComponent } from './event/profile-person/profile-person.component';
import { PendingCashComponent } from './pending-cash/pending-cash.component';
import { ControlAsistanceComponent } from './event/control-asistance/control-asistance.component';
import { InfoPendingCashComponent } from './pending-cash/info-pending-cash/info-pending-cash.component';
import { ConfirmCloseCashComponent } from './caja/confirm-close-cash/confirm-close-cash.component';
import { ConfirmPendingCashComponent } from './pending-cash/confirm-pending-cash/confirm-pending-cash.component';
import { OfficesCashComponent } from './offices-cash/offices-cash.component';
import { AsistenciaComponent } from './event/asistencia/asistencia.component';
import { InscriptionComponent } from './event/inscription/inscription.component';
import { DetailsComponent } from './event/profile-person/details/details.component';
import { ImportFromExcelComponent } from './import-from-excel/import-from-excel.component';
import { ListRequirementsComponent } from './list-requirements/list-requirements.component';
import { ListInscriptionsComponent } from './list-inscriptions/list-inscriptions.component';
import { AddFinalWorkComponent } from './event/profile-person/add-final-work/add-final-work.component';
import { AccountsReceivableComponent } from './accounts-receivable/accounts-receivable.component';
import { AccountsModularsComponent } from './accounts-modulars/accounts-modulars.component';
import { ControlPagoComponent } from './event/control-pago/control-pago.component';
import { AddReviewComponent } from './event/profile-person/add-review/add-review.component';
import { SendToPrincipalComponent } from './pending-cash/send-to-principal/send-to-principal.component';
import { PrincipalCashComponent } from './principal-cash/principal-cash.component';
import { PrintCertificateComponent } from './event/profile-person/print-certificate/print-certificate.component';
import { AlertCreateComponent } from './programa/alert-create/alert-create.component';
import { ReporteEventosComponent } from './reporte-eventos/reporte-eventos.component';
import { InscriptionWorkshopComponent } from './event/inscription-workshop/inscription-workshop.component';
import { NivelacionComponent } from './event/nivelacion/nivelacion.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { PrintBatchCertificatesComponent } from './event/print-batch-certificates/print-batch-certificates.component';
import { ListaPesonsNivelacionComponent } from './lista-pesons-nivelacion/lista-pesons-nivelacion.component';

import { AuthGuard } from "./auth.guard";
import { RouterModule } from '@angular/router';
import { PermisosVistaComponent } from './permisos-vista/permisos-vista.component';
import { JwtInterceptor } from "./jwt.interceptor";


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
    DetalleCajaComponent,
    DetallePersonalComponent,

    InfoEjecutivoComponent,

    IngresoComponent,
    EgresoComponent,

    ProgramaComponent,
    EditProgramaComponent,
    AddProgramaComponent,
    ModuloComponent,
    EditModuloComponent,
    AddModuloComponent,

    DetalleCajaComponent,
    DetallePersonalComponent,
    InfoEjecutivoComponent,
    VistaCajaComponent,
    IngresoComponent,
    facilitadorComponent,
    AddFacilitadorComponent,
    AddCorrelativeComponent,
    EditFacilitadorComponent,
    ProfilePersonComponent,
    AlertComponent,
    PendingCashComponent,
    ControlAsistanceComponent,
    InfoPendingCashComponent,
    ConfirmCloseCashComponent,
    ConfirmPendingCashComponent,
    OfficesCashComponent,
    AsistenciaComponent,
    InscriptionComponent,
    ControlPagoComponent,
    DetailsComponent,
    ImportFromExcelComponent,
    ListRequirementsComponent,
    ListInscriptionsComponent,
    AddFinalWorkComponent,
    AccountsReceivableComponent,
    AccountsModularsComponent,
    AddReviewComponent,
    SendToPrincipalComponent,
    PrincipalCashComponent,
    PrintCertificateComponent,
    AlertCreateComponent,
    ReporteEventosComponent,
    InscriptionWorkshopComponent,
    NivelacionComponent,
    WorkshopComponent,
    PrintBatchCertificatesComponent,
    ListaPesonsNivelacionComponent,
    PermisosVistaComponent,
  ],
  imports: [
    BrowserModule,
    AsyncLocalStorageModule,
    routing,//aniadir routing
    HttpClientModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    // Specify this module as an import
    //AlertsModule.forRoot()
    RouterModule.forRoot([
      {
        path:'home',
        component:HomeComponent,
        canActivate:[AuthGuard]
      }
    ])
    
  ],
  providers: [
    appRoutingProviders,
    UserService,
    FilterPipe,
    SucursalService,
    AuthGuard,
    UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
  ],//aniadir appRo..
  bootstrap: [AppComponent]
})
export class AppModule { }