webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_userService) {
        this._userService = _userService;
        this.title = 'CECAP CONSULTING';
    }
    AppComponent.prototype.ngOnInit = function () {
        this._userService.initApp();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_async_local_storage__ = __webpack_require__("./node_modules/angular-async-local-storage/angular-async-local-storage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_plantilla_appheader_appheader_component__ = __webpack_require__("./src/app/home/plantilla/appheader/appheader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_plantilla_appfooter_appfooter_component__ = __webpack_require__("./src/app/home/plantilla/appfooter/appfooter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_plantilla_appmenu_appmenu_component__ = __webpack_require__("./src/app/home/plantilla/appmenu/appmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_plantilla_appsettings_appsettings_component__ = __webpack_require__("./src/app/home/plantilla/appsettings/appsettings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__events_events_component__ = __webpack_require__("./src/app/events/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__event_event_component__ = __webpack_require__("./src/app/event/event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__event_persona_persona_component__ = __webpack_require__("./src/app/event/persona/persona.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__events_alert_alert_component__ = __webpack_require__("./src/app/events/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__event_filtro_filtropersona_pipe__ = __webpack_require__("./src/app/event/filtro/filtropersona.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__event_persona_filter_pipe__ = __webpack_require__("./src/app/event/persona/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_sucursal_service__ = __webpack_require__("./src/app/services/sucursal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__events_addProgram_addProgram_component__ = __webpack_require__("./src/app/events/addProgram/addProgram.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__events_addEvent_addEvent_component__ = __webpack_require__("./src/app/events/addEvent/addEvent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__event_persona_addPerson_addPerson_component__ = __webpack_require__("./src/app/event/persona/addPerson/addPerson.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ejecutivo_add_ejecutivo_add_ejecutivo_component__ = __webpack_require__("./src/app/ejecutivo/add-ejecutivo/add-ejecutivo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__graphicReports_reports_reports_component__ = __webpack_require__("./src/app/graphicReports/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__graphicReports_reports_barra_barra_component__ = __webpack_require__("./src/app/graphicReports/reports/barra/barra.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__graphicReports_reports_linea_linea_component__ = __webpack_require__("./src/app/graphicReports/reports/linea/linea.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__graphicReports_reports_torta_torta_component__ = __webpack_require__("./src/app/graphicReports/reports/torta/torta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__graphicReports_report_trimestral_report_trimestral_component__ = __webpack_require__("./src/app/graphicReports/report-trimestral/report-trimestral.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__graphicReports_report_trimestral_bar_bar_component__ = __webpack_require__("./src/app/graphicReports/report-trimestral/bar/bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__graphicReports_report_event_report_event_component__ = __webpack_require__("./src/app/graphicReports/report-event/report-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__graphicReports_report_event_bar_event_bar_event_component__ = __webpack_require__("./src/app/graphicReports/report-event/bar-event/bar-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__cartera_add_cartera_add_cartera_component__ = __webpack_require__("./src/app/cartera/add-cartera/add-cartera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__cartera_cartera_component__ = __webpack_require__("./src/app/cartera/cartera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__cartera_info_cartera_info_cartera_component__ = __webpack_require__("./src/app/cartera/info-cartera/info-cartera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__cartera_edit_cartera_edit_cartera_component__ = __webpack_require__("./src/app/cartera/edit-cartera/edit-cartera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ejecutivo_ejecutivo_component__ = __webpack_require__("./src/app/ejecutivo/ejecutivo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ejecutivo_edit_ejecutivo_edit_ejecutivo_component__ = __webpack_require__("./src/app/ejecutivo/edit-ejecutivo/edit-ejecutivo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__correlative_add_correlative_add_correlative_component__ = __webpack_require__("./src/app/correlative/add-correlative/add-correlative.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__sucursal_sucursal_component__ = __webpack_require__("./src/app/sucursal/sucursal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__sucursal_addSucursal_addsucursal_component__ = __webpack_require__("./src/app/sucursal/addSucursal/addsucursal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__event_persona_edit_edit_component__ = __webpack_require__("./src/app/event/persona/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__programa_programa_component__ = __webpack_require__("./src/app/programa/programa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__programa_edit_programa_edit_programa_component__ = __webpack_require__("./src/app/programa/edit-programa/edit-programa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__programa_add_programa_add_programa_component__ = __webpack_require__("./src/app/programa/add-programa/add-programa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__modulo_modulo_component__ = __webpack_require__("./src/app/modulo/modulo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__modulo_edit_modulo_edit_modulo_component__ = __webpack_require__("./src/app/modulo/edit-modulo/edit-modulo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__modulo_add_modulo_add_modulo_component__ = __webpack_require__("./src/app/modulo/add-modulo/add-modulo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ejecutivo_info_ejecutivo_info_ejecutivo_component__ = __webpack_require__("./src/app/ejecutivo/info-ejecutivo/info-ejecutivo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__facilitador_facilitador_component__ = __webpack_require__("./src/app/facilitador/facilitador.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__facilitador_add_facilitador_add_facilitador_component__ = __webpack_require__("./src/app/facilitador/add-facilitador/add-facilitador.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__facilitador_edit_facilitador_edit_facilitador_component__ = __webpack_require__("./src/app/facilitador/edit-facilitador/edit-facilitador.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__event_profile_person_profile_person_component__ = __webpack_require__("./src/app/event/profile-person/profile-person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__event_control_asistance_control_asistance_component__ = __webpack_require__("./src/app/event/control-asistance/control-asistance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__event_asistencia_asistencia_component__ = __webpack_require__("./src/app/event/asistencia/asistencia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__event_inscription_inscription_component__ = __webpack_require__("./src/app/event/inscription/inscription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__import_whats_numbers_import_whats_numbers_component__ = __webpack_require__("./src/app/import-whats-numbers/import-whats-numbers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__import_from_excel_import_from_excel_component__ = __webpack_require__("./src/app/import-from-excel/import-from-excel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__ejecutivo_persons_of_ejecutivo_persons_of_ejecutivo_component__ = __webpack_require__("./src/app/ejecutivo/persons-of-ejecutivo/persons-of-ejecutivo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__segmentation_segmentation_component__ = __webpack_require__("./src/app/segmentation/segmentation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__segmentation_list_person_program_user_list_person_program_user_component__ = __webpack_require__("./src/app/segmentation/list-person-program-user/list-person-program-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__events_persons_of_events_persons_of_events_component__ = __webpack_require__("./src/app/events/persons-of-events/persons-of-events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__event_persona_edit_persona_interes_edit_persona_interes_component__ = __webpack_require__("./src/app/event/persona/edit-persona-interes/edit-persona-interes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__event_profile_person_tracing_tracing_component__ = __webpack_require__("./src/app/event/profile-person/tracing/tracing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__event_persona_filtro_universidad_medio_filtro_universidad_medio_component__ = __webpack_require__("./src/app/event/persona/filtro-universidad-medio/filtro-universidad-medio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__cartera_dividir_cartera_dividir_cartera_component__ = __webpack_require__("./src/app/cartera/dividir-cartera/dividir-cartera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__reports_ejecutivos_reports_ejecutivos_component__ = __webpack_require__("./src/app/reports-ejecutivos/reports-ejecutivos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__reporte_events_reporte_events_component__ = __webpack_require__("./src/app/reporte-events/reporte-events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__listas_listas_component__ = __webpack_require__("./src/app/listas/listas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__events_add_carrera_add_carrera_component__ = __webpack_require__("./src/app/events/add-carrera/add-carrera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__login_contra_contra_component__ = __webpack_require__("./src/app/login/contra/contra.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { NgxPaginationModule } from 'ngx-pagination';
//modules
//import { AlertsModule } from 'angular-alert-module';
//components











//Services









//Graphics
// import { ChartsModule } from 'ng2-charts';















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_plantilla_appheader_appheader_component__["a" /* AppheaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_plantilla_appfooter_appfooter_component__["a" /* AppfooterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_plantilla_appmenu_appmenu_component__["a" /* AppmenuComponent */],
                __WEBPACK_IMPORTED_MODULE_12__home_plantilla_appsettings_appsettings_component__["a" /* AppsettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__events_events_component__["a" /* EventsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__event_event_component__["a" /* EventComponent */],
                __WEBPACK_IMPORTED_MODULE_22__events_addProgram_addProgram_component__["a" /* AddProgramComponent */],
                __WEBPACK_IMPORTED_MODULE_23__events_addEvent_addEvent_component__["a" /* AddEventComponent */],
                __WEBPACK_IMPORTED_MODULE_24__event_persona_addPerson_addPerson_component__["a" /* AddPersonComponent */],
                __WEBPACK_IMPORTED_MODULE_15__event_persona_persona_component__["a" /* PersonaComponent */],
                __WEBPACK_IMPORTED_MODULE_26__graphicReports_reports_reports_component__["a" /* ReportsComponent */],
                __WEBPACK_IMPORTED_MODULE_30__graphicReports_report_trimestral_report_trimestral_component__["a" /* ReportTrimestralComponent */],
                __WEBPACK_IMPORTED_MODULE_32__graphicReports_report_event_report_event_component__["a" /* ReportEventComponent */],
                __WEBPACK_IMPORTED_MODULE_28__graphicReports_reports_linea_linea_component__["a" /* LineaComponent */],
                __WEBPACK_IMPORTED_MODULE_27__graphicReports_reports_barra_barra_component__["a" /* BarraComponent */],
                __WEBPACK_IMPORTED_MODULE_29__graphicReports_reports_torta_torta_component__["a" /* TortaComponent */],
                __WEBPACK_IMPORTED_MODULE_31__graphicReports_report_trimestral_bar_bar_component__["a" /* BarComponent */],
                __WEBPACK_IMPORTED_MODULE_33__graphicReports_report_event_bar_event_bar_event_component__["a" /* BarEventComponent */],
                __WEBPACK_IMPORTED_MODULE_18__event_filtro_filtropersona_pipe__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_25__ejecutivo_add_ejecutivo_add_ejecutivo_component__["a" /* AddEjecutivoComponent */],
                __WEBPACK_IMPORTED_MODULE_34__cartera_add_cartera_add_cartera_component__["a" /* AddCarteraComponent */],
                __WEBPACK_IMPORTED_MODULE_35__cartera_cartera_component__["a" /* CarteraComponent */],
                __WEBPACK_IMPORTED_MODULE_36__cartera_info_cartera_info_cartera_component__["a" /* InfoCarteraComponent */],
                __WEBPACK_IMPORTED_MODULE_37__cartera_edit_cartera_edit_cartera_component__["a" /* EditCarteraComponent */],
                __WEBPACK_IMPORTED_MODULE_38__ejecutivo_ejecutivo_component__["a" /* EjecutivoComponent */],
                __WEBPACK_IMPORTED_MODULE_39__ejecutivo_edit_ejecutivo_edit_ejecutivo_component__["a" /* EditEjecutivoComponent */],
                __WEBPACK_IMPORTED_MODULE_43__event_persona_edit_edit_component__["a" /* EditComponent */],
                __WEBPACK_IMPORTED_MODULE_19__event_persona_filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_41__sucursal_sucursal_component__["a" /* SucursalComponent */],
                __WEBPACK_IMPORTED_MODULE_42__sucursal_addSucursal_addsucursal_component__["a" /* AddSucursalComponent */],
                __WEBPACK_IMPORTED_MODULE_50__ejecutivo_info_ejecutivo_info_ejecutivo_component__["a" /* InfoEjecutivoComponent */],
                __WEBPACK_IMPORTED_MODULE_44__programa_programa_component__["a" /* ProgramaComponent */],
                __WEBPACK_IMPORTED_MODULE_45__programa_edit_programa_edit_programa_component__["a" /* EditProgramaComponent */],
                __WEBPACK_IMPORTED_MODULE_46__programa_add_programa_add_programa_component__["a" /* AddProgramaComponent */],
                __WEBPACK_IMPORTED_MODULE_47__modulo_modulo_component__["a" /* ModuloComponent */],
                __WEBPACK_IMPORTED_MODULE_48__modulo_edit_modulo_edit_modulo_component__["a" /* EditModuloComponent */],
                __WEBPACK_IMPORTED_MODULE_49__modulo_add_modulo_add_modulo_component__["a" /* AddModuloComponent */],
                __WEBPACK_IMPORTED_MODULE_50__ejecutivo_info_ejecutivo_info_ejecutivo_component__["a" /* InfoEjecutivoComponent */],
                __WEBPACK_IMPORTED_MODULE_51__facilitador_facilitador_component__["a" /* facilitadorComponent */],
                __WEBPACK_IMPORTED_MODULE_52__facilitador_add_facilitador_add_facilitador_component__["a" /* AddFacilitadorComponent */],
                __WEBPACK_IMPORTED_MODULE_40__correlative_add_correlative_add_correlative_component__["a" /* AddCorrelativeComponent */],
                __WEBPACK_IMPORTED_MODULE_53__facilitador_edit_facilitador_edit_facilitador_component__["a" /* EditFacilitadorComponent */],
                __WEBPACK_IMPORTED_MODULE_54__event_profile_person_profile_person_component__["a" /* ProfilePersonComponent */],
                __WEBPACK_IMPORTED_MODULE_16__events_alert_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_55__event_control_asistance_control_asistance_component__["a" /* ControlAsistanceComponent */],
                __WEBPACK_IMPORTED_MODULE_56__event_asistencia_asistencia_component__["a" /* AsistenciaComponent */],
                __WEBPACK_IMPORTED_MODULE_57__event_inscription_inscription_component__["a" /* InscriptionComponent */],
                __WEBPACK_IMPORTED_MODULE_58__import_whats_numbers_import_whats_numbers_component__["a" /* ImportWhatsNumbersComponent */],
                __WEBPACK_IMPORTED_MODULE_59__import_from_excel_import_from_excel_component__["a" /* ImportFromExcelComponent */],
                __WEBPACK_IMPORTED_MODULE_60__ejecutivo_persons_of_ejecutivo_persons_of_ejecutivo_component__["a" /* PersonsOfEjecutivoComponent */],
                __WEBPACK_IMPORTED_MODULE_61__segmentation_segmentation_component__["a" /* SegmentationComponent */],
                __WEBPACK_IMPORTED_MODULE_62__segmentation_list_person_program_user_list_person_program_user_component__["a" /* ListPersonProgramUserComponent */],
                __WEBPACK_IMPORTED_MODULE_63__events_persons_of_events_persons_of_events_component__["a" /* PersonsOfEventsComponent */],
                __WEBPACK_IMPORTED_MODULE_64__event_persona_edit_persona_interes_edit_persona_interes_component__["a" /* EditPersonaInteresComponent */],
                __WEBPACK_IMPORTED_MODULE_65__event_profile_person_tracing_tracing_component__["a" /* TracingComponent */],
                __WEBPACK_IMPORTED_MODULE_66__event_persona_filtro_universidad_medio_filtro_universidad_medio_component__["a" /* FiltroUniversidadMedioComponent */],
                __WEBPACK_IMPORTED_MODULE_67__cartera_dividir_cartera_dividir_cartera_component__["a" /* DividirCarteraComponent */],
                __WEBPACK_IMPORTED_MODULE_68__reports_ejecutivos_reports_ejecutivos_component__["a" /* ReportsEjecutivosComponent */],
                __WEBPACK_IMPORTED_MODULE_69__reporte_events_reporte_events_component__["a" /* ReporteEventsComponent */],
                __WEBPACK_IMPORTED_MODULE_70__listas_listas_component__["a" /* ListasComponent */],
                __WEBPACK_IMPORTED_MODULE_71__events_add_carrera_add_carrera_component__["a" /* AddCarreraComponent */],
                __WEBPACK_IMPORTED_MODULE_72__login_contra_contra_component__["a" /* ContraComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular_async_local_storage__["b" /* AsyncLocalStorageModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["b" /* routing */],
                __WEBPACK_IMPORTED_MODULE_21__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* appRoutingProviders */],
                __WEBPACK_IMPORTED_MODULE_17__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_19__event_persona_filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_20__services_sucursal_service__["a" /* SucursalService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_events_component__ = __webpack_require__("./src/app/events/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_event_component__ = __webpack_require__("./src/app/event/event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_profile_person_profile_person_component__ = __webpack_require__("./src/app/event/profile-person/profile-person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_profile_person_tracing_tracing_component__ = __webpack_require__("./src/app/event/profile-person/tracing/tracing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graphicReports_reports_reports_component__ = __webpack_require__("./src/app/graphicReports/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__graphicReports_report_trimestral_report_trimestral_component__ = __webpack_require__("./src/app/graphicReports/report-trimestral/report-trimestral.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__graphicReports_report_event_report_event_component__ = __webpack_require__("./src/app/graphicReports/report-event/report-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cartera_cartera_component__ = __webpack_require__("./src/app/cartera/cartera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__cartera_add_cartera_add_cartera_component__ = __webpack_require__("./src/app/cartera/add-cartera/add-cartera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__cartera_info_cartera_info_cartera_component__ = __webpack_require__("./src/app/cartera/info-cartera/info-cartera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__cartera_edit_cartera_edit_cartera_component__ = __webpack_require__("./src/app/cartera/edit-cartera/edit-cartera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ejecutivo_ejecutivo_component__ = __webpack_require__("./src/app/ejecutivo/ejecutivo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ejecutivo_edit_ejecutivo_edit_ejecutivo_component__ = __webpack_require__("./src/app/ejecutivo/edit-ejecutivo/edit-ejecutivo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__event_persona_persona_component__ = __webpack_require__("./src/app/event/persona/persona.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__event_persona_addPerson_addPerson_component__ = __webpack_require__("./src/app/event/persona/addPerson/addPerson.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__event_persona_edit_edit_component__ = __webpack_require__("./src/app/event/persona/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__sucursal_sucursal_component__ = __webpack_require__("./src/app/sucursal/sucursal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__sucursal_addSucursal_addsucursal_component__ = __webpack_require__("./src/app/sucursal/addSucursal/addsucursal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ejecutivo_add_ejecutivo_add_ejecutivo_component__ = __webpack_require__("./src/app/ejecutivo/add-ejecutivo/add-ejecutivo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__programa_programa_component__ = __webpack_require__("./src/app/programa/programa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__programa_edit_programa_edit_programa_component__ = __webpack_require__("./src/app/programa/edit-programa/edit-programa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__programa_add_programa_add_programa_component__ = __webpack_require__("./src/app/programa/add-programa/add-programa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__modulo_modulo_component__ = __webpack_require__("./src/app/modulo/modulo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__modulo_edit_modulo_edit_modulo_component__ = __webpack_require__("./src/app/modulo/edit-modulo/edit-modulo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__modulo_add_modulo_add_modulo_component__ = __webpack_require__("./src/app/modulo/add-modulo/add-modulo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ejecutivo_info_ejecutivo_info_ejecutivo_component__ = __webpack_require__("./src/app/ejecutivo/info-ejecutivo/info-ejecutivo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__facilitador_facilitador_component__ = __webpack_require__("./src/app/facilitador/facilitador.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__facilitador_add_facilitador_add_facilitador_component__ = __webpack_require__("./src/app/facilitador/add-facilitador/add-facilitador.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__facilitador_edit_facilitador_edit_facilitador_component__ = __webpack_require__("./src/app/facilitador/edit-facilitador/edit-facilitador.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__correlative_add_correlative_add_correlative_component__ = __webpack_require__("./src/app/correlative/add-correlative/add-correlative.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__events_addEvent_addEvent_component__ = __webpack_require__("./src/app/events/addEvent/addEvent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__event_asistencia_asistencia_component__ = __webpack_require__("./src/app/event/asistencia/asistencia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__event_inscription_inscription_component__ = __webpack_require__("./src/app/event/inscription/inscription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__import_whats_numbers_import_whats_numbers_component__ = __webpack_require__("./src/app/import-whats-numbers/import-whats-numbers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__import_from_excel_import_from_excel_component__ = __webpack_require__("./src/app/import-from-excel/import-from-excel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ejecutivo_persons_of_ejecutivo_persons_of_ejecutivo_component__ = __webpack_require__("./src/app/ejecutivo/persons-of-ejecutivo/persons-of-ejecutivo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__segmentation_segmentation_component__ = __webpack_require__("./src/app/segmentation/segmentation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__segmentation_list_person_program_user_list_person_program_user_component__ = __webpack_require__("./src/app/segmentation/list-person-program-user/list-person-program-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__events_persons_of_events_persons_of_events_component__ = __webpack_require__("./src/app/events/persons-of-events/persons-of-events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__event_persona_edit_persona_interes_edit_persona_interes_component__ = __webpack_require__("./src/app/event/persona/edit-persona-interes/edit-persona-interes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__event_persona_filtro_universidad_medio_filtro_universidad_medio_component__ = __webpack_require__("./src/app/event/persona/filtro-universidad-medio/filtro-universidad-medio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__cartera_dividir_cartera_dividir_cartera_component__ = __webpack_require__("./src/app/cartera/dividir-cartera/dividir-cartera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__reports_ejecutivos_reports_ejecutivos_component__ = __webpack_require__("./src/app/reports-ejecutivos/reports-ejecutivos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__reporte_events_reporte_events_component__ = __webpack_require__("./src/app/reporte-events/reporte-events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__listas_listas_component__ = __webpack_require__("./src/app/listas/listas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__events_add_carrera_add_carrera_component__ = __webpack_require__("./src/app/events/add-carrera/add-carrera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__login_contra_contra_component__ = __webpack_require__("./src/app/login/contra/contra.component.ts");

//import components

































//import { AlertComponent } from './events/alert/alert.component';


/////////nuevo marketig////////







//////////////////////////////////////////////////////////////////////////







var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    {
        path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
        children: [
            { path: 'home', redirectTo: 'home', pathMatch: 'full' },
            { path: 'events', component: __WEBPACK_IMPORTED_MODULE_3__events_events_component__["a" /* EventsComponent */] },
            //{ path: 'events/alert', component: AlertComponent },
            { path: 'events/add', component: __WEBPACK_IMPORTED_MODULE_33__events_addEvent_addEvent_component__["a" /* AddEventComponent */] },
            { path: 'event/:id', component: __WEBPACK_IMPORTED_MODULE_4__event_event_component__["a" /* EventComponent */] },
            { path: 'event/asistencia/:id', component: __WEBPACK_IMPORTED_MODULE_34__event_asistencia_asistencia_component__["a" /* AsistenciaComponent */] },
            { path: 'profilePerson/:id', component: __WEBPACK_IMPORTED_MODULE_5__event_profile_person_profile_person_component__["a" /* ProfilePersonComponent */] },
            { path: 'tracing/add/:id', component: __WEBPACK_IMPORTED_MODULE_6__event_profile_person_tracing_tracing_component__["a" /* TracingComponent */] },
            { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_7__graphicReports_reports_reports_component__["a" /* ReportsComponent */] },
            { path: 'trimestral', component: __WEBPACK_IMPORTED_MODULE_8__graphicReports_report_trimestral_report_trimestral_component__["a" /* ReportTrimestralComponent */] },
            { path: 'reportEvent/:id', component: __WEBPACK_IMPORTED_MODULE_9__graphicReports_report_event_report_event_component__["a" /* ReportEventComponent */] },
            { path: 'persons', component: __WEBPACK_IMPORTED_MODULE_16__event_persona_persona_component__["a" /* PersonaComponent */] },
            { path: 'persons/add', component: __WEBPACK_IMPORTED_MODULE_17__event_persona_addPerson_addPerson_component__["a" /* AddPersonComponent */] },
            { path: 'persons/edit/:id', component: __WEBPACK_IMPORTED_MODULE_18__event_persona_edit_edit_component__["a" /* EditComponent */] },
            { path: 'persons/asistencia/:id', component: __WEBPACK_IMPORTED_MODULE_34__event_asistencia_asistencia_component__["a" /* AsistenciaComponent */] },
            { path: 'cartera', component: __WEBPACK_IMPORTED_MODULE_10__cartera_cartera_component__["a" /* CarteraComponent */] },
            { path: 'cartera/add', component: __WEBPACK_IMPORTED_MODULE_11__cartera_add_cartera_add_cartera_component__["a" /* AddCarteraComponent */] },
            { path: 'cartera/:id', component: __WEBPACK_IMPORTED_MODULE_12__cartera_info_cartera_info_cartera_component__["a" /* InfoCarteraComponent */] },
            { path: 'cartera/edit/:name', component: __WEBPACK_IMPORTED_MODULE_13__cartera_edit_cartera_edit_cartera_component__["a" /* EditCarteraComponent */] },
            { path: 'ejecutivo', component: __WEBPACK_IMPORTED_MODULE_14__ejecutivo_ejecutivo_component__["a" /* EjecutivoComponent */] },
            { path: 'ejecutivo/add', component: __WEBPACK_IMPORTED_MODULE_21__ejecutivo_add_ejecutivo_add_ejecutivo_component__["a" /* AddEjecutivoComponent */] },
            { path: 'ejecutivo/:id', component: __WEBPACK_IMPORTED_MODULE_28__ejecutivo_info_ejecutivo_info_ejecutivo_component__["a" /* InfoEjecutivoComponent */] },
            { path: 'ejecutivo/edit/:active', component: __WEBPACK_IMPORTED_MODULE_15__ejecutivo_edit_ejecutivo_edit_ejecutivo_component__["a" /* EditEjecutivoComponent */] },
            { path: 'sucursal', component: __WEBPACK_IMPORTED_MODULE_19__sucursal_sucursal_component__["a" /* SucursalComponent */] },
            { path: 'sucursal/add', component: __WEBPACK_IMPORTED_MODULE_20__sucursal_addSucursal_addsucursal_component__["a" /* AddSucursalComponent */] },
            { path: 'programs', component: __WEBPACK_IMPORTED_MODULE_22__programa_programa_component__["a" /* ProgramaComponent */] },
            { path: 'program/edit/:id', component: __WEBPACK_IMPORTED_MODULE_23__programa_edit_programa_edit_programa_component__["a" /* EditProgramaComponent */] },
            { path: 'program/add', component: __WEBPACK_IMPORTED_MODULE_24__programa_add_programa_add_programa_component__["a" /* AddProgramaComponent */] },
            { path: 'modulos/:id', component: __WEBPACK_IMPORTED_MODULE_25__modulo_modulo_component__["a" /* ModuloComponent */] },
            { path: 'modulo/edit/:id', component: __WEBPACK_IMPORTED_MODULE_26__modulo_edit_modulo_edit_modulo_component__["a" /* EditModuloComponent */] },
            { path: 'modulo/add/:id', component: __WEBPACK_IMPORTED_MODULE_27__modulo_add_modulo_add_modulo_component__["a" /* AddModuloComponent */] },
            { path: 'facilitador', component: __WEBPACK_IMPORTED_MODULE_29__facilitador_facilitador_component__["a" /* facilitadorComponent */] },
            { path: 'facilitador/add', component: __WEBPACK_IMPORTED_MODULE_30__facilitador_add_facilitador_add_facilitador_component__["a" /* AddFacilitadorComponent */] },
            { path: 'facilitador/edit/:id', component: __WEBPACK_IMPORTED_MODULE_31__facilitador_edit_facilitador_edit_facilitador_component__["a" /* EditFacilitadorComponent */] },
            { path: 'correlative/add', component: __WEBPACK_IMPORTED_MODULE_32__correlative_add_correlative_add_correlative_component__["a" /* AddCorrelativeComponent */] },
            { path: 'inscription/:id', component: __WEBPACK_IMPORTED_MODULE_35__event_inscription_inscription_component__["a" /* InscriptionComponent */] },
            { path: 'importWhatsapp', component: __WEBPACK_IMPORTED_MODULE_36__import_whats_numbers_import_whats_numbers_component__["a" /* ImportWhatsNumbersComponent */] },
            { path: 'importFromExcel', component: __WEBPACK_IMPORTED_MODULE_37__import_from_excel_import_from_excel_component__["a" /* ImportFromExcelComponent */] },
            { path: 'personsOfEjecutivo/:id', component: __WEBPACK_IMPORTED_MODULE_38__ejecutivo_persons_of_ejecutivo_persons_of_ejecutivo_component__["a" /* PersonsOfEjecutivoComponent */] },
            { path: 'segmentacion', component: __WEBPACK_IMPORTED_MODULE_39__segmentation_segmentation_component__["a" /* SegmentationComponent */] },
            { path: 'segmentacion/list/:id', component: __WEBPACK_IMPORTED_MODULE_40__segmentation_list_person_program_user_list_person_program_user_component__["a" /* ListPersonProgramUserComponent */] },
            { path: 'events/persons/:id', component: __WEBPACK_IMPORTED_MODULE_41__events_persons_of_events_persons_of_events_component__["a" /* PersonsOfEventsComponent */] },
            { path: 'events/persons/edit/:id', component: __WEBPACK_IMPORTED_MODULE_42__event_persona_edit_persona_interes_edit_persona_interes_component__["a" /* EditPersonaInteresComponent */] },
            { path: 'filtros', component: __WEBPACK_IMPORTED_MODULE_43__event_persona_filtro_universidad_medio_filtro_universidad_medio_component__["a" /* FiltroUniversidadMedioComponent */] },
            { path: 'divideCartera', component: __WEBPACK_IMPORTED_MODULE_44__cartera_dividir_cartera_dividir_cartera_component__["a" /* DividirCarteraComponent */] },
            { path: 'reporteEjecutivo', component: __WEBPACK_IMPORTED_MODULE_45__reports_ejecutivos_reports_ejecutivos_component__["a" /* ReportsEjecutivosComponent */] },
            { path: 'reporteEvents', component: __WEBPACK_IMPORTED_MODULE_46__reporte_events_reporte_events_component__["a" /* ReporteEventsComponent */] },
            { path: 'listas', component: __WEBPACK_IMPORTED_MODULE_47__listas_listas_component__["a" /* ListasComponent */] },
            { path: 'addCarrera', component: __WEBPACK_IMPORTED_MODULE_48__events_add_carrera_add_carrera_component__["a" /* AddCarreraComponent */] },
            { path: 'cambiar', component: __WEBPACK_IMPORTED_MODULE_49__login_contra_contra_component__["a" /* ContraComponent */] },
        ]
    },
    //{path: '', component: LoginFormComponent}
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] } //ruta redir
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/cartera/add-cartera/add-cartera.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n  \r\n  .text-alert{\r\n    color:#dd4b39;\r\n}"

/***/ }),

/***/ "./src/app/cartera/add-cartera/add-cartera.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n  <br>\r\n  <div class=\"content\">\r\n\r\n\r\n \r\n  <div class=\"box box-primary\">\r\n\r\n<div class=\"container\">\r\n    <div [hidden]=\"submitted\">\r\n      <h1>Registrar Cartera</h1>\r\n      <form (ngSubmit)=\"onSubmit()\" #addCartera=\"ngForm\" >\r\n          <!-- <form #addCartera=\"ngForm\" > -->\r\n        <div class=\"form-group col-sm-8\">\r\n          <label for=\"name\">Nombre de la Cartera</label>\r\n          <input type=\"text\" pattern=\"[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ]{3,20}([ ]{0,1}[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ]{0,20}){0,2}\" class=\"form-control\" id=\"name\"\r\n                 required\r\n                 [(ngModel)]=\"carteraName\" name=\"name\"\r\n                #name=\"ngModel\"\r\n                 >\r\n                 <!-- <span *ngIf=\"name?.pattern || name.touched\">\r\n                    Nombre invalido\r\n                 </span> -->\r\n          <div [hidden]=\"name?.valid || name?.pristine\"\r\n               class=\"text-alert\">\r\n            *El Nombre de la Cartera es OBLIGATORIO\r\n          </div>\r\n          <!-- <input type=\"text\" id=\"name\" class=\"form-control validate\" value=\"{{carteraName}}\" #name> -->\r\n        </div>\r\n        <div class=\"form-group col-sm-8\" style=\"text-align:center \">\r\n            <button  type=\"submit\" class=\"btn btn-success\"  [disabled]=\"!addCartera.form.valid\" (click)=\"guardar()\">Guardar</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n   \r\n  </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/cartera/add-cartera/add-cartera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCarteraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modelo_cartera__ = __webpack_require__("./src/app/modelo/cartera.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddCarteraComponent = /** @class */ (function () {
    function AddCarteraComponent(_peticionesService, router) {
        this._peticionesService = _peticionesService;
        this.router = router;
        this.submitted = false;
        this.powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
        this.model = [, '', '', , "", '', ''];
        this.cartera = new __WEBPACK_IMPORTED_MODULE_2__modelo_cartera__["a" /* Cartera */]("", null);
    }
    AddCarteraComponent.prototype.onSubmit = function () { this.submitted = true; };
    AddCarteraComponent.prototype.ngOnInit = function () {
    };
    AddCarteraComponent.prototype.simbolos = function (nameV) {
        var res = false;
        for (var i = 0; i < nameV.length; i++) {
            if (nameV[i] == '!' || nameV[i] == '@' || nameV[i] == '#' || nameV[i] == '$' || nameV[i] == '%' || nameV[i] == '^') {
                res = true;
            }
        }
        return res;
    };
    AddCarteraComponent.prototype.guardar = function () {
        var _this = this;
        // console.log("hola pao" + this.cartera.name);
        this.cartera.name = this.carteraName;
        // console.log(this.cartera);
        if (this.simbolos(this.carteraName)) {
            // console.log("hay simbolos");
            this.router.navigate(['home/cartera']);
            alert("No se permiten simbolos");
        }
        else {
            this._peticionesService.addCartera(this.cartera).subscribe(function (result) {
                var esperado = result;
                // console.log(esperado);
                alert('Se Creo correctamente la cartera');
                _this.router.navigate(['home/cartera']);
            }, function (error) { });
        }
    };
    AddCarteraComponent.prototype.save = function () {
        var name = this.carteraName;
        var newCartera = new __WEBPACK_IMPORTED_MODULE_2__modelo_cartera__["a" /* Cartera */](name, null);
        // console.log(newCartera);
        if (this.carteraName == '') {
            window.alert("Asegurese que todos los campos no esten vacios");
        }
        else {
            this._peticionesService.addCartera(newCartera).subscribe(function (response) {
                // this.MessageEvent.emit();
                // this.close.nativeElement.click();
            });
        }
    };
    AddCarteraComponent.prototype.cancel = function () {
        this.router.navigate(['home/cartera']);
    };
    AddCarteraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-cartera',
            template: __webpack_require__("./src/app/cartera/add-cartera/add-cartera.component.html"),
            styles: [__webpack_require__("./src/app/cartera/add-cartera/add-cartera.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AddCarteraComponent);
    return AddCarteraComponent;
}());



/***/ }),

/***/ "./src/app/cartera/cartera.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cartera/cartera.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n  <div class=\"content\">\r\n\r\n    <div class=\"box box-primary\">\r\n\r\n        <section class=\"content-header\">\r\n            <h1>\r\n               Carteras\r\n               <small>Vigentes</small>\r\n            </h1>\r\n           \r\n         </section>\r\n         <section class=\"content\">\r\n             <a class=\"btn btn-primary a\" (click)=\"addCartera()\"><i class=\"fa fa-book\"></i> Registrar Cartera</a>\r\n            <table class=\"table table-hover\">\r\n               <thead>\r\n                  <tr>\r\n                     <th>Nombre de la Cartera</th>\r\n                     <th>Estado</th>\r\n                     <th>Información</th>\r\n                     <th *ngIf='role?.name == \"Admin\"'>Editar Cartera</th>\r\n                  </tr>\r\n               </thead>\r\n       \r\n               <tbody>\r\n       \r\n                  <tr *ngFor=\"let cartera of carteras\">\r\n                     <td>{{ cartera?.name }}</td>\r\n                     <td *ngIf=\"cartera?.active==true; else inactivo \"> Activa</td>\r\n                     <td>  \r\n                       <a class=\"btn btn-primary a\" (click)=\"send(cartera._id)\">INFORMACIÓN</a>\r\n                     </td>\r\n                     <td *ngIf='role?.name == \"Admin\"'>\r\n                        <button class=\"btn btn-warning\" (click)=\"editCartera(cartera._id)\">EDITAR</button>\r\n                       \r\n                     </td>\r\n       \r\n                     <ng-template #inactivo>\r\n                         Sin Asignar\r\n                     </ng-template>\r\n                  </tr>\r\n               </tbody>\r\n            </table>\r\n         </section>\r\n    </div>\r\n  </div>\r\n \r\n</div>"

/***/ }),

/***/ "./src/app/cartera/cartera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarteraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global__ = __webpack_require__("./src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CarteraComponent = /** @class */ (function () {
    function CarteraComponent(route, router, _peticionesService) {
        this.route = route;
        this.router = router;
        this._peticionesService = _peticionesService;
    }
    CarteraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._peticionesService.getCarteras().subscribe(function (response) {
            _this.carteras = response;
        });
        this.queryRol();
    };
    CarteraComponent.prototype.addCartera = function () {
        this.router.navigate(['/home/cartera/add']);
    };
    CarteraComponent.prototype.send = function (_id) {
        // console.log(_id);
        this.router.navigate(['/home/cartera', _id]);
    };
    CarteraComponent.prototype.editCartera = function (_name) {
        // console.log("carteracomponent");
        this.router.navigate(['/home/cartera/edit', _name]);
        // console.log("router.navigate");
    };
    CarteraComponent.prototype.queryRol = function () {
        var _this = this;
        // console.log(Identity.rol)
        this._peticionesService.getRole(__WEBPACK_IMPORTED_MODULE_3__services_global__["b" /* Identity */].rol).subscribe(function (result) {
            _this.role = result;
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    CarteraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cartera',
            template: __webpack_require__("./src/app/cartera/cartera.component.html"),
            styles: [__webpack_require__("./src/app/cartera/cartera.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]])
    ], CarteraComponent);
    return CarteraComponent;
}());



/***/ }),

/***/ "./src/app/cartera/dividir-cartera/dividir-cartera.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n  \r\n  .text-alert{\r\n    color:#dd4b39;\r\n}"

/***/ }),

/***/ "./src/app/cartera/dividir-cartera/dividir-cartera.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n    <br>\r\n    <div class=\"content\">\r\n        <div class=\"box box-primary\">\r\n            <div class=\"container \">\r\n\r\n                <h5>Compartir Carteras </h5>\r\n\r\n\r\n\r\n                <div>\r\n                    <form (ngSubmit)=\"onSubmit()\" #compartirCarterasForm=\"ngForm\">\r\n                        <div class=\"form-group col-sm-8\">\r\n                            <!-- <div class=\"form-group\">\r\n                                <label for=\"ejecutivo\">Ejecutivos</label>\r\n                                <br>\r\n                                <label>\r\n                                    <div *ngFor=\"let ejecutivo of listaEjecutivos; let i = index\">\r\n                                        <input type=\"checkbox\" name=\"ejecutivo{{i}}\" #ejec=\"ngModel\" value=\"{{ejecutivo.userId}}\" [(ngModel)]=\"ejecutivo.checked\"\r\n                                        /> {{ejecutivo.userName}} - {{ejecutivo.carteraName}}\r\n                                    </div>\r\n                                </label>\r\n                                <div [hidden]=\"ejec?.valid || ejec?.pristine\" class=\"text-alert\">\r\n                                </div>\r\n                            </div> -->\r\n                            <div class=\"form-group\">\r\n                                <label for=\"eventos\">Eventos</label>\r\n                                <br>\r\n                                <label>\r\n                                    <div *ngFor=\"let evento of lista_eventos; let i = index\">\r\n                                        <input type=\"checkbox\" name=\"evento{{i}}\" #eventosItem=\"ngModel\" value=\"{{evento._id}}\" [(ngModel)]=\"evento.checked\" /> {{evento.name}}\r\n                                    </div>\r\n                                </label>\r\n                                <div [hidden]=\"eventosItem?.valid || eventosItem?.pristine\" class=\"text-alert\">\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                            <div class=\"form-group\">\r\n                                <label for=\"numToDivide\">Cantidad en la que se dividirá</label>\r\n                                <input type=\"number\" pattern=\"[1-9]\" class=\"form-control\" id=\"numToDivide\" required [(ngModel)]=\"numeroParaDividir\" name=\"cell\"\r\n                                    #numToDivide=\"ngModel\">\r\n                                <div [hidden]=\"numToDivide?.valid || numToDivide?.pristine\" class=\"text-alert\">\r\n                                    *Número es inválido\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!compartirCarterasForm.form.valid\">Buscar</button>\r\n                            <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\r\n                            <br>\r\n                            <br>\r\n\r\n\r\n                            <div class=\"form-group\" *ngIf='numeroParaDividir!=undefined'>\r\n                                <label for=\"\">\r\n                                    <h5>La lista se dividirá en {{numeroParaDividir}} partes\r\n                                        <button class=\"btn btn-primary margin-left\" (click)=\"dividir()\">Dividir</button>\r\n                                        <button class=\"btn btn-primary margin-left\" (click)=\"deshacerDividir()\">Deshacer Dividir</button>\r\n                                    </h5>\r\n                                </label>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n\r\n                    </form>\r\n\r\n                    <br>\r\n\r\n\r\n\r\n                    <div *ngIf='listaGeneral'>\r\n                        <!-- <table class=\"table table-hover\"   \r\n                                id=\"listaGeneral\" \r\n                                style=\"display:table;\" \r\n                                summary=\"Code page support in different versions of MS Windows.\" \r\n                                rules=\"groups\" \r\n                                frame=\"hsides\" \r\n                                border=\"2\"\r\n                        > -->\r\n                        <table class=\"table table-hover \" id=\"listaGeneral\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Numero</th>\r\n                                    <th>Nombre</th>\r\n                                    <th>Apellido</th>\r\n                                    <th>Telefono</th>\r\n                                    <th>Grupo de Whatsapp</th>\r\n                                    <th>Ciudad</th>\r\n                                    <th>Ocupacion</th>\r\n                                    <!-- <th colspan=\"2\">Opciones</th> -->\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let i of listadepersonasReturned; let num = index\">\r\n                                    <td>{{num+1}}</td>\r\n                                    <td>{{ i.first_name }}</td>\r\n                                    <th>{{i.last_name}}</th>\r\n                                    <td>{{ i.cellphone }}</td>\r\n                                    <td>{{i.whatsapp_group}}</td>\r\n                                    <td>{{i.city}}</td>\r\n                                    <td>{{ i.ocupation }}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <div align=\"center\" *ngIf='enablePrint'>\r\n                            <!-- <input type=\"text\" id=\"PrimerNombre\" placeholder=\"Primer Nombre\">\r\n                                    <input type=\"text\" id=\"Apellido\" placeholder=\"Apellidos\">\r\n                                    <input type=\"text\" id=\"Celular\" placeholder=\"Celular\">\r\n                                    <input type=\"text\" id=\"email\" placeholder=\"email\">\r\n                                    <input type=\"text\" id=\"Telefono\" placeholder=\"Telefono\">\r\n                                    <input type=\"text\" id=\"Ciudad\" placeholder=\"Ciudad\">\r\n                                    <input type=\"text\" id=\"whatsapp_group\" placeholder=\"whatsapp_group\">   -->\r\n                            <!-- <button class=\"btn btn-primary\" (click)=\"imprimir(listadepersonasReturned)\">Imprimir</button>\r\n                                <button class=\"btn btn-primary\" (click)=\"imprimir2Opcion()\">Imprimir</button> -->\r\n                            <button class=\"btn btn-primary\" (click)=\"imprimir3Opcion('listaGeneral')\">Imprimir</button>\r\n\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div *ngIf='!listaGeneral'>\r\n                        <div *ngFor=\"let unaLista of lista_lista_personasConIdTable; let tablaid = index\">\r\n                            <table class=\"table table-hover\" #table id='{{unaLista.id}}'>\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Numero</th>\r\n                                        <th>Nombre</th>\r\n                                        <th>Apellido</th>\r\n                                        <th>Telefono</th>\r\n                                        <th>Grupo de Whatsapp</th>\r\n                                        <th>Ciudad</th>\r\n                                        <th>Ocupacion</th>\r\n                                        <!-- <th colspan=\"2\">Opciones</th> -->\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let i of unaLista.lista; let num = index\">\r\n                                        <td>{{num+1}}</td>\r\n                                        <td>{{ i.first_name }}</td>\r\n                                        <th>{{i.last_name}}</th>\r\n                                        <td>{{ i.cellphone }}</td>\r\n                                        <td>{{i.whatsapp_group}}</td>\r\n                                        <td>{{i.city}}</td>\r\n                                        <td>{{ i.ocupation }}</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                            <div align=\"center\" *ngIf='enablePrint'>\r\n                                <!-- <input type=\"text\" id=\"PrimerNombre\" placeholder=\"Primer Nombre\">\r\n                                            <input type=\"text\" id=\"Apellido\" placeholder=\"Apellidos\">\r\n                                            <input type=\"text\" id=\"Celular\" placeholder=\"Celular\">\r\n                                            <input type=\"text\" id=\"email\" placeholder=\"email\">\r\n                                            <input type=\"text\" id=\"Telefono\" placeholder=\"Telefono\">\r\n                                            <input type=\"text\" id=\"Ciudad\" placeholder=\"Ciudad\">\r\n                                            <input type=\"text\" id=\"whatsapp_group\" placeholder=\"whatsapp_group\">   -->\r\n                                <!-- <button class=\"btn btn-primary\" (click)=\"imprimir(unaLista)\">Imprimir</button> -->\r\n\r\n                                <button class=\"btn btn-primary\" (click)=\"imprimir4Opcion(unaLista.id)\">Imprimir Excel</button>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/cartera/dividir-cartera/dividir-cartera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DividirCarteraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global__ = __webpack_require__("./src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DividirCarteraComponent = /** @class */ (function () {
    function DividirCarteraComponent(_peticionesService, router) {
        this._peticionesService = _peticionesService;
        this.router = router;
        this.listado_personas = [];
        this.lista_eventos = [];
        this.enablePrint = false;
        this.lista_lista_personas = [];
        this.listaEjecutivosChecked = [];
        this.listaEventosChecked = [];
        this.lista_lista_personasConIdTable = [];
        this.listaGeneral = true;
    }
    DividirCarteraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._peticionesService.getAllEjecutivosOfSucursal(__WEBPACK_IMPORTED_MODULE_2__services_global__["b" /* Identity */]).subscribe(function (response) {
            _this.listaEjecutivos = response;
            console.log(_this.listaEjecutivos);
            _this.queryEvents();
        });
    };
    DividirCarteraComponent.prototype.onSubmit = function () {
        var _this = this;
        this.listaEjecutivosChecked = [];
        this.listaEventosChecked = [];
        this.listado_personas = [];
        for (var _i = 0, _a = this.listaEjecutivos; _i < _a.length; _i++) {
            var unEjecutivo = _a[_i];
            // console.log(unEjecutivo);
            if (unEjecutivo.userId == __WEBPACK_IMPORTED_MODULE_2__services_global__["b" /* Identity */]._id) {
                console.log(this.listaEjecutivosChecked);
                this.listaEjecutivosChecked.push(unEjecutivo);
            }
            // if (unEjecutivo.checked) {
            // }
        }
        for (var _b = 0, _c = this.lista_eventos; _b < _c.length; _b++) {
            var unEvento = _c[_b];
            if (unEvento.checked) {
                this.listaEventosChecked.push(unEvento);
            }
        }
        var objtsend = {};
        objtsend.lista_ejecutivos = this.listaEjecutivosChecked;
        objtsend.lista_eventos = this.listaEventosChecked;
        this._peticionesService.getPersonsShareCarteraEvent(objtsend).subscribe(function (response) {
            _this.listadepersonasReturned = response;
            _this.listado_personas = _this.listadepersonasReturned;
            _this.numTotal = _this.listado_personas.length;
            _this.enablePrint = true;
            // console.log(this.lista_lista_personas)
        });
    };
    DividirCarteraComponent.prototype.dividir = function () {
        if (this.numeroParaDividir > this.numTotal) {
            window.alert("El numero debe ser menor o igual a " + this.numTotal);
        }
        else {
            this.lista_lista_personas = [];
            this.listaGeneral = false;
            this.enablePrint = true;
            var dividido = Math.floor(this.lista_lista_personas.length / this.numeroParaDividir);
            var numDeListas = this.numeroParaDividir;
            for (var i = 0; i < numDeListas; i++) {
                var lista = [];
                this.lista_lista_personas.push(lista);
            }
            // console.log(this.lista_lista_personas);
            var res = llenado(this.listado_personas, this.lista_lista_personas);
            // console.log(this.lista_lista_personas);
            var count = 1;
            for (var _i = 0, _a = this.lista_lista_personas; _i < _a.length; _i++) {
                var lista = _a[_i];
                var listObject = {};
                listObject.lista = lista;
                listObject.id = count;
                count++;
                this.lista_lista_personasConIdTable.push(listObject);
            }
        }
    };
    DividirCarteraComponent.prototype.deshacerDividir = function () {
        this.listaGeneral = true;
    };
    DividirCarteraComponent.prototype.cancel = function () {
        for (var _i = 0, _a = this.listaEjecutivos; _i < _a.length; _i++) {
            var a = _a[_i];
            a.checked = false;
        }
        this.listaEjecutivosChecked = [];
        for (var _b = 0, _c = this.lista_eventos; _b < _c.length; _b++) {
            var b = _c[_b];
            b.checked = false;
        }
        this.listaEventosChecked = [];
        this.listado_personas = [];
        this.listadepersonasReturned = [];
        this.lista_lista_personas = [];
        this.listaGeneral = true;
        this.numeroParaDividir = undefined;
        this.enablePrint = false;
    };
    DividirCarteraComponent.prototype.queryEvents = function () {
        var _this = this;
        this._peticionesService.getAllEvents(__WEBPACK_IMPORTED_MODULE_2__services_global__["b" /* Identity */]._id).subscribe(function (result) {
            //  console.log('hola')
            _this.events = result;
            //  console.log(this.events)
            _this.events.map(function (event) {
                var sum = 0;
                event.inscriptions.forEach(function (e) {
                    if (e.state == 1)
                        sum++;
                });
                event.cupos = event.total - sum;
            });
            var _loop_1 = function (e) {
                var eventoItem = {};
                eventoItem.name = e.name;
                eventoItem.date_start = e.date_start;
                eventoItem.cupos = e.total;
                eventoItem._id = e._id;
                eventoItem.programaId = e.programs;
                eventoItem.checked = false;
                eventoItem.listaInteres = e.interes;
                _this._peticionesService.getProgram(e.programs).subscribe(function (result) {
                    _this.program = result;
                    eventoItem.programa = _this.program.name;
                    _this.lista_eventos.push(eventoItem);
                });
            };
            for (var _i = 0, _a = _this.events; _i < _a.length; _i++) {
                var e = _a[_i];
                _loop_1(e);
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    //  imprimir(listaToExport){
    //   console.log(listaToExport);
    //   let lista=[];
    //   for(let i of listaToExport){
    //     let newPerson={}as PersonToExport;
    //     newPerson.first_name=i.first_name;
    //     newPerson.last_name=i.last_name;    
    //     newPerson.celular=i.cellphone;
    //     newPerson.email=i.email;
    //     newPerson.telefono=i.phone;
    //     newPerson.city=i.city;
    //     newPerson.whatsapp_group=i.whatsapp_group
    //     lista.push(newPerson);
    //   }
    //   let options = {
    //     fieldSeparator: ',',
    //     quoteStrings: '"',
    //     decimalseparator: '.',
    //     showLabels: false,
    //     showTitle: false,
    //     useBom: true,
    //     // noDownload: true,
    //     // headers: ["NOMBRES", "APELLIDOS", "CIUDAD", "CELULAR", "Móvil"]
    //     headers: [
    //       // (<HTMLInputElement>document.getElementById(elementId)).value,
    //       (<HTMLInputElement>document.getElementById('PrimerNombre')).value,
    //       (<HTMLInputElement>document.getElementById('Apellido')).value,
    //       (<HTMLInputElement>document.getElementById('Celular')).value,
    //       (<HTMLInputElement>document.getElementById('email')).value,
    //       (<HTMLInputElement>document.getElementById('Telefono')).value,
    //       (<HTMLInputElement>document.getElementById('Ciudad')).value,
    //       (<HTMLInputElement>document.getElementById('whatsapp_group')).value,
    //     ]
    //   };
    //    let toExportCarteraShared=new Angular5Csv(lista,"carteraToExport",options)
    //  }
    //  imprimir2Opcion(){
    //   // tableToExcel("Contacts","excel");
    //  }
    DividirCarteraComponent.prototype.imprimir3Opcion = function (tableID) {
        exportTableToExcel(tableID, "Cartera");
    };
    DividirCarteraComponent.prototype.imprimir4Opcion = function (tableId) {
        exportTableToExcel(tableId, "Cartera");
    };
    DividirCarteraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dividir-cartera',
            template: __webpack_require__("./src/app/cartera/dividir-cartera/dividir-cartera.component.html"),
            styles: [__webpack_require__("./src/app/cartera/dividir-cartera/dividir-cartera.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], DividirCarteraComponent);
    return DividirCarteraComponent;
}());

function exportTableToExcel(tableID, filename) {
    if (filename === void 0) { filename = ''; }
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    // Specify file name
    filename = filename ? filename + '.xls' : 'excel_data.xls';
    // Create download link element
    downloadLink = document.createElement("a");
    document.body.appendChild(downloadLink);
    if (navigator.msSaveOrOpenBlob) {
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob(blob, filename);
    }
    else {
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
        // Setting the file name
        downloadLink.download = filename;
        //triggering the function
        downloadLink.click();
    }
}
// function tableToExcel(table, name) {
//   var uri = 'data:application/vnd.ms-excel;base64,'
//   var template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
//   var base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))) }
//   var format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) }
//   if (!table.nodeType) table = document.getElementById(table)
//   var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML }
//   window.location.href = uri + base64(format(template, ctx))
// }
function llenado(listaP, listaParaLlenar) {
    if (listaP.length == 0) {
        return listaParaLlenar;
    }
    else {
        for (var _i = 0, listaParaLlenar_1 = listaParaLlenar; _i < listaParaLlenar_1.length; _i++) {
            var i = listaParaLlenar_1[_i];
            if (listaP.length == 0) {
                return listaParaLlenar;
            }
            else {
                i.push(listaP.pop());
            }
        }
        llenado(listaP, listaParaLlenar);
    }
    // console.log(listaParaLlenar);
}


/***/ }),

/***/ "./src/app/cartera/edit-cartera/edit-cartera.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n  \r\n  .text-alert{\r\n    color:#dd4b39;\r\n}"

/***/ }),

/***/ "./src/app/cartera/edit-cartera/edit-cartera.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"content-wrapper\">\r\n      <br>\r\n      <div class=\"content\">\r\n    \r\n    \r\n     \r\n      <div class=\"box box-primary\">\r\n    \r\n    <div class=\"container\">\r\n        <div [hidden]=\"submitted\">\r\n          <h1>Editar Cartera</h1>\r\n          <form (ngSubmit)=\" editCartera()\" #addCartera=\"ngForm\" >\r\n              <!-- <form #addCartera=\"ngForm\" > -->\r\n            <div class=\"form-group col-sm-8\">\r\n              <label for=\"name\">Nombre de la Cartera</label>\r\n              <input type=\"text\" pattern=\"[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ]{3,20}([ ]{0,1}[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ]{0,20}){0,2}\" class=\"form-control\" id=\"name\"\r\n                     required\r\n                     [(ngModel)]=\"carteraName\" name=\"name\"\r\n                    #name=\"ngModel\"\r\n                     >\r\n              <div [hidden]=\"name?.valid || name?.pristine\"\r\n                   class=\"text-alert\">\r\n                   *El Nombre de la Cartera es OBLIGATORIO\r\n              </div>\r\n              <!-- <input type=\"text\" id=\"name\" class=\"form-control validate\" value=\"{{carteraName}}\" #name> -->\r\n            </div>\r\n            <div class=\"form-group col-sm-8\" style=\"text-align:center \">\r\n                <button  type=\"submit\" class=\"btn btn-success\"  (click)=\" editCartera()\">Guardar</button>\r\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n       \r\n      </div>\r\n    \r\n      </div>\r\n    \r\n    </div>\r\n    </div>\r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    "

/***/ }),

/***/ "./src/app/cartera/edit-cartera/edit-cartera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCarteraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditCarteraComponent = /** @class */ (function () {
    function EditCarteraComponent(_peticionesService, route, router) {
        this._peticionesService = _peticionesService;
        this.route = route;
        this.router = router;
        this.submitted = false;
    }
    EditCarteraComponent.prototype.onSubmit = function () {
    };
    EditCarteraComponent.prototype.ngOnInit = function () {
        this.queryCarteraId();
        this.findCartera();
    };
    EditCarteraComponent.prototype.queryCarteraId = function () {
        var _this = this;
        // console.log('hasdf');
        this.route.params.subscribe(function (params) {
            _this.carteraId = params.name;
            // console.log(this.carteraName+"editcartera");
            // const name=this.nameRef.nativeElement.value;
            //     const newCartera=new Cartera(name);
        });
    };
    EditCarteraComponent.prototype.findCartera = function () {
        var _this = this;
        this._peticionesService.getCartera(this.carteraId).subscribe(function (result) {
            _this.cartera = result;
            _this.carteraName = _this.cartera.name;
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    EditCarteraComponent.prototype.simbolos = function (nameV) {
        // console.log("ingreso simbolos");
        var res = false;
        for (var i = 0; i < nameV.length; i++) {
            if (nameV[i] == '!' || nameV[i] == '@' || nameV[i] == '#' || nameV[i] == '$' || nameV[i] == '%' || nameV[i] == '^') {
                res = true;
            }
        }
        return res;
    };
    EditCarteraComponent.prototype.editCartera = function () {
        var _this = this;
        // console.log(this.cartera);
        this.cartera.name = this.carteraName;
        if (this.carteraName == '') {
            window.alert("Asegurese que todos los campos esten llenos");
        }
        else {
            if (this.simbolos(this.carteraName)) {
                // console.log("hay simbolos");
                window.alert("asegurese de no introducir simbolos");
            }
            else {
                this._peticionesService.updateCartera(this.cartera).subscribe(function (result) {
                    var res = result;
                    // console.log(res);
                    _this.router.navigate(['home/cartera']);
                }, function (error) {
                    var errorMessage = error;
                    console.log(errorMessage);
                });
            }
        }
    };
    EditCarteraComponent.prototype.cancel = function () {
        window.history.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('name'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], EditCarteraComponent.prototype, "nameRef", void 0);
    EditCarteraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-cartera',
            template: __webpack_require__("./src/app/cartera/edit-cartera/edit-cartera.component.html"),
            styles: [__webpack_require__("./src/app/cartera/edit-cartera/edit-cartera.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], EditCarteraComponent);
    return EditCarteraComponent;
}());



/***/ }),

/***/ "./src/app/cartera/info-cartera/info-cartera.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cartera/info-cartera/info-cartera.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n        <div class=\"content\">\r\n\r\n                <div class=\"box box-primary\">\r\n                        <section class=\"content\">\r\n                                <section>\r\n                                 <div class=\"row user-infos cyruxx\">\r\n                                     <div class=\"col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xs-offset-0 col-sm-offset-0 col-md-offset-1 col-lg-offset-1\">\r\n                                         <div class=\"panel panel-primary\">\r\n                                             <div class=\"panel-heading\">\r\n                                                 <h3 class=\"panel-title\">Información de {{userName}}</h3>\r\n                                             </div>\r\n                                             <div class=\"panel-body\">\r\n                                                 <div class=\"row\">\r\n                                                    \r\n                                                     <div class=\"col-xs-10 col-sm-10 hidden-md hidden-lg\">\r\n                                                         <strong>{{userName}}</strong><br>\r\n                                                         <dl>\r\n                                                             <!-- <dt>Nivel de Usuario</dt>\r\n                                                             <dd>Administrator</dd> -->\r\n                                                             <dt>Propietario de la Cartera</dt>\r\n                                                             <dd>{{userName}}</dd>\r\n                                                             <dt>Registrado desde</dt>\r\n                                                             <dd>{{user?.record_date | date }}</dd>\r\n                                                             <dt>Personas Registradas</dt>\r\n                                                             <dd>{{persons?.length}}</dd>\r\n                                                             <!-- <dt>Warnings</dt>\r\n                                                             <dd>0</dd> -->\r\n                                                         </dl>\r\n                                                     </div>\r\n                                                     <div class=\" col-md-9 col-lg-9 hidden-xs hidden-sm\">\r\n                                                         <strong>{{userName}}</strong><br>\r\n                                                         <table class=\"table table-user-information\">\r\n                                                             <tbody>\r\n                                                             <!-- <tr>\r\n                                                                 <td>Nivel de Usuario</td>\r\n                                                                 <td>Administrator</td>\r\n                                                             </tr> -->\r\n                                                             <tr>\r\n                                                                 <td>Propietario de la Cartera</td>\r\n                                                                 <td>{{userName}}</td>\r\n                                                             </tr>\r\n                         \r\n                                                             <tr>\r\n                                                                 <td>Registrado desde</td>\r\n                                                                 <td>{{user?.record_date | date}}</td>\r\n                                                             </tr>\r\n                                                             <tr>\r\n                                                                 <td>Personas Registradas</td>\r\n                                                                 <td>{{persons?.length}}</td>\r\n                                                             </tr>\r\n                                                             <!-- <tr>\r\n                                                                 <td>Warnings</td>\r\n                                                                 <td>0</td>\r\n                                                             </tr> -->\r\n                                                             </tbody>\r\n                                                         </table>\r\n                                                     </div>\r\n                                                 </div>\r\n                                             </div>\r\n                                             \r\n                                         </div>\r\n                                     </div>\r\n                                 </div>\r\n                                </section>\r\n                                <table class=\"table table-hover\" >\r\n                                   <thead>\r\n                                      <tr>\r\n                                         <th>Nombre</th>\r\n                                         <th>Carnet</th>\r\n                                         <th>Celular</th>\r\n                                         <th>Email</th>\r\n                                         <th>Ocupación</th>\r\n                                      </tr>\r\n                                   </thead>\r\n                                   <tbody>\r\n                                      <!--<tr *ngFor=\"let i of inscriptions | buscarPersona: busqueda\">-->\r\n                                      <tr *ngFor=\"let person of persons\">\r\n                                         <td>{{ person.first_name }} {{person.last_name}}</td>\r\n                                         <td>{{ person.ci }}</td>\r\n                                         <td>{{ person.cellphone }}</td>\r\n                                         <td>{{ person.email }}</td>\r\n                                         <td>{{ person.ocupation }}</td>\r\n                                      </tr>\r\n                                   </tbody>\r\n                                </table>\r\n                                \r\n                             </section>\r\n        \r\n                </div>\r\n        </div>\r\n   \r\n    \r\n    <router-outlet></router-outlet>\r\n </div>"

/***/ }),

/***/ "./src/app/cartera/info-cartera/info-cartera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoCarteraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfoCarteraComponent = /** @class */ (function () {
    function InfoCarteraComponent(_peticionesService, route) {
        this._peticionesService = _peticionesService;
        this.route = route;
    }
    InfoCarteraComponent.prototype.ngOnInit = function () {
        this.queryPerson();
        this.findCartera();
        this.findPerson();
    };
    InfoCarteraComponent.prototype.queryPerson = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.carteraId = params.id;
        });
        //  this._peticionesService.getEvent(this.personId).subscribe(
        //     result => {
        //        this.person = result;
        //        console.log(this.person);
        //        //prueba total
        //        var o =this.person.total;
        //     },
        //     error => {
        //        var errorMessage = <any>error;
        //        console.log(errorMessage);
        //     }
        //  );
    };
    InfoCarteraComponent.prototype.findPerson = function () {
        var _this = this;
        this._peticionesService.getPersonCartera(this.carteraId).subscribe(function (response) {
            _this.persons = response;
        });
    };
    InfoCarteraComponent.prototype.findCartera = function () {
        var _this = this;
        this._peticionesService.getCartera(this.carteraId).subscribe(function (result) {
            _this.cartera = result;
            _this.findOneUser();
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    InfoCarteraComponent.prototype.findOneUser = function () {
        var _this = this;
        this._peticionesService.getOneUser(this.cartera.user).subscribe(function (response) {
            _this.user = response;
            _this.userName = _this.user.name;
            _this.userRecordDate = _this.user.record_date;
            // console.log(this.user);
        });
    };
    InfoCarteraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-info-cartera',
            template: __webpack_require__("./src/app/cartera/info-cartera/info-cartera.component.html"),
            styles: [__webpack_require__("./src/app/cartera/info-cartera/info-cartera.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], InfoCarteraComponent);
    return InfoCarteraComponent;
}());



/***/ }),

/***/ "./src/app/correlative/add-correlative/add-correlative.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/correlative/add-correlative/add-correlative.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n    <br>\r\n     <div class=\"\">\r\n       <div class=\"box box-primary\">\r\n       \r\n         <div class=\"container \">\r\n             <div [hidden]=\"submitted\">\r\n                 <h1>Registrar Correlativo</h1>\r\n                 <br>\r\n                 <form (ngSubmit)=\"guardar()\" #addCorrelative=\"ngForm\" class=\"jumbotron\">\r\n                     <div class=\"form-group col-sm-8\">\r\n                         <label for=\"year\" class=\"control-label\" >Fecha</label>\r\n                             <input type=\"date\" class=\"form-control\" id=\"name\" \r\n                             [(ngModel)]=\"correlativo.year\" name=\"year\" #year=\"ngModel\" required />\r\n                             <span *ngIf=\"!year.valid && year.touched\" class=\"text-alert\">\r\n                                     *Fecha requerida.\r\n                             </span>\r\n                         <!--<div [hidden]=\"name?.valid || name?.pristine\" class=\"text-alert\">\r\n                             kjkn\r\n                         </div>-->\r\n                     </div>\r\n                     <div class=\"form-group col-sm-8\" style=\"text-align:center \">\r\n                         <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addCorrelative.form.valid\">Registrar</button>\r\n                         <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\r\n                      </div>\r\n                 </form>\r\n             </div>\r\n         </div>\r\n       </div> \r\n     </div>\r\n </div>\r\n"

/***/ }),

/***/ "./src/app/correlative/add-correlative/add-correlative.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCorrelativeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modelo_correlativo__ = __webpack_require__("./src/app/modelo/correlativo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modelo_receipts__ = __webpack_require__("./src/app/modelo/receipts.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddCorrelativeComponent = /** @class */ (function () {
    function AddCorrelativeComponent(_peticionesService, router, route) {
        this._peticionesService = _peticionesService;
        this.router = router;
        this.route = route;
        this.receipt = new __WEBPACK_IMPORTED_MODULE_4__modelo_receipts__["a" /* Receipt */](1233, 1000, "recivo de caja");
        this.correlativo = new __WEBPACK_IMPORTED_MODULE_1__modelo_correlativo__["a" /* Correlativo */](null, null, this.receipt);
    }
    AddCorrelativeComponent.prototype.ngOnInit = function () {
    };
    AddCorrelativeComponent.prototype.guardar = function () {
        // console.log(this.correlativo);
        this._peticionesService.addCorrelative(this.correlativo).subscribe(function (response) {
            //this.router.navigate(['/home/ejecutivo/']); 
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    AddCorrelativeComponent.prototype.cancel = function () {
        this.router.navigate(['home/events']);
    };
    AddCorrelativeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-correlative',
            template: __webpack_require__("./src/app/correlative/add-correlative/add-correlative.component.html"),
            styles: [__webpack_require__("./src/app/correlative/add-correlative/add-correlative.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], AddCorrelativeComponent);
    return AddCorrelativeComponent;
}());



/***/ }),

/***/ "./src/app/ejecutivo/add-ejecutivo/add-ejecutivo.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n  \r\n  .text-alert{\r\n    color:#dd4b39;\r\n}"

/***/ }),

/***/ "./src/app/ejecutivo/add-ejecutivo/add-ejecutivo.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"content-wrapper\">\r\n    <br>\r\n    <div class=\"content\">\r\n  \r\n  \r\n   \r\n    <div class=\"box box-primary\">\r\n  \r\n  <div class=\"container\">\r\n      <div [hidden]=\"submitted\">\r\n        <h1>Registrar Ejecutivo</h1>\r\n        <form (ngSubmit)=\"onSubmit()\" #addEjecutivo=\"ngForm\" >\r\n          <div class=\"form-group col-sm-8\">\r\n            <label for=\"name\">Nombres</label>\r\n            <!-- <input type=\"text\" pattern=\"[a-zA-Z]{3,10}[ ]{0,1}[a-zA-Z]{0,10}\" class=\"form-control\" id=\"name\" -->\r\n            <input type=\"text\" pattern=\"[a-zA-ZñÑáéíóúÁÉÍÓÚ]{3,20}[ ]{0,1}[a-zA-ZñÑáéíóúÁÉÍÓÚ]{0,20}\" class=\"form-control\" id=\"name\"\r\n\r\n                   required\r\n                   [(ngModel)]=\"model.name\" name=\"name\"\r\n                   #name=\"ngModel\"\r\n                   >\r\n            <div [hidden]=\"name?.valid || name?.pristine\"\r\n                 class=\"text-alert\">\r\n              *Nombre es invalido\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-sm-8\">\r\n            <label for=\"lastname\">Apellidos</label>\r\n            <!-- <input type=\"text\" pattern=\"[a-zA-Z]{3,20}[ ]{0,1}[a-zA-Z]{0,20}\" class=\"form-control\" id=\"lastname\" -->\r\n            <input type=\"text\" pattern=\"[a-zA-ZñÑáéíóúÁÉÍÓÚ]{3,20}[ ]{0,1}[a-zA-ZñÑáéíóúÁÉÍÓÚ]{0,20}\" class=\"form-control\" id=\"lastname\"\r\n\r\n                    required\r\n                   [(ngModel)]=\"model.lastname\" name=\"lastname\"\r\n                   #lastname=\"ngModel\">\r\n            <div [hidden]=\"lastname?.valid || lastname?.pristine\"\r\n            class=\"text-alert\">\r\n            *Apellido es invalido\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-sm-8\">\r\n            <label for=\"cell\">Celular</label>\r\n            <!-- <input type=\"number\" pattern=\"[6-7][0-9]{7}\" class=\"form-control\" id=\"cell\" -->\r\n            <input type=\"number\" pattern=\"[6-7][0-9]{7}\" class=\"form-control\" id=\"cell\"\r\n\r\n                   required\r\n                   [(ngModel)]=\"model.cell\" name=\"cell\"\r\n                   #cell=\"ngModel\">\r\n            <div [hidden]=\"cell?.valid || cell?.pristine\"\r\n            class=\"text-alert\">\r\n            *Celular es invalido\r\n            </div>\r\n          </div>\r\n  \r\n          <div class=\"form-group col-sm-8\">\r\n              <label for=\"correo\">Correo</label>\r\n              <!-- <input type=\"correo\" pattern=\"[a-zA-Z.0-9]*[@][a-z]{3,15}[.][a-z]{3,15}\" class=\"form-control\" id=\"correo\" -->\r\n              <input type=\"correo\" pattern=\"[a-zA-Z.0-9_-]{1,30}[@][a-z]{3,15}[.][a-zA-Z]{2,15}\" class=\"form-control\" id=\"correo\"\r\n\r\n                    required\r\n                     [(ngModel)]=\"model.correo\" name=\"correo\"\r\n                     #correo=\"ngModel\">\r\n              <div [hidden]=\"correo?.valid || correo?.pristine\"\r\n              class=\"text-alert\">\r\n              *email es invalido\r\n              </div>\r\n            </div>\r\n        \r\n            \r\n            <div class=\"form-group col-sm-8\">\r\n                    <label for=\"rol\">Rol</label>\r\n                    <select class=\"form-control\" id=\"rol\"\r\n                            required\r\n                            [(ngModel)]=\"model.rol\" name=\"rol\"\r\n                            #rol=\"ngModel\">\r\n                      <option *ngFor=\"let ro of roles\" [value]=\"ro._id\">{{ro.name}}</option>\r\n                    </select>\r\n                    <div [hidden]=\"rol.valid || rol.pristine\" class=\"text-alert\">\r\n                      *Rol es requerido\r\n                    </div>\r\n            </div>\r\n           \r\n\r\n            <div class=\"form-group col-sm-8\">\r\n                    <label for=\"offices\">Sucursal</label>\r\n                    <select class=\"form-control\" id=\"offices\"\r\n                            required\r\n                            [(ngModel)]=\"model.offices\" name=\"offices\"\r\n                            #offices=\"ngModel\">\r\n                      <option *ngFor=\"let sucur of sucursales\" [value]=\"sucur._id\">{{sucur.name}}</option>\r\n                    </select>\r\n                    <div [hidden]=\"offices.valid || offices.pristine\" class=\"text-alert\">\r\n                            *Sucursal es requerido\r\n                    </div>\r\n            </div>\r\n\r\n            <div class=\"form-group col-sm-8\">\r\n                    <label for=\"cartera\">Carteras libres</label>\r\n                    <select class=\"form-control\" id=\"cartera\"\r\n                            required\r\n                            [(ngModel)]=\"model.cartera\" name=\"cartera\"\r\n                            #cartera=\"ngModel\">\r\n                      <option *ngFor=\"let carte of carteras\" [value]=\"carte._id\">{{carte.name}}</option>\r\n                    </select>\r\n                    <div [hidden]=\"cartera.valid || cartera.pristine\" class=\"text-alert\">\r\n                           *Cartera es requerido\r\n                    </div>\r\n            </div>\r\n            \r\n            <div class=\"form-group col-sm-8\">\r\n\r\n                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addEjecutivo.form.valid\" >Registrar</button>\r\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\r\n            </div>\r\n\r\n     \r\n          \r\n     \r\n        </form>\r\n      </div>\r\n     \r\n    </div>\r\n  \r\n    </div>\r\n  \r\n  </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/ejecutivo/add-ejecutivo/add-ejecutivo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEjecutivoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global__ = __webpack_require__("./src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modelo_Ejecutivo__ = __webpack_require__("./src/app/modelo/Ejecutivo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddEjecutivoComponent = /** @class */ (function () {
    function AddEjecutivoComponent(_peticionesService, router, route) {
        this._peticionesService = _peticionesService;
        this.router = router;
        this.route = route;
        /////////////////////////////////////////////////
        this.model = new __WEBPACK_IMPORTED_MODULE_4__modelo_Ejecutivo__["a" /* Ejecutivo */](__WEBPACK_IMPORTED_MODULE_3__services_global__["b" /* Identity */]._id, "", "", "", true, undefined, "", "", "", "");
        /////////////////////////////////////////////////
        this.submitted = false;
    }
    Object.defineProperty(AddEjecutivoComponent.prototype, "diagnostic", {
        // model=new Ejecutivo();
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    AddEjecutivoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._peticionesService.getCarterasLibres().subscribe(function (response) {
            _this.carteras = response;
            // console.log(this.carteras);
        });
        this._peticionesService.getSucursales().subscribe(function (response) {
            _this.sucursales = response;
            // console.log(this.sucursales)
        });
        this._peticionesService.getRoles().subscribe(function (response) {
            _this.roles = response;
            // console.log(this.roles);
        });
    };
    AddEjecutivoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // console.log(this.model);
        this._peticionesService.addUser(this.model).subscribe(function (response) {
            _this.newUser = response;
            // console.log(this.newUser);
            _this.findCartera();
            // this.MessageEvent.emit();
            _this.router.navigate(['/home/ejecutivo/']);
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    AddEjecutivoComponent.prototype.findCartera = function () {
        var _this = this;
        this.carteraSeleccionada = this.model.cartera;
        // console.log(this.carteraSeleccionada);
        this._peticionesService.getCartera(this.carteraSeleccionada).subscribe(function (result) {
            _this.carteraObject = result;
            console.log(_this.carteraObject);
            _this.asignarCartera();
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    AddEjecutivoComponent.prototype.asignarCartera = function () {
        this.carteraObject.user = this.newUser._id;
        this.carteraObject.active = true;
        console.log(this.carteraObject);
        this._peticionesService.updateCartera(this.carteraObject).subscribe(function (result) {
            var res = result;
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    AddEjecutivoComponent.prototype.cancel = function () {
        this.router.navigate(['home/ejecutivo']);
    };
    AddEjecutivoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-ejecutivo',
            template: __webpack_require__("./src/app/ejecutivo/add-ejecutivo/add-ejecutivo.component.html"),
            styles: [__webpack_require__("./src/app/ejecutivo/add-ejecutivo/add-ejecutivo.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], AddEjecutivoComponent);
    return AddEjecutivoComponent;
}());



/***/ }),

/***/ "./src/app/ejecutivo/edit-ejecutivo/edit-ejecutivo.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n  \r\n  .text-alert{\r\n    color:#dd4b39;\r\n}"

/***/ }),

/***/ "./src/app/ejecutivo/edit-ejecutivo/edit-ejecutivo.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"content-wrapper\">\r\n    <br>\r\n    <div class=\"content\">\r\n   \r\n    <div class=\"box box-primary\">\r\n  \r\n  <div class=\"container\">\r\n      <div >\r\n        <h1>Editar Ejecutivo</h1>\r\n        <form (ngSubmit)=\"onSubmit()\" #editEjecutivo=\"ngForm\" class=\"\">\r\n          <div class=\"form-group col-sm-8\">\r\n            <label for=\"name\">Nombres</label>\r\n            <!-- <input type=\"text\" pattern=\"[a-zA-Z]{1,10}[ ]{0,1}[a-zA-Z]{0,10}\" class=\"form-control\" id=\"name\" -->\r\n            <input type=\"text\" pattern=\"[a-zA-ZñÑáéíóúÁÉÍÓÚ]{3,20}[ ]{0,1}[a-zA-ZñÑáéíóúÁÉÍÓÚ]{0,20}\" class=\"form-control\" id=\"name\"\r\n                   \r\n                  required\r\n                   [(ngModel)]=\"ejecutivoName\" name=\"name\" \r\n                   #name=\"ngModel\"\r\n                   >\r\n            <div [hidden]=\"name?.valid || name?.pristine\"\r\n                 class=\"text-alert\">\r\n              *El Nombre es inválido\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-sm-8\">\r\n            <label for=\"lastname\">Apellidos</label>\r\n            <input type=\"text\" pattern=\"[a-zA-ZñÑáéíóúÁÉÍÓÚ]{3,20}[ ]{0,1}[a-zA-ZñÑáéíóúÁÉÍÓÚ]{0,20}\" class=\"form-control\" id=\"lastname\"\r\n                   required\r\n                   [(ngModel)]=\"ejecutivoLastName\" name=\"lastname\"\r\n                   #lastname=\"ngModel\">\r\n            <div [hidden]=\"lastname?.valid || lastname?.pristine\"\r\n            class=\"text-alert\">\r\n            *El Apellido es inválido\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-sm-8\">\r\n            <label for=\"cell\">Celular</label>\r\n            <input type=\"number\" pattern=\"[6-7][0-9]{7}\" class=\"form-control\" id=\"cell\"\r\n                   required\r\n                   [(ngModel)]=\"ejecutivoCell\" name=\"cell\"\r\n                   #cell=\"ngModel\">\r\n            <div [hidden]=\"cell?.valid || cell?.pristine\"\r\n            class=\"text-alert\">\r\n            *El Celular es inválido\r\n            </div>\r\n          </div>\r\n  \r\n          <div class=\"form-group col-sm-8\">\r\n              <label for=\"correo\">Correo</label>\r\n              <input type=\"correo\" pattern=\"[a-zA-Z.0-9_-]{1,30}[@][a-z]{3,15}[.][a-zA-Z]{2,15}\" class=\"form-control\" id=\"correo\"\r\n                     required\r\n                     [(ngModel)]=\"ejecutivoCorreo\" name=\"correo\"\r\n                     #correo=\"ngModel\">\r\n              <div [hidden]=\"correo?.valid || correo?.pristine\"\r\n              class=\"text-alert\">\r\n              *El Correo es inválido\r\n              </div>\r\n            </div>\r\n           \r\n            <div class=\"form-group col-sm-8\">\r\n                    <label for=\"rol\"> Rol</label>\r\n                    <select class=\"form-control\" id=\"rol\"\r\n                            required\r\n                            [(ngModel)]=\"ejecutivoRol\" name=\"rol\"\r\n                            #rol=\"ngModel\">\r\n                      <option *ngFor=\"let ro of roles\" [value]=\"ro._id\">{{ro.name}}</option>\r\n                    </select>\r\n                    <div [hidden]=\"rol.valid || rol.pristine\" class=\"text-alert\">\r\n                        *El Rol es requerido\r\n                    </div>\r\n            </div>\r\n           \r\n\r\n            <div class=\"form-group col-sm-8\">\r\n                    <label for=\"offices\">Sucursal</label>\r\n                    <select class=\"form-control\" id=\"offices\"\r\n                            required\r\n                            [(ngModel)]=\"ejecutivoOffice\" name=\"offices\"\r\n                            #offices=\"ngModel\">\r\n                      <option *ngFor=\"let sucur of sucursales\" [value]=\"sucur._id\">{{sucur.name}}</option>\r\n                    </select>\r\n                    <div [hidden]=\"offices.valid || offices.pristine\" class=\"text-alert\">\r\n                        *La Sucursal es requerido\r\n                    </div>\r\n            </div>\r\n\r\n            <div class=\"form-group col-sm-8\">\r\n                    <label for=\"cartera\">Cartera</label>\r\n                    <select class=\"form-control\" id=\"cartera\"\r\n                            required\r\n                            [(ngModel)]=\"ejecutivoCartera\" name=\"cartera\"\r\n                            #cartera=\"ngModel\">\r\n                      <option *ngFor=\"let carte of carteras\" [value]=\"carte._id\">{{carte.name}}</option>\r\n                    </select>\r\n                    <div [hidden]=\"cartera?.valid || cartera?.pristine\" class=\"text-alert\">\r\n                        *La Cartera es requerido\r\n                    </div>\r\n            </div>\r\n\r\n            <div class=\"form-group col-sm-8\">\r\n                <label for=\"estado\">Elige el nuevo estado del Ejecutivo</label>\r\n                                \r\n                <fieldset>\r\n                    <legend></legend>\r\n                    <label class=\"radio-inline\">\r\n                        <input type=\"radio\" name=\"status\"  value=true (click)=\"cambiarActive(true)\"  [defaultChecked]=\"ejecutivoActive\"> Activo</label>\r\n                    <label class=\"radio-inline\">\r\n                        <input type=\"radio\" name=\"status\"  value=false (click)=\"cambiarActive(false)\" [defaultChecked]=\"!ejecutivoActive\"> Inactivo</label>\r\n                </fieldset>\r\n               \r\n        </div>\r\n        <div class=\"form-group col-sm-8\" style=\"text-align:center \">\r\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!editEjecutivo.form.valid\">Guardar</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\r\n        </div>\r\n        </form>\r\n      </div>\r\n     \r\n               \r\n    </div>\r\n  \r\n    </div>\r\n  \r\n  </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/ejecutivo/edit-ejecutivo/edit-ejecutivo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEjecutivoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditEjecutivoComponent = /** @class */ (function () {
    function EditEjecutivoComponent(_peticionesService, route, router) {
        this._peticionesService = _peticionesService;
        this.route = route;
        this.router = router;
        this.listacarteras = [];
    }
    EditEjecutivoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.ejecutivoId = params.active;
            _this.findEjecutivo2();
            // this.findCarteraFromEjecutivo(); 
        });
        this._peticionesService.getCarterasLibres().subscribe(function (response) {
            _this.carteras = response;
            _this.listacarteras = _this.carteras;
            // console.log(this.carteras);
        });
        this._peticionesService.getSucursales().subscribe(function (response) {
            _this.sucursales = response;
            // console.log(this.sucursales)
        });
        this._peticionesService.getRoles().subscribe(function (response) {
            _this.roles = response;
            // console.log(this.roles);
        });
    };
    EditEjecutivoComponent.prototype.findEjecutivo2 = function () {
        var _this = this;
        this._peticionesService.getEjecutivoToEdit(this.ejecutivoId).subscribe(function (response) {
            _this.ejecutivo = response;
            _this.ejecutivoActive = _this.ejecutivo.active;
            _this.ejecutivoName = _this.ejecutivo.name;
            _this.ejecutivoLastName = _this.ejecutivo.lastname;
            _this.ejecutivoCell = _this.ejecutivo.cell;
            _this.ejecutivoCorreo = _this.ejecutivo.correo;
            _this.ejecutivoOffice = _this.ejecutivo.offices;
            _this.ejecutivoRol = _this.ejecutivo.rol;
            _this.ejecutivoCartera = _this.ejecutivo.cartera._id;
            _this.carteraAnti = _this.ejecutivo.cartera._id;
            _this.listacarteras.push(_this.ejecutivo.cartera);
            // console.log(this.ejecutivo.cartera.name);
            // console.log(this.ejecutivo)
        });
    };
    // findEjecutivo(){
    //    this._peticionesService.getOneUser(this.ejecutivoId).subscribe(
    //       result =>{
    //         this.ejecutivo=result;
    //         console.log(this.ejecutivo);
    //         this.ejecutivoActive=this.ejecutivo.active;
    //         this.ejecutivoName=this.ejecutivo.name;
    //         this.ejecutivoLastName=this.ejecutivo.lastname;
    //         this.ejecutivoCell=this.ejecutivo.cell;
    //         this.ejecutivoCorreo=this.ejecutivo.correo;
    //         this.ejecutivoOffice=this.ejecutivo.offices;
    //         this.ejecutivoRol=this.ejecutivo.rol;
    //         this._peticionesService.getCarteraFromUserId(this.ejecutivoId).subscribe(result=>{
    //           this.carteraActual=result;
    //           this.ejecutivoCartera=this.carteraActual;
    //           this.listacarteras.push(this.carteraActual);
    //           console.log(this.carteras);
    //       })
    //       },
    //       error =>{
    //         console.log(<any>error);
    //       });
    // }
    EditEjecutivoComponent.prototype.cambiarActive = function (i) {
        this.ejecutivoActive = i;
    };
    EditEjecutivoComponent.prototype.saveEjecutivo = function () {
        var _this = this;
        // console.log(this.ejecutivo);
        this.ejecutivo.active = this.ejecutivoActive;
        this.ejecutivo.name = this.ejecutivoName;
        this.ejecutivo.lastname = this.ejecutivoLastName;
        this.ejecutivo.cartera = this.ejecutivoCartera;
        this.carteraActual = this.ejecutivoCartera;
        this.ejecutivo.cell = this.ejecutivoCell;
        this.ejecutivo.correo = this.ejecutivoCorreo;
        this.ejecutivo.offices = this.ejecutivoOffice;
        this.ejecutivo.rol = this.ejecutivoRol;
        // console.log(this.ejecutivo);
        this._peticionesService.updateUser(this.ejecutivo).subscribe(function (result) {
            var res = result;
            // console.log(res)
            _this.reasignarCartera();
            // this.findCartera();
            _this.router.navigate(['home/ejecutivo']);
            alert('Se guardo correctamente el nuevo estado');
        }, function (error) {
            console.log(error);
            alert('Error al guardar');
        });
    };
    EditEjecutivoComponent.prototype.reasignarCartera = function () {
        var carteraObjEjecutivo = {};
        // console.log(this.carteraAnti);
        carteraObjEjecutivo.carteraAntigua = this.carteraAnti;
        carteraObjEjecutivo.cartera = this.carteraActual;
        carteraObjEjecutivo.ejecutivo = this.ejecutivoId;
        // console.log(carteraObjEjecutivo);
        this._peticionesService.reasignarCartera(carteraObjEjecutivo).subscribe(function (res) {
        });
    };
    //   findCarteraFromEjecutivo(){
    //     this._peticionesService.getCarteraFromUserId(this.ejecutivoId).subscribe(result=>{
    //         this.carteraActual=result;
    //         this.carteras.push(this.carteraActual);
    //         console.log(this.carteraActual)
    //         this.ejecutivoCartera=result;
    //         console.log(this.carteras);
    //     })
    //  }
    EditEjecutivoComponent.prototype.onSubmit = function () {
        this.saveEjecutivo();
    };
    EditEjecutivoComponent.prototype.cancel = function () {
        this.router.navigate(['home/ejecutivo']);
    };
    EditEjecutivoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-ejecutivo',
            template: __webpack_require__("./src/app/ejecutivo/edit-ejecutivo/edit-ejecutivo.component.html"),
            styles: [__webpack_require__("./src/app/ejecutivo/edit-ejecutivo/edit-ejecutivo.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], EditEjecutivoComponent);
    return EditEjecutivoComponent;
}());



/***/ }),

/***/ "./src/app/ejecutivo/ejecutivo.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ejecutivo/ejecutivo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n\r\n  <div class=\"content\">\r\n\r\n    <div class=\"box box-primary\">\r\n\r\n        <section class=\"content-header\">\r\n            <h1>\r\n               Ejecutivos\r\n               <small>Editar</small>\r\n            </h1>\r\n         </section>\r\n      <section class=\"content\">\r\n            <a class=\"btn btn-primary a\" (click)=\"addEjecutivo()\">registrar ejecutivo</a>\r\n           \r\n         <table class=\"table table-hover\" >\r\n            <thead>\r\n               <tr>\r\n                  <th>Nombre</th>\r\n                  <th>Estado</th>\r\n                  <th colspan=\"3\">Informacion</th>\r\n                     \r\n                  \r\n               </tr>\r\n            </thead>\r\n            <tbody> \r\n               <tr *ngFor=\"let ejecutivo of ejecutivos\">\r\n                  <td>{{ ejecutivo.name }}</td>\r\n                  <td *ngIf=\"ejecutivo.active==true\">Activo</td>\r\n                  <td *ngIf=\"ejecutivo.active==false\">Inactivo</td>\r\n                  <td>\r\n                     <a class=\"btn btn-primary\" (click)=\"infoEjecutivo(ejecutivo._id)\" >ver</a>\r\n                  </td>\r\n                  <td>\r\n                    <a class=\"btn btn-warning\" (click)=\"editEjecutivo(ejecutivo._id)\">EDITAR</a>\r\n                 </td>\r\n                 <td>\r\n                  <a class=\"btn btn-warning\" (click)=\"personsOfEjecutivo(ejecutivo._id)\">persons</a>\r\n                </td>\r\n                 <td>\r\n                    <!-- <a class=\"btn btn-danger\" (click)=\"deleteEjecutivo(ejecutivo._id)\" >eliminar</a> -->\r\n                 </td>\r\n               </tr>\r\n            </tbody>\r\n         </table> \r\n      </section>\r\n    </div>\r\n  </div>\r\n   \r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ejecutivo/ejecutivo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EjecutivoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EjecutivoComponent = /** @class */ (function () {
    function EjecutivoComponent(route, router, _peticionesService) {
        this.route = route;
        this.router = router;
        this._peticionesService = _peticionesService;
    }
    EjecutivoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._peticionesService.getUser().subscribe(function (result) {
            _this.ejecutivos = result;
            //  console.log(this.ejecutivos); 
        }, function (error) {
            console.log(error);
        });
    };
    EjecutivoComponent.prototype.editEjecutivo = function (_active) {
        //console.log("EjecutivoComponent");
        this.router.navigate(['/home/ejecutivo/edit', _active]);
        //console.log("router.navigate");
    };
    EjecutivoComponent.prototype.addEjecutivo = function () {
        this.router.navigate(['/home/ejecutivo/add']);
    };
    EjecutivoComponent.prototype.infoEjecutivo = function (_id) {
        // console.log(_id);
        this.router.navigate(['/home/ejecutivo', _id]);
    };
    EjecutivoComponent.prototype.personsOfEjecutivo = function (_id) {
        this.router.navigate(['/home/personsOfEjecutivo', _id]);
    };
    EjecutivoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ejecutivo',
            template: __webpack_require__("./src/app/ejecutivo/ejecutivo.component.html"),
            styles: [__webpack_require__("./src/app/ejecutivo/ejecutivo.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]])
    ], EjecutivoComponent);
    return EjecutivoComponent;
}());



/***/ }),

/***/ "./src/app/ejecutivo/info-ejecutivo/info-ejecutivo.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ejecutivo/info-ejecutivo/info-ejecutivo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n  \r\n   <section class=\"content\">\r\n\r\n      <section>\r\n       <div class=\"row user-infos cyruxx\">\r\n           <div class=\"col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xs-offset-0 col-sm-offset-0 col-md-offset-1 col-lg-offset-1\">\r\n               <div class=\"panel panel-primary\">\r\n                   <div class=\"panel-heading\">\r\n                       <h3 class=\"panel-title\">Informacion de {{ejecutivo?.name}}</h3>\r\n                   </div>\r\n                   <div class=\"panel-body\">\r\n                       <div class=\"row\">\r\n                          \r\n                           <div class=\"col-xs-10 col-sm-10 hidden-md hidden-lg\">\r\n                               <strong>{{ejecutivo?.name}}</strong><br>\r\n                               <dl>\r\n                                  \r\n                                   <dt>Nombres</dt>\r\n                                   <dd>{{ejecutivo?.name}}</dd>\r\n                                   <dt>Apellidos:</dt>\r\n                                   <dd>{{ejecutivo?.lastname }}</dd>\r\n                                   <dt>Celular</dt>\r\n                                   <dd>{{ejecutivo?.cell}}</dd>\r\n                                   <dt>Correo</dt>\r\n                                   <dd>{{ejecutivo?.correo}}</dd>\r\n                                   <dt>rol</dt>\r\n                                   <dd>{{rolUser?.name}}</dd>\r\n                                   <dt>Sucursal</dt>\r\n                                   <dd>{{sucursalReturned?.name}}</dd>\r\n                                   <dt>cartera</dt>\r\n                                   <dd>{{carteraReturned?.name}}</dd>\r\n                                   \r\n                               </dl>\r\n                           </div>\r\n                           <div class=\" col-md-9 col-lg-9 hidden-xs hidden-sm\">\r\n                               <strong>{{ejecutivo?.name}}</strong><br>\r\n                               <table class=\"table table-user-information\">\r\n                                   <tbody>\r\n                                 \r\n                                   <tr>\r\n                                       <td>Nombres</td>\r\n                                       <td>{{ejecutivo?.name}}</td>\r\n                                   </tr>\r\n                                   <tr>\r\n                                    <td>Apellidos</td>\r\n                                    <td>{{ejecutivo?.lastname}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Celular</td>\r\n                                    <td>{{ejecutivo?.cell}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Correo</td>\r\n                                    <td>{{ejecutivo?.correo}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>rol</td>\r\n                                    <td>{{rolUser?.name}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Sucursal</td>\r\n                                    <td>{{sucursalReturned?.name}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>cartera</td>\r\n                                    <td>{{carteraReturned?.name}}</td>\r\n                                </tr>\r\n\r\n                                  \r\n                                   </tbody>\r\n                               </table>\r\n                           </div>\r\n                       </div>\r\n                   </div>\r\n                   \r\n               </div>\r\n           </div>\r\n       </div>\r\n      </section>\r\n     \r\n      \r\n   </section>\r\n\r\n   <div class=\"\" style=\"text-align: center\">\r\n    <button class=\"btn btn-primary\" (click)=\"goEjecutivoList()\" > Aceptar</button>\r\n\r\n   </div>\r\n   <!-- <router-outlet></router-outlet> -->\r\n</div>"

/***/ }),

/***/ "./src/app/ejecutivo/info-ejecutivo/info-ejecutivo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoEjecutivoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfoEjecutivoComponent = /** @class */ (function () {
    function InfoEjecutivoComponent(_peticionesService, route, router) {
        this._peticionesService = _peticionesService;
        this.route = route;
        this.router = router;
    }
    InfoEjecutivoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._peticionesService.getCarteras().subscribe(function (response) {
            _this.carteras = response;
            // console.log(this.carteras);
        });
        this._peticionesService.getSucursales().subscribe(function (response) {
            _this.sucursales = response;
            // console.log(this.sucursales)
        });
        this.queryEjecutivoId();
        this.findEjecutivo();
    };
    InfoEjecutivoComponent.prototype.queryEjecutivoId = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.ejecutivoId = params.id;
            // console.log(this.ejecutivo);
        });
    };
    InfoEjecutivoComponent.prototype.findEjecutivo = function () {
        var _this = this;
        this._peticionesService.getOneUser(this.ejecutivoId).subscribe(function (result) {
            _this.ejecutivo = result;
            //  console.log(this.ejecutivo);
            _this.findRol(_this.ejecutivo.rol);
        }, function (error) {
            console.log(error);
        });
    };
    InfoEjecutivoComponent.prototype.findRol = function (idRol) {
        //  console.log(idRol);
        var _this = this;
        this._peticionesService.getRole(idRol).subscribe(function (result) {
            _this.rolUser = result;
            // console.log(this.rolUser)
            _this.findCartera(_this.ejecutivoId);
        }, function (error) {
            console.log(error);
        });
    };
    InfoEjecutivoComponent.prototype.findCartera = function (ejecutivoId) {
        var _this = this;
        this._peticionesService.getCarteraFromUserId(ejecutivoId).subscribe(function (result) {
            _this.carteraReturned = result;
            // console.log(this.carteraReturned)
            _this.findSucursal(_this.ejecutivo.offices);
        }, function (error) {
            console.log(error);
        });
    };
    InfoEjecutivoComponent.prototype.findSucursal = function (sucursalId) {
        var _this = this;
        // console.log(sucursalId);
        this._peticionesService.getSucursal(sucursalId).subscribe(function (result) {
            _this.sucursalReturned = result;
            // console.log(this.sucursalReturned)
        }, function (error) {
            console.log(error);
        });
    };
    InfoEjecutivoComponent.prototype.goEjecutivoList = function () {
        // this.router.navigate(['home/ejecutivo']);
        window.history.back();
    };
    InfoEjecutivoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-info-ejecutivo',
            template: __webpack_require__("./src/app/ejecutivo/info-ejecutivo/info-ejecutivo.component.html"),
            styles: [__webpack_require__("./src/app/ejecutivo/info-ejecutivo/info-ejecutivo.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], InfoEjecutivoComponent);
    return InfoEjecutivoComponent;
}());



/***/ }),

/***/ "./src/app/ejecutivo/persons-of-ejecutivo/persons-of-ejecutivo.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ejecutivo/persons-of-ejecutivo/persons-of-ejecutivo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n  <div class=\"content\">\r\n\r\n    <div class=\"box box-primary\">\r\n        <section class=\"content\">\r\n            <div>     \r\n                <ol class=\"breadcrumb\">\r\n                    <li><a class=\"btn btn-primary\" [routerLink]=\"['/home/persons/add']\"><i class=\"fa fa-book\"></i>Registrar Persona</a></li>\r\n                    <li><app-control-asistance></app-control-asistance></li>\r\n                </ol>\r\n            </div> \r\n           \r\n           <table class=\"table\">\r\n                 <th>Filtros Personas</th> \r\n           </table>\r\n         \r\n             <div>\r\n            <div class=\"filter-wrap\">\r\n              <div class=\"col-lg-1\">Buscar:</div>\r\n              <input [(ngModel)]=\"searchText\" placeholder=\"Nombre Persona\" class=\"filter-input\">\r\n              <span class=\"filter-clear\" *ngIf=\"searchText.length>0\" (click)=\"clearFilter()\">X</span>\r\n            </div>\r\n          </div>\r\n           <table class=\"table table-hover\" >\r\n              <thead >\r\n                 <tr>\r\n                    <th>Nombre</th>\r\n                    <th>Apellido</th>\r\n                    <th>Telefono</th>\r\n                    <th>Whatsapp Group</th>\r\n                    <th>Ciudad</th>\r\n                    <th>Ocupacion</th>\r\n                    <th colspan=\"2\">Opciones</th>\r\n                 </tr>\r\n              </thead>\r\n              <tbody> \r\n                 <tr *ngFor=\"let i of listado_personas  | filter : searchText\">\r\n                    <td>{{ i.first_name }}</td>\r\n                    <th>{{i.last_name}}</th>\r\n                    <td>{{ i.cellphone }}</td>\r\n                    <td>{{i.whatsapp_group}}</td>\r\n                    <td>{{i.city}}</td>\r\n                    <td>{{ i.ocupation }}</td>\r\n                  \r\n                    <!-- <td>\r\n                       <a class=\"btn btn-primary\" (click)=\"edit(i._id)\">EDITAR</a>\r\n                    </td> -->\r\n                 </tr>\r\n              </tbody>\r\n           </table>\r\n           \r\n        </section>\r\n\r\n    </div>\r\n  </div>\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ejecutivo/persons-of-ejecutivo/persons-of-ejecutivo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonsOfEjecutivoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_persona_service__ = __webpack_require__("./src/app/services/persona.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonsOfEjecutivoComponent = /** @class */ (function () {
    function PersonsOfEjecutivoComponent(router, route, _personaService, _peticionesService) {
        this.router = router;
        this.route = route;
        this._personaService = _personaService;
        this._peticionesService = _peticionesService;
        this.searchText = "";
        this.color = 'rojo';
    }
    PersonsOfEjecutivoComponent.prototype.ngOnInit = function () {
        this.queryEjecutivoId();
    };
    PersonsOfEjecutivoComponent.prototype.queryEjecutivoId = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.ejecutivoId = params.id;
            // console.log(this.ejecutivoId);
            _this.queryCartera();
        });
    };
    PersonsOfEjecutivoComponent.prototype.findPersons = function () {
        var _this = this;
        this._peticionesService.getPersonsOfCartera(this.cartera._id).subscribe(function (result) {
            _this.listado_personas = result;
            // console.log(this.listado_personas);
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    PersonsOfEjecutivoComponent.prototype.clearFilter = function () {
        this.searchText = "";
    };
    PersonsOfEjecutivoComponent.prototype.queryCartera = function () {
        var _this = this;
        //console.log(Identity._id)
        this._peticionesService.getCarteraFromUserId(this.ejecutivoId).subscribe(function (result) {
            _this.cartera = result;
            _this.findPersons();
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    PersonsOfEjecutivoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-persons-of-ejecutivo',
            template: __webpack_require__("./src/app/ejecutivo/persons-of-ejecutivo/persons-of-ejecutivo.component.html"),
            styles: [__webpack_require__("./src/app/ejecutivo/persons-of-ejecutivo/persons-of-ejecutivo.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_persona_service__["a" /* PersonaService */], __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__services_persona_service__["a" /* PersonaService */],
            __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]])
    ], PersonsOfEjecutivoComponent);
    return PersonsOfEjecutivoComponent;
}());



/***/ }),

/***/ "./src/app/event/asistencia/asistencia.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n  \r\n  .text-alert{\r\n    color:#dd4b39;\r\n  }"

/***/ }),

/***/ "./src/app/event/asistencia/asistencia.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n    <br>\r\n     <div class=\"content\">\r\n       <div class=\"box box-primary\">\r\n         <div class=\"container \">\r\n             <div [hidden]=\"submitted\">\r\n                 <h1>Asistencia y cobro</h1>\r\n                 <form (ngSubmit)=\"guardar()\" #addAsistance=\"ngForm\" class=\"jumbotron\">\r\n                     <div class=\"form-group col-sm-8\">\r\n                            \r\n                        <!-- <fieldset>\r\n                            <legend>Elige el Modulo del evento de hoy</legend>\r\n                            <label *ngFor=\"let i of modulos\"><input type=\"radio\" name=\"numero\" [(ngModel)]=\"select\" value=0>{{modulos.name}}</label>\r\n                             <label>\r\n                                <input type=\"radio\" name=\"numero\" [(ngModel)]=\"select\" value=0> En duda</label>\r\n                             <label>\r\n                                <input type=\"radio\" name=\"numero\" [(ngModel)]=\"select\" value=1> Inscrito</label>\r\n                             <label>\r\n                                <input type=\"radio\" name=\"numero\" [(ngModel)]=\"select\" value=2> Interesado</label>\r\n                             \r\n                        </fieldset> -->\r\n                          <br>\r\n                          <div class=\"form-group col-sm-6\" style=\"text-align: center\">\r\n                                  <label for=\"monto\" class=\"control-label\" >Monto Cancelado</label>\r\n                                      <input type=\"text\" class=\"form-control\" id=\"monto\" \r\n                                      [(ngModel)]=\"lists.bolivianos\" name=\"monto\" #monto=\"ngModel\" required />\r\n                                      <span *ngIf=\"!monto.valid && monto.touched\" class=\"text-alert\">\r\n                                              *Monto requerido.\r\n                                      </span>\r\n                                  <!-- <div [hidden]=\"first_name?.valid || first_name?.pristine\" class=\"text-alert\">\r\n                                      kjknkasdkjhjask\r\n                                  </div> -->\r\n                              </div>\r\n                              <div class=\"form-group col-sm-6\" style=\"text-align: center\">\r\n                                 <label for=\"receipt\" class=\"control-label\" >Recibo de factura</label>\r\n                                     <input type=\"text\" class=\"form-control\" id=\"receipt\" \r\n                                     [(ngModel)]=\"lists.receipt\" name=\"receipt\" #receipt=\"ngModel\" required />\r\n                                     <span *ngIf=\"!receipt.valid && receipt.touched\" class=\"text-alert\">\r\n                                             *Recivo requerido.\r\n                                     </span>\r\n                                 <!--<div [hidden]=\"name?.valid || name?.pristine\" class=\"text-alert\">\r\n                                     kjkn\r\n                                 </div>-->\r\n                             </div>\r\n                             <br>\r\n                             <div class=\"form-group col-sm-8\">\r\n                                    <label for=\"modulo\">Modulo del Evento de Hoy</label>\r\n                                    <select class=\"form-control\" id=\"modulo\" [(ngModel)]=\"lists.modulars\"\r\n                                            name=\"modulo\" #modulo=\"ngModel\" required >\r\n                                      <option *ngFor=\"let i of modulos\" [value]=\"i._id\">{{i.name}}</option>\r\n                                    </select>\r\n                            </div>\r\n                     </div>\r\n                     <div class=\"form-group col-sm-8\" style=\"text-align:center \">\r\n                        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addAsistance.form.valid\" >Marcar Asistencia</button>\r\n                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\r\n                        <!-- <button type=\"button\" class=\"btn btn-danger\" (click)=\"addPerson.reset()\">Cancelar</button> -->\r\n                    </div>\r\n                 </form>\r\n             </div>\r\n         </div>\r\n       </div> \r\n     </div>\r\n\r\n </div>\r\n"

/***/ }),

/***/ "./src/app/event/asistencia/asistencia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsistenciaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modelo_lists__ = __webpack_require__("./src/app/modelo/lists.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AsistenciaComponent = /** @class */ (function () {
    function AsistenciaComponent(_peticionesService, route, router) {
        this._peticionesService = _peticionesService;
        this.route = route;
        this.router = router;
        this.submitted = false;
        this.lists = new __WEBPACK_IMPORTED_MODULE_3__modelo_lists__["a" /* Lists */](null, 0, '', null, null, '', '', ''); //(bol, dol,receipt,assist,type,per,event,mod)
    }
    AsistenciaComponent.prototype.ngOnInit = function () {
        this.queryModulos();
    };
    AsistenciaComponent.prototype.guardar = function () {
        var _this = this;
        // console.log(this.lists);
        this.lists.events = this.eventId;
        this.lists.person = this.personId;
        this._peticionesService.addAssitance(this.lists).subscribe(function (result) {
            var esperado = result;
            // console.log(esperado);
            alert('Registrado correctamente');
            var _id = _this.eventId;
            _this.router.navigate(['home/event', _id]);
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            alert('Error al registrar Asistencia');
        });
    };
    AsistenciaComponent.prototype.queryModulos = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var arrayIds = params.id.split('-');
            _this.personId = arrayIds[0];
            _this.eventId = arrayIds[1];
            // console.log(this.eventId);
            // console.log('el id del evento ')
        });
        this._peticionesService.getEventModuls(this.eventId).subscribe(//consulta para obt todo modulos
        function (//consulta para obt todo modulos
            result) {
            _this.modulos = result;
            // console.log(this.modulos);
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    AsistenciaComponent.prototype.cancel = function () {
        window.history.back();
    };
    AsistenciaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-asistencia',
            template: __webpack_require__("./src/app/event/asistencia/asistencia.component.html"),
            styles: [__webpack_require__("./src/app/event/asistencia/asistencia.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AsistenciaComponent);
    return AsistenciaComponent;
}());



/***/ }),

/***/ "./src/app/event/control-asistance/control-asistance.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n  \r\n  .text-alert{\r\n    color:#dd4b39;\r\n  }"

/***/ }),

/***/ "./src/app/event/control-asistance/control-asistance.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"modalAddProgram\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n           <div class=\"modal-content\">\r\n              <div class=\"modal-header text-center\">\r\n                 <h4 class=\"modal-title w-100 font-weight-bold\">Asistencia</h4>\r\n                 <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" #close>\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                 </button>\r\n              </div>\r\n     \r\n              <div class=\"modal-body mx-3\">\r\n     \r\n                 <!-- <form (ngSubmit)=\"onSubmit(contactForm);\" #contactForm=\"ngForm\" > -->\r\n                <!-- <div>\r\n                    <h3>Elige el estado de la Persona</h3>\r\n                         <label>\r\n                            <input type=\"radio\" name=\"numero\" [(ngModel)]=\"inscription.state\" value=0> En duda</label>\r\n                         <label>\r\n                            <input type=\"radio\" name=\"numero\" [(ngModel)]=\"inscription.state\" value=1> Inscrito</label>\r\n                         <label>\r\n                            <input type=\"radio\" name=\"numero\" [(ngModel)]=\"inscription.state\" value=2> Interesado</label>\r\n                         <label>\r\n                            <input type=\"radio\" name=\"numero\" [(ngModel)]=\"inscription.state\" value=3> Confirmar</label>\r\n                         <label>\r\n                            <input type=\"radio\" name=\"numero\" [(ngModel)]=\"inscription.state\" value=4> Sin Interes</label>\r\n                         <label>\r\n                            <input type=\"radio\" name=\"numero\" [(ngModel)]=\"inscription.state\" value=5> Proximo Evento</label>\r\n                      \r\n                         </div>\r\n                <div class=\"md-form mb-5\">\r\n                    <label data-error=\"wrong\" data-success=\"right\" for=\"form34\">\r\n                     <i class=\"fa fa-pencil prefix grey-text\"></i> Monto Cancelado</label>\r\n                    <input type=\"number\" class=\"form-control validate\" #nameInput>\r\n                 </div>\r\n                 <br>\r\n                 <div class=\"md-form mb-5\">\r\n                        <label data-error=\"wrong\" data-success=\"right\" for=\"form34\">\r\n                         <i class=\"fa fa-pencil prefix grey-text\"></i> Nro de recibo</label>\r\n                        <input type=\"text\" class=\"form-control validate\" #nameInput>\r\n                </div>\r\n              </div> -->\r\n              <div class=\"modal-footer d-flex justify-content-center\">\r\n                 <button class=\"btn btn-unique\" (click)=\"save()\">Guardar\r\n                    <i class=\"fa fa-paper-plane-o ml-1\"></i>\r\n                 </button>\r\n              </div>\r\n              <!-- </form> -->\r\n           </div>\r\n        </div>\r\n     </div>\r\n        <a href=\"\" class=\"btn btn-primary btn-rounded mb-4\" data-toggle=\"modal\" data-target=\"#modalAddProgram\">Asistencia</a>\r\n     \r\n"

/***/ }),

/***/ "./src/app/event/control-asistance/control-asistance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlAsistanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ControlAsistanceComponent = /** @class */ (function () {
    function ControlAsistanceComponent(_peticionesService, route, router) {
        this._peticionesService = _peticionesService;
        this.route = route;
        this.router = router;
    }
    ControlAsistanceComponent.prototype.ngOnInit = function () {
        //this.queryModulos();
    };
    ControlAsistanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-control-asistance',
            template: __webpack_require__("./src/app/event/control-asistance/control-asistance.component.html"),
            styles: [__webpack_require__("./src/app/event/control-asistance/control-asistance.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ControlAsistanceComponent);
    return ControlAsistanceComponent;
}());



/***/ }),

/***/ "./src/app/event/event.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/event/event.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n   <section class=\"content\">\r\n      <!-- <app-addPerson (messageEvent)=\"receiveMessage()\"></app-addPerson> -->\r\n      <!-- <a class=\"btn btn-primary\" (click)=\"addPerson()\">Registrar Persona</a> -->\r\n      <!-- <app-persona></app-persona> -->\r\n      <div>\r\n         <ol class=\"breadcrumb\">\r\n            <!-- <br> -->\r\n            <!-- <li>//////////////para evitar errore aun no inscribe///////////////////\r\n               <a class=\"btn btn-primary\" [routerLink]=\"['/home/inscription/'+event._id]\">\r\n                  <i class=\"fa fa-book\"></i>Inscribir Persona</a>\r\n            </li> -->\r\n            <!-- <li><app-control-asistance></app-control-asistance></li> -->\r\n         </ol>\r\n      </div>\r\n      <div>\r\n         <h1>{{event.name}}</h1>\r\n      </div>\r\n      <div class=\"btn-group\" data-toggle=\"buttons\">\r\n\r\n         <label *ngFor=\"let m of modules\" class=\"btn btn-default form-check-label\" (click)=\"filter(m._id)\">\r\n            <input class=\"form-check-input\" type=\"radio\" autocomplete=\"off\"> {{m.name}}\r\n         </label>\r\n\r\n         <!-- <label class=\"btn btn-default form-check-label\">\r\n            <input class=\"form-check-input\" type=\"radio\" autocomplete=\"off\"> radio 2\r\n         </label>\r\n\r\n         <label class=\"btn btn-default form-check-label\">\r\n            <input class=\"form-check-input\" type=\"radio\" autocomplete=\"off\"> radio 3\r\n         </label> -->\r\n\r\n      </div>\r\n\r\n      <table class=\"table table-hover\">\r\n         <thead>\r\n            <tr>\r\n               <th>Nombre</th>\r\n               <th>CI</th>\r\n               <th>Celular</th>\r\n               <th>Monto Cancelado</th>\r\n               <th>Perfil</th>\r\n               <th>Asistencia</th>\r\n               <th colspan=\"2\">Opciones</th>\r\n            </tr>\r\n         </thead>\r\n         <tbody>\r\n            <!--<tr *ngFor=\"let i of inscriptions | buscarPersona: busqueda\">-->\r\n            <tr *ngFor=\"let i of states\">\r\n               <td>{{ i.name }}</td>\r\n               <td>{{ i.ci }}</td>\r\n               <td>{{ i.cellphone }}</td>\r\n               <td>{{ i.canceled_price }}</td>\r\n               <td>\r\n                  <a class=\"btn btn-info\" (click)=\"viewProfile(i.persons)\">VER</a>\r\n               </td>\r\n               <td>\r\n                  <!-- <p *ngIf=\"list.assist == 'true'\"> -->\r\n                  <p *ngIf=\"list != null \">\r\n                     <!-- <a class=\" btn btn-success\" (click)=\"butonv(i._id)\">ok</a> -->\r\n                     <a class=\" btn btn-danger\">OK</a>\r\n                  </p>\r\n                  <p *ngIf=\"list == null \">\r\n                     <a class=\" btn btn-danger\">NOT</a>\r\n                  </p>\r\n               </td>\r\n               <td>\r\n                  <!-- <app-editPerson [editPerson]=\"event\"></app-editPerson> -->\r\n                  <a class=\"btn btn-warning\" (click)=\"edit(i.persons)\">EDITAR</a>\r\n                  <a class=\"btn btn-success\" (click)=\"asistence(i.persons)\">Asistand</a>\r\n               </td>\r\n            </tr>\r\n         </tbody>\r\n      </table>\r\n\r\n   </section>\r\n   <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/event/event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventComponent = /** @class */ (function () {
    function EventComponent(route, router, _peticionesService) {
        this.route = route;
        this.router = router;
        this._peticionesService = _peticionesService;
        this.states = [];
    }
    EventComponent.prototype.addPerson = function () {
        this.router.navigate(['home/event/persons/add']);
    };
    EventComponent.prototype.ngOnInit = function () {
        this.queryEventId();
        this.query();
    };
    EventComponent.prototype.ngAfterViewInit = function () {
        // this.controlAssist()
        // this.todos();
    };
    EventComponent.prototype.queryModules = function () {
        var _this = this;
        this._peticionesService.getModulos(this.event.programs).subscribe(function (result) {
            _this.modules = result;
            // console.log(result);
        });
    };
    EventComponent.prototype.receiveMessage = function () {
        this.query();
    };
    EventComponent.prototype.asistence = function (_id) {
        this.personId = _id;
        var idEvenPers = _id + '-' + this.eventId;
        this.router.navigate(['home/event/asistencia', idEvenPers]);
    };
    EventComponent.prototype.controlAssist = function () {
        var _this = this;
        this._peticionesService.getList(this.personId).subscribe(function (result) {
            _this.list = result;
            // console.log(this.list);
            //  if(personList == null){
            //  }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    EventComponent.prototype.butonv = function (_id) {
        if (this.color == 'rojo') {
            this.router.navigate(['home/event/asistencia', _id]);
            this.color = 'verde';
        }
        else {
            this.color = 'rojo';
        }
    };
    EventComponent.prototype.filter = function (modular_id) {
        // console.log(modular_id);
        // solicitar lista de personas inscritas por modulo
    };
    EventComponent.prototype.queryEventId = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.eventId = params.id;
            //    console.log(this.eventId)
        });
    };
    EventComponent.prototype.query = function () {
        var _this = this;
        this._peticionesService.getEventInscriptions(this.eventId).subscribe(function (result) {
            _this.event = result;
            _this.queryModules();
            // console.log(this.event);
            _this.inscriptions = _this.event.inscriptions;
            //prueba total
            var total = _this.event.total;
            //console.log(this.inscriptions);
            _this.todos();
            // console.log(total);
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    EventComponent.prototype.edit = function (personId) {
        // console.log('antes de enviar', personId)
        //this.router.navigate(['home/editPerson', personId + '-' + this.eventId]);
        this.router.navigate(['home/persons/edit', personId]);
    };
    EventComponent.prototype.viewProfile = function (personId) {
        this.router.navigate(['home/profilePerson', personId]);
    };
    EventComponent.prototype.todos = function () {
        for (var i = 0; i <= this.states.length; i++) {
            this.states.pop();
            i = 0;
        }
        for (var _i = 0, _a = this.inscriptions; _i < _a.length; _i++) {
            var i = _a[_i];
            this.states.push(i);
        }
    };
    EventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-event',
            template: __webpack_require__("./src/app/event/event.component.html"),
            styles: [__webpack_require__("./src/app/event/event.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/event/filtro/filtropersona.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { Injectable, Pipe, PipeTransform } from '@angular/core';
//  @Pipe({
//      name: 'search'
//  })
//  @Injectable()
//  export class SearchPipe implements PipeTransform{
//     transform(items: any, term: any):any{//termino de busqueda
//         if(term === undefined){
//             return items;
//         }
//         return items.filter(function(item){
//             return item.name.toLowerCase().includes(term.toLowerCase());//texto que este incluido
//         });
//     }
//  }

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.name.toLowerCase().includes(searchText);
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filter'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/event/inscription/inscription.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n.text-alert{\r\n  color:#dd4b39;\r\n}"

/***/ }),

/***/ "./src/app/event/inscription/inscription.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n   <br>\r\n   <div class=\"content\">\r\n      <div class=\"box box-primary\">\r\n         <div class=\"container \">\r\n            <div [hidden]=\"submitted\">\r\n               <h1>Inscribir Persona</h1>\r\n               <!-- <form (ngSubmit)=\"guardar()\" #addPerson=\"ngForm\" class=\"jumbotron\"> -->\r\n\r\n               <div class=\"form-group col-sm-8\">\r\n                  <div class=\"form-group col-sm-4\">\r\n                     <label for=\"ci\" class=\"control-label\" style=\"text-align: left\">Cedula de Identidad</label>\r\n                     <input type=\"number\" pattern=\"[1-9][0-9]{6}[a-z]{0,1}\" class=\"form-control\" id=\"ci\" [(ngModel)]=\"person.ci\" name=\"ci\" #ci=\"ngModel\"\r\n                         required/>\r\n                     <span *ngIf=\"!ci.valid && ci.touched\" class=\"text-alert\">\r\n                        *CI de persona requerido o es invalido.\r\n                     </span>\r\n                     <span *ngIf=\"ci?.pattern && ci.touched\" class=\"text-alert\">\r\n                        *CI de persona es invalido.\r\n                     </span>\r\n                  </div>\r\n               </div>\r\n               <div class=\"form-group col-sm-8\">\r\n                  <div class=\"form-group col-sm-6\" style=\"text-align: center\">\r\n                     <label for=\"first_name\" class=\"control-label\">Nombre</label>\r\n                     <input type=\"text\" pattern=\"[a-zA-Z]{3,10}[ ]{0,1}[a-zA-Z]{0,10}\" class=\"form-control\" id=\"first_name\" [(ngModel)]=\"person.first_name\"\r\n                        name=\"first_name\" #firstname=\"ngModel\" disabled required />\r\n                     <span *ngIf=\"!firstname.valid && firstname.touched\" class=\"text-alert\">\r\n                        *Nombre de persona requerido.\r\n                     </span>\r\n                     <span *ngIf=\" firstname?.pattern && firstname.touched\" class=\"text-alert\">\r\n                        *Nombre invalido\r\n                     </span>\r\n                     <!-- <div [hidden]=\"first_name?.valid || first_name?.pristine\" class=\"text-alert\">\r\n                                        kjknkasdkjhjask\r\n                                    </div> -->\r\n                  </div>\r\n                  <div class=\"form-group col-sm-6\" style=\"text-align: center\">\r\n                     <label for=\"last_name\" class=\"control-label\">Apellidos</label>\r\n                     <input type=\"text\" pattern=\"[a-zA-Z]{3,20}[ ]{0,1}[a-zA-Z]{0,20}\" class=\"form-control\" id=\"last_name\" [(ngModel)]=\"person.last_name\"\r\n                        name=\"last_name\" #lastname=\"ngModel\" disabled required />\r\n                     <span *ngIf=\"!lastname.valid && lastname.touched && lastname?.pattern\" class=\"text-alert\">\r\n                        *Apellido de persona requerido.\r\n                     </span>\r\n                     <span *ngIf=\"lastname?.pattern && lastname.touched\" class=\"text-alert\">\r\n                        *Apellido invalido.\r\n                     </span>\r\n                     <!--<div [hidden]=\"name?.valid || name?.pristine\" class=\"text-alert\">\r\n                                       kjkn\r\n                                   </div>-->\r\n                  </div>\r\n               </div>\r\n               <div class=\"form-group col-sm-8\">\r\n                  <div class=\"form-group col-sm-3\">\r\n                     <label for=\"difinePrice\" class=\"control-label\" style=\"text-align:right\">Precio Definido</label>\r\n                     <input type=\"number\" pattern=\"[0-9]{0,5}\" class=\"form-control\" id=\"difinePrice\" [(ngModel)]=\"inscription.price_event\" name=\"definePrice\"\r\n                        #definePrice=\"ngModel\" />\r\n                     <span *ngIf=\"!definePrice.valid && definePrice.touched\" class=\"text-alert\">\r\n                        *Precio de definido invalido.\r\n                     </span>\r\n                     <span *ngIf=\"definePrice?.pattern\" class=\"text-alert\">\r\n                        *Invalido Cobro.\r\n                     </span>\r\n                  </div>\r\n                  <div class=\"form-group col-sm-3\">\r\n                     <label for=\"monto\" class=\"control-label\" style=\"text-align:right\">Pago Inicial</label>\r\n                     <input type=\"number\" pattern=\"[0-9]{0,5}\" class=\"form-control\" id=\"monto\" [(ngModel)]=\"inscription.canceled_price\" name=\"monto\"\r\n                        #monto=\"ngModel\" />\r\n                     <span *ngIf=\"!monto.valid && monto.touched\" class=\"text-alert\">\r\n                        *Monto Inicial invalido.\r\n                     </span>\r\n                     <span *ngIf=\"monto?.pattern\" class=\"text-alert\">\r\n                        *monto invalido\r\n                     </span>\r\n                  </div>\r\n                  <div class=\"form-group col-sm-3\">\r\n                     <label for=\"receipt\" class=\"control-label\" style=\"text-align:right\">Nro Recibo</label>\r\n                     <input type=\"text\" pattern=\"[0-9]{0,15}[a-zA-Z]{0,5}\" class=\"form-control\" id=\"receipt\" [(ngModel)]=\"inscription.receipt\"\r\n                        name=\"receipt\" #receipt=\"ngModel\" required />\r\n                     <span *ngIf=\"!receipt.valid && receipt.touched\" class=\"text-alert\">\r\n                        *Numero de Recibo invalido.\r\n                     </span>\r\n                  </div>\r\n                  <div class=\"form-group col-sm-3\">\r\n                    <label for=\"modulo\">Modulo del Evento de Hoy</label>\r\n                    <select class=\"form-control\" id=\"modulo\" [(ngModel)]=\"lists.modulars\"\r\n                            name=\"modulo\" #modulo=\"ngModel\" required >\r\n                      <option *ngFor=\"let i of modulos\" [value]=\"i._id\">{{i.name}}</option>\r\n                    </select>\r\n                 </div>\r\n               </div>\r\n               <div class=\"form-group col-sm-8\" style=\"text-align:center \">\r\n                  <!-- <button type=\"button\" class=\"btn btn-info\" (click)=\"addPerson.reset()\">Limpiar</button> -->\r\n                  <button class=\"btn btn-success\" (click)=\"guardar()\">Registrar</button>\r\n                  <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\r\n                  <!-- <button type=\"button\" class=\"btn btn-danger\" (click)=\"addPerson.reset()\">Cancelar</button> -->\r\n               </div>\r\n               <!-- </form> -->\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/event/inscription/inscription.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InscriptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global__ = __webpack_require__("./src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modelo_person__ = __webpack_require__("./src/app/modelo/person.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modelo_inscription__ = __webpack_require__("./src/app/modelo/inscription.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modelo_registro__ = __webpack_require__("./src/app/modelo/registro.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modelo_descOcupation__ = __webpack_require__("./src/app/modelo/descOcupation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InscriptionComponent = /** @class */ (function () {
    function InscriptionComponent(_peticionesService, route, router) {
        this._peticionesService = _peticionesService;
        this.route = route;
        this.router = router;
        this.messageEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.submitted = false;
        this.person = new __WEBPACK_IMPORTED_MODULE_4__modelo_person__["a" /* Person */]('', '', null, null, null, '', '', '', '', null, '', null, null);
        //first_name,last_name,ci,phone,cellphone,email,ocupation,descOcupation:{ },carteras
        this.inscription = new __WEBPACK_IMPORTED_MODULE_5__modelo_inscription__["a" /* Inscription */](null, null, null, null, 0, 0, '0', '');
        //this.identy=Identity._id;
        this.descOcupation = new __WEBPACK_IMPORTED_MODULE_7__modelo_descOcupation__["a" /* DescOcupation */]('', '', '', '', '', '', '');
        this.registro = new __WEBPACK_IMPORTED_MODULE_6__modelo_registro__["a" /* Registro */](null, null, ''); //idEvent,idUser,persona:{}, montCancel
    }
    InscriptionComponent.prototype.onSubmit = function () {
    };
    InscriptionComponent.prototype.ngOnInit = function () {
        //   console.log(Identity._id); 
        //this.queryPrograms();
        this.queryEventId();
        this.queryModulos();
        // this.queryEvents();
        // this.queryCartera();
    };
    InscriptionComponent.prototype.queryEventId = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.eventId = params.id;
            // console.log(this.eventId)
        });
    };
    InscriptionComponent.prototype.guardar = function () {
        /////registrar inscripcion
        /////primero tiene q crearce el pago en ingreso a caja chica
        /////se registra en modulars list del evento
        /////se registra en inscription del evento
        /////se registra en perfil de la persona la inscripcion al evento
        this.person.descOcupation = this.descOcupation;
        this.inscription.users = __WEBPACK_IMPORTED_MODULE_3__services_global__["b" /* Identity */]._id;
        this.registro.inscription = this.inscription;
        this.registro.eventId = this.eventId;
        this.registro.persona = this.person; //opcional
        console.log(this.registro);
    };
    InscriptionComponent.prototype.queryModulos = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.eventId = params.id;
            // console.log(this.eventId)
        });
        this._peticionesService.getEventModuls(this.eventId).subscribe(//consulta para obt todo modulos
        function (//consulta para obt todo modulos
            result) {
            _this.modulos = result;
            //   console.log(this.modulos);
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    InscriptionComponent.prototype.cancel = function () {
        // this.router.navigate(['home/events']);
        window.history.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("close", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], InscriptionComponent.prototype, "close", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], InscriptionComponent.prototype, "messageEvent", void 0);
    InscriptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-inscription',
            template: __webpack_require__("./src/app/event/inscription/inscription.component.html"),
            styles: [__webpack_require__("./src/app/event/inscription/inscription.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], InscriptionComponent);
    return InscriptionComponent;
}());



/***/ }),

/***/ "./src/app/event/persona/addPerson/addPerson.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n.text-alert{\r\n  color:#dd4b39;\r\n}"

/***/ }),

/***/ "./src/app/event/persona/addPerson/addPerson.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n    <br>\r\n    <div class=\"content\">\r\n        <div class=\"box box-primary\">\r\n            <div class=\"container \">\r\n                <div [hidden]=\"submitted\">\r\n                    <h1>Registrar Persona</h1>\r\n                    <form (ngSubmit)=\"guardar()\" #addPerson=\"ngForm\" class=\"jumbotron\">\r\n                        <div class=\"form-group col-sm-8\">\r\n                            <div class=\"form-group col-sm-6\" style=\"text-align: center\">\r\n                                <label for=\"first_name\" class=\"control-label\">Nombre</label>\r\n                                <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú]{0,20}\" class=\"form-control\" id=\"first_name\" [(ngModel)]=\"person.first_name\"\r\n                                    name=\"first_name\" #firstname=\"ngModel\" required/>\r\n                                <span *ngIf=\"!firstname.valid && firstname.touched\" class=\"text-alert\">\r\n                                    *Nombre de persona requerido o invalido.\r\n                                </span>\r\n                                <!-- <span *ngIf=\" firstname?.pattern && firstname.touched\" class=\"text-alert\">\r\n                                    *Nombre invalido\r\n                                </span> -->\r\n                                <!-- <div [hidden]=\"first_name?.valid || first_name?.pristine\" class=\"text-alert\">\r\n                                        kjknkasdkjhjask\r\n                                    </div> -->\r\n                            </div>\r\n                            <div class=\"form-group col-sm-6\" style=\"text-align: center\">\r\n                                <label for=\"last_name\" class=\"control-label\">Apellidos</label>\r\n                                <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú]{0,20}\" class=\"form-control\" id=\"last_name\" [(ngModel)]=\"person.last_name\"\r\n                                    name=\"last_name\" #lastname=\"ngModel\" required/>\r\n                                <span *ngIf=\"!lastname.valid && lastname.touched && lastname?.pattern\" class=\"text-alert\">\r\n                                    *Apellido de persona requerido o invalido.\r\n                                </span>\r\n                                <!-- <span *ngIf=\"lastname?.pattern && lastname.touched\" class=\"text-alert\">\r\n                                    *Apellido invalido.\r\n                                </span> -->\r\n                                <!--<div [hidden]=\"name?.valid || name?.pristine\" class=\"text-alert\">\r\n                                       kjkn\r\n                                   </div>-->\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-sm-8\">\r\n                            <div class=\"form-group col-sm-4\">\r\n                                <label for=\"ci\" class=\"control-label\" style=\"text-align: left\">Cedula de Identidad</label>\r\n                                <input type=\"number\" pattern=\"[1-9][0-9]{6}\" class=\"form-control\" id=\"ci\" [(ngModel)]=\"person.ci\" name=\"ci\" #ci=\"ngModel\"/>\r\n                                <span *ngIf=\"!ci.valid && ci.touched\" class=\"text-alert\">\r\n                                    *CI de persona requerido o es invalido.\r\n                                </span>\r\n                                <!-- <span *ngIf=\"person.ci<1000000 || person.ci>9999999\" class=\"text-alert\">\r\n                                    *CI de persona es invalido.\r\n                                </span> -->\r\n                            </div>\r\n                            <div class=\"form-group col-sm-4\">\r\n                                <label for=\"cellphone\" class=\"control-label\" style=\"text-align: center\">Celular</label>\r\n                                <input type=\"number\" pattern=\"[6-7][0-9]{7}\" class=\"form-control\" id=\"cellphone\" [(ngModel)]=\"person.cellphone\" name=\"cellphone\"\r\n                                    #cellphone=\"ngModel\" required />\r\n                                <span *ngIf=\"!cellphone.valid && cellphone.touched\" class=\"text-alert\">\r\n                                    *Celular de persona requerido o es invalido.\r\n                                </span>\r\n                                <!-- <span *ngIf=\" cellphone?.pattern && cellphone.touched\" class=\"text-alert\">\r\n                                    *Celular de persona invalido.\r\n                                </span> -->\r\n                            </div>\r\n                            <div class=\"form-group col-sm-4\">\r\n                                <label for=\"phone\" class=\"control-label\" style=\"text-align: right\">Telefono</label>\r\n                                <input type=\"number\" patter=\"[4][0-9]{6}\" class=\"form-control\" id=\"phone\" [(ngModel)]=\"person.phone\" name=\"phone\" #phone=\"ngModel\"\r\n                                />\r\n                                <span *ngIf=\"!phone.valid && phone.touched\" class=\"text-alert\">\r\n                                    *Telefono de persona requerido o es invalido.\r\n                                </span>\r\n                                <!-- <span *ngIf=\"phone?.pattern && phone.touched\" class=\"text-alert\">\r\n                                    *Telefono de persona es invalido.\r\n                                </span> -->\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-sm-8\">\r\n                            <div class=\"form-group col-sm-6\">\r\n                                <label for=\"email\" class=\"control-label\" style=\"text-align: left\">Correo</label>\r\n                                <input type=\"email\" pattern=\"[a-zA-Z.0-9-_]*[@][a-z]{3,15}[.][a-z]{3,15}\" class=\"form-control\" id=\"email\" [(ngModel)]=\"person.email\"\r\n                                    name=\"email\" #email=\"ngModel\" />\r\n                                <span *ngIf=\"!email.valid && email.touched\" class=\"text-alert\">\r\n                                    *Email de persona requerido.\r\n                                </span>\r\n                                <span *ngIf=\"email?.pattern && email.touched\" class=\"text-alert\">\r\n                                    *Email de persona requerido.\r\n                                </span>\r\n                            </div>\r\n                            <div class=\"form-group col-sm-4\">\r\n                                <label for=\"selectMedio\">Medios Conectado</label>\r\n                                <select class=\"form-control\" id=\"selectMedios\" [(ngModel)]=\"person.contact_medium\" (change)=\"selectMed()\" name=\"selectMedios\" #selectMedios=\"ngModel\">\r\n                                    <option value=1>WhatsApp</option>\r\n                                    <option value=2>Afiches</option>\r\n                                    <option value=3>Facebook</option>\r\n                                    <option value=4>Recomendacion</option>\r\n                                    <option value=5>Visitas Aulas</option>\r\n                                    <option value=6>Visita Empresa</option>\r\n                                    <!-- <option value=7>Otros</option> -->\r\n                                </select>\r\n                                <!-- <div class=\"form-group col-sm-4\">\r\n                                    <br>\r\n                                    <p *ngIf=\"selectMedio == 7\">\r\n                                        <input type=\"text\" pattern=\"[a-zA-Z]{0,20}\" placeholder=\"Otros\" name=\"otros\" #otros=\"ngModel\" [(ngModel)]=\"otro\"\r\n                                            class=\"form-control\" />\r\n                                        <span *ngIf=\"!otros.valid && otros.touched\" class=\"text-alert\">\r\n                                            <h6>*Especificacion Requerida.</h6>\r\n                                        </span>\r\n                                    </p>\r\n                                </div> -->\r\n                            </div>\r\n                        </div>\r\n                        <!-- <div class=\"form-group col-sm-8\" >\r\n                            <div class=\"form-group col-sm-3\">\r\n                                <label for=\"difinePrice\" class=\"control-label\"style=\"text-align:right\" >Precio Definido</label>\r\n                                    <input type=\"number\" pattern=\"[0-9]{0,5}\" class=\"form-control\" id=\"difinePrice\" \r\n                                        [(ngModel)]=\"inscription.price_event\" name=\"definePrice\" #definePrice=\"ngModel\"/>\r\n                                        <span *ngIf=\"!definePrice.valid && definePrice.touched\" class=\"text-alert\">\r\n                                                    *Precio de definido invalido.\r\n                                        </span>\r\n                                        <span *ngIf=\"definePrice?.pattern\" class=\"text-alert\">\r\n                                            *Invalido Cobro.\r\n                                        </span>\r\n                            </div>\r\n                          <div class=\"form-group col-sm-3\">\r\n                              <label for=\"monto\" class=\"control-label\"style=\"text-align:right\" >Pago Inicial</label>\r\n                                  <input type=\"number\" pattern=\"[0-9]{0,5}\" class=\"form-control\" id=\"monto\" \r\n                                  [(ngModel)]=\"inscription.canceled_price\" name=\"monto\" #monto=\"ngModel\"/>\r\n                                  <span *ngIf=\"!monto.valid && monto.touched\" class=\"text-alert\">\r\n                                          *Monto Inicial invalido.\r\n                                  </span>\r\n                                  <span *ngIf=\"monto?.pattern\" class=\"text-alert\">\r\n                                            *monto invalido\r\n                                  </span>\r\n                          </div>\r\n                          <div class=\"form-group col-sm-3\">\r\n                                <label for=\"receipt\" class=\"control-label\"style=\"text-align:right\" >Nro Recibo</label>\r\n                                    <input type=\"text\" pattern=\"[0-9]{0,15}[a-zA-Z]{0,5}\" class=\"form-control\" id=\"receipt\" \r\n                                    [(ngModel)]=\"inscription.receipt\" name=\"receipt\" #receipt=\"ngModel\" required />\r\n                                    <span *ngIf=\"!receipt.valid && receipt.touched\" class=\"text-alert\">\r\n                                            *Numero de Recibo invalido.\r\n                                    </span>\r\n                            </div>\r\n                      </div> -->\r\n                        <div class=\"form-group col-sm-8\">\r\n                            <label for=\"ocupSelect\">\r\n                                <i class=\"fa fa-tag prefix grey-text\"></i>Ocupacion</label>\r\n                            <select class=\"form-control\" id=\"ocupSelect\" [(ngModel)]=\"ocupSelected\" (change)=\"captOcupation()\" name=\"ocupSelect\" #ocupSelect=\"ngModel\">\r\n                                <option value=\"estudiante\">Estudiante</option>\r\n                                <option value=\"profesional\">Profesional</option>\r\n                                <option value=\"particular\">Particular</option>\r\n                            </select>\r\n                            <div class=\"form-group col-sm-6\">\r\n                                <br>\r\n                                <p *ngIf=\"ocupSelected == 'estudiante'\">\r\n                                    <!-- <input type=\"text\" pattern=\"[a-zA-Z]{0,20}\" placeholder=\"Universidad\" name=\"universidad\" #universidad=\"ngModel\" [(ngModel)]=\"descOcupation.universidad\"\r\n                                        class=\"form-control\" />\r\n                                    <span *ngIf=\"!universidad.valid && universidad.touched\" class=\"text-alert\">\r\n                                        <h6>*Nombre de Universidad requerido.</h6>\r\n                                    </span> -->\r\n\r\n\r\n                                    <select class=\"form-control\" id=\"univer\" [(ngModel)]=\"descOcupation.universidad\" \r\n                                        name=\"univer\" #ocupSelect=\"ngModel\">\r\n                                        <option *ngFor=\"let univ of universidades\" [value]=\"univ._id\">{{univ.nombre}}</option>                               \r\n                                        <!-- <option value=1>Universidad Mayor de San Simon</option>\r\n                                        <option value=2>U. Catolica</option>\r\n                                        <option value=3>U. Latinoamericana</option>                      -->\r\n                                    </select>\r\n\r\n\r\n                                </p>\r\n                                <p *ngIf=\"ocupSelected == 'estudiante'\">\r\n                                    <select class=\"form-control\" id=\"carr\" [(ngModel)]=\"descOcupation.carrera\" \r\n                                    name=\"carr\" #ocupSelect=\"ngModel\">\r\n                                        <option *ngFor=\"let carrera of carreras\" [value]=\"carrera._id\">{{carrera.nombre}}</option>\r\n                                    </select>\r\n                                    <!-- <input type=\"text\" pattern=\"[a-zA-Z]{0,20}\" placeholder=\"Carrera\" name=\"carrera\" #carrera=\"ngModel\" [(ngModel)]=\"descOcupation.carrera\"\r\n                                        class=\"form-control\" />\r\n                                    <span *ngIf=\"!carrera.valid && carrera.touched\" class=\"text-alert\">\r\n                                        <h6>*carrera de persona requerido.</h6>\r\n                                    </span> -->\r\n                                </p>\r\n                                <p *ngIf=\"ocupSelected == 'estudiante'\">\r\n                                    <input type=\"text\" pattern=\"[a-zA-Z]{0,20}\" placeholder=\"Semestre\" name=\"semestre\" #semestre=\"ngModel\" [(ngModel)]=\"descOcupation.semestre\"\r\n                                        class=\"form-control\" />\r\n                                    <span *ngIf=\"!semestre.valid && semestre.touched\" class=\"text-alert\">\r\n                                        <h6>*semestre de persona requerido.</h6>\r\n                                    </span>\r\n                                </p>\r\n                                <p *ngIf=\"ocupSelected == 'particular'\">\r\n                                    <input type=\"text\" pattern=\"[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\" placeholder=\"Area de Trabajo\" name=\"areaTrabajo\" #areaTrabajo=\"ngModel\"\r\n                                        [(ngModel)]=\"descOcupation.areaTrabajo\" class=\"form-control\" />\r\n                                    <span *ngIf=\"!areaTrabajo.valid && areaTrabajo.touched\" class=\"text-alert\">\r\n                                        <h6>*Area de trabajo de persona requerido.</h6>\r\n                                    </span>\r\n                                </p>\r\n                                <p *ngIf=\"ocupSelected == 'profesional'\">\r\n                                    <input type=\"text\" pattern=\"[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\" placeholder=\"Profesion\" name=\"profesion\"\r\n                                        #profesion=\"ngModel\" [(ngModel)]=\"descOcupation.profesion\" class=\"form-control\" />\r\n                                    <span *ngIf=\"!profesion.valid && profesion.touched\" class=\"text-alert\">\r\n                                        <h6>*Profecion de persona requerido.</h6>\r\n                                    </span>\r\n                                </p>\r\n                                <p *ngIf=\"ocupSelected == 'profesional'\">\r\n                                    <input type=\"text\" pattern=\"[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\" placeholder=\"Empresa\" name=\"empresa\"\r\n                                        #empresa=\"ngModel\" [(ngModel)]=\"descOcupation.empresa\" class=\"form-control\" />\r\n                                    <span *ngIf=\"!empresa.valid && empresa.touched\" class=\"text-alert\">\r\n                                        <h6>*Nombre de Empresa requerido.</h6>\r\n                                    </span>\r\n                                </p>\r\n                                <p *ngIf=\"ocupSelected == 'profesional'\">\r\n                                    <input type=\"text\" pattern=\"[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\" placeholder=\"Cargo\" name=\"cargo\"\r\n                                        #cargo=\"ngModel\" [(ngModel)]=\"descOcupation.cargo\" class=\"form-control\" />\r\n                                    <span *ngIf=\"!cargo.valid && cargo.touched\" class=\"text-alert\">\r\n                                        <h6>*Cargo de persona requerido.</h6>\r\n                                    </span>\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-sm-8\">\r\n                            <div class=\"form-group col-sm-4\" style=\"width: 50%\">\r\n                                <label for=\"programs\">Intereses</label>\r\n                                <br>\r\n                                <label>\r\n                                    <div *ngFor=\"let program of newProgramsCheck; let i = index\">\r\n                                        <input type=\"checkbox\" name=\"program{{i}}\" #categories=\"ngModel\" value=\"{{program.programName}}\" [(ngModel)]=\"program.checked\"\r\n                                        /> {{program.programName}}\r\n                                    </div>\r\n                                </label>\r\n                                <div [hidden]=\"programs?.valid || programs?.pristine\" class=\"text-alert\">\r\n                                </div>\r\n                            </div>\r\n                            \r\n                        </div>\r\n                        <!-- <div class=\"form-group col-sm-8\">\r\n                              <label for=\"evento\">Evento</label>\r\n                              <select class=\"form-control\" id=\"evento\" [(ngModel)]=\"IdEvent\"\r\n                                      name=\"evento\" #evento=\"ngModel\" required >\r\n                                <option *ngFor=\"let evento of eventos\" [value]=\"evento._id\">{{evento.name}}</option>\r\n                              </select>\r\n                      </div> -->\r\n                        <div class=\"form-group col-sm-8\" style=\"text-align:center \">\r\n                            <button type=\"button\" class=\"btn btn-info\" (click)=\"addPerson.reset()\">Limpiar</button>\r\n                            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addPerson.form.valid\">Guardar</button>\r\n                            <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\r\n                            <!-- <button type=\"button\" class=\"btn btn-danger\" (click)=\"addPerson.reset()\">Cancelar</button> -->\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/event/persona/addPerson/addPerson.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPersonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global__ = __webpack_require__("./src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modelo_person__ = __webpack_require__("./src/app/modelo/person.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modelo_inscription__ = __webpack_require__("./src/app/modelo/inscription.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modelo_registro__ = __webpack_require__("./src/app/modelo/registro.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modelo_descOcupation__ = __webpack_require__("./src/app/modelo/descOcupation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddPersonComponent = /** @class */ (function () {
    function AddPersonComponent(_peticionesService, route, router) {
        this._peticionesService = _peticionesService;
        this.route = route;
        this.router = router;
        this.messageEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.universidades = [];
        this.newProgramsCheck = [];
        this.submitted = false;
        this.person = new __WEBPACK_IMPORTED_MODULE_4__modelo_person__["a" /* Person */]('', '', null, null, null, '', '', '', '', null, '', null, null);
        ///////////////////////////
        ///new Person(f
        //irst_name: string, 
        //last_name: string, 
        //ci: number, 
        //phone: number, 
        //cellphone: number, 
        //whatsapp_group: string, 
        //city: string, 
        //email: string, 
        //ocupation: string, 
        //descOcupation: DescOcupation, 
        //carteras: string)
        ////////////////////////////////
        this.inscription = new __WEBPACK_IMPORTED_MODULE_5__modelo_inscription__["a" /* Inscription */](null, null, null, null, 0, 0, '0', '');
        //this.identy=Identity._id;
        this.descOcupation = new __WEBPACK_IMPORTED_MODULE_7__modelo_descOcupation__["a" /* DescOcupation */]('', '', '', '', '', '', '');
        this.registro = new __WEBPACK_IMPORTED_MODULE_6__modelo_registro__["a" /* Registro */](null, null, ''); //idEvent,idUser,persona:{}, montCancel
    }
    AddPersonComponent.prototype.onSubmit = function () {
    };
    AddPersonComponent.prototype.getUniversidades = function () {
        var _this = this;
        console.log("hnjdjdjd");
        this._peticionesService.getUni().subscribe(function (res) {
            _this.universidades = res[0].university;
            _this.carreras = res[0].carrera;
            console.log(_this.universidades);
        });
    };
    AddPersonComponent.prototype.ngOnInit = function () {
        // console.log(Identity._id);
        //this.queryPrograms();
        this.queryEvents();
        this.queryCartera();
        this.queryPrograms();
        this.getUniversidades();
    };
    AddPersonComponent.prototype.llenarProgramsCheckbox = function () {
        for (var _i = 0, _a = this.programs; _i < _a.length; _i++) {
            var p = _a[_i];
            var programItem = {};
            programItem.checked = false;
            programItem.programId = p._id;
            programItem.programName = p.name;
            programItem.state = 0;
            this.newProgramsCheck.push(programItem);
        }
        // this.fixProgramCheckbox()
    };
    AddPersonComponent.prototype.queryPrograms = function () {
        var _this = this;
        this._peticionesService.getPrograms().subscribe(function (response) {
            _this.programs = response;
            _this.llenarProgramsCheckbox();
            // console.log(this.programs);
            // console.log("hi")
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    AddPersonComponent.prototype.guardar = function () {
        // console.log(this.IdEvent);
        // console.log(this.montoCan);
        var _this = this;
        // console.log(this.descOcupation);
        // console.log(this.inscription);
        var newInteres = [];
        for (var _i = 0, _a = this.newProgramsCheck; _i < _a.length; _i++) {
            var npc = _a[_i];
            if (npc.checked) {
                newInteres.push(npc);
            }
        }
        // console.log(this.person);
        this.person.interes = newInteres;
        this.person.descOcupation = this.descOcupation;
        this.inscription.users = __WEBPACK_IMPORTED_MODULE_3__services_global__["b" /* Identity */]._id;
        this.registro.inscription = this.inscription;
        this.registro.eventId = this.IdEvent;
        this.registro.persona = this.person;
        // console.log(this.registro);
        // this._peticionesService.addPerson(this.registro).subscribe(
        this._peticionesService.addNewPerson(this.registro).subscribe(function (result) {
            var esperado = result;
            // console.log(esperado);
            _this.router.navigate(['home/events']);
            alert('Se Registro a la persona de manera correcta');
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            alert('Error al registrar, Persona existente');
        });
    };
    AddPersonComponent.prototype.selectMed = function () {
        // console.log(this.person.contact_medium);
    };
    AddPersonComponent.prototype.captOcupation = function () {
        // console.log(this.ocupSelected);
        this.descOcupation.universidad = '';
        this.descOcupation.carrera = '';
        this.descOcupation.semestre = '';
        this.descOcupation.areaTrabajo = '';
        this.descOcupation.profesion = '';
        this.descOcupation.cargo = '';
        this.descOcupation.empresa = '';
        this.person.ocupation = this.ocupSelected;
    };
    AddPersonComponent.prototype.queryCartera = function () {
        var _this = this;
        //console.log(Identity._id)
        this._peticionesService.getCarteraFromUserId(__WEBPACK_IMPORTED_MODULE_3__services_global__["b" /* Identity */]._id).subscribe(function (result) {
            _this.cartera = result;
            _this.person.carteras = _this.cartera._id;
            // console.log('aqui la cartera del usuario::::');
            // console.log(this.cartera);
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    AddPersonComponent.prototype.queryEvents = function () {
        var _this = this;
        this._peticionesService.getEvents().subscribe(function (result) {
            _this.eventos = result;
            //console.log(this.eventos);
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    AddPersonComponent.prototype.cancel = function () {
        // this.router.navigate(['home/events']);
        window.history.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("close", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AddPersonComponent.prototype, "close", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddPersonComponent.prototype, "messageEvent", void 0);
    AddPersonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-addPerson',
            template: __webpack_require__("./src/app/event/persona/addPerson/addPerson.component.html"),
            styles: [__webpack_require__("./src/app/event/persona/addPerson/addPerson.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AddPersonComponent);
    return AddPersonComponent;
}());



/***/ }),

/***/ "./src/app/event/persona/edit-persona-interes/edit-persona-interes.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n  \r\n  .text-alert{\r\n    color:#dd4b39;\r\n}"

/***/ }),

/***/ "./src/app/event/persona/edit-persona-interes/edit-persona-interes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n  <br>\r\n  <div class=\"content\">\r\n    <h4>Editar Persona</h4>\r\n    <div class=\"box box-primary\">\r\n      <div class=\"container \">\r\n        <label>\r\n          <h3>Edicion del Interes de la persona</h3>\r\n        </label>\r\n        <div>\r\n          <form (ngSubmit)=\"onSubmit()\" #interesForm=\"ngForm\">\r\n            <div class=\"form-group col-sm-8\">\r\n              <div class=\"form-group col-sm-6\" style=\"text-align: center\">\r\n                <label for=\"detail\" class=\"control-label\">Descripcion</label>\r\n                <input type=\"text\" pattern=\"[a-zA-Z .0-9]{3,150}\" class=\"form-control\" id=\"detail\" [(ngModel)]=\"person.detail\"\r\n                name=\"detail\" #detail=\"ngModel\" />                \r\n                <!-- <input type=\"text\" class=\"form-control\" id=\"detail\" [(ngModel)]=\"detail\" name=\"detail\" #detail=\"ngModel\" /> -->\r\n                <!-- <span *ngIf=\"!detail.valid && detail.touched && detail?.pattern\" class=\"text-alert\">\r\n                  *Detalle requerido.\r\n                </span>\r\n                <span *ngIf=\"detail?.pattern && detail.touched\" class=\"text-alert\">\r\n                  *Detalle invalido.\r\n                </span> -->\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"interes\">Interes de la persona</label>\r\n                <select style=\"width: 50%\" class=\"form-control\" id=\"interes\" [(ngModel)]=\"interesOfPerson\" name=\"interes\" #interes=\"ngModel\"\r\n                  required>\r\n                  <option value=\"0\">Interesado</option>\r\n                  <!-- <option value=\"1\">En Duda</option> -->\r\n                  <option value=\"2\">Confirmado</option>\r\n                  <option value=\"3\">Inscrito</option>\r\n                  <option value=\"4\">En Linea</option>\r\n                  <option value=\"5\">Proximo Evento</option>\r\n                  <option value=\"6\">Sin Interes</option>\r\n                </select>\r\n                <span *ngIf=\"!interes.valid && interes.touched\" class=\"text-alert\">\r\n                  *interea de persona requerido.\r\n                </span>\r\n                <!--<div [hidden]=\"intere?.valid || intere?.pristine\" class=\"\">\r\n                     *intereo requeridos\r\n                  </div>-->\r\n              </div>\r\n\r\n              <div>\r\n                <label>\r\n                  <h3>Añadir Seguimiento</h3>\r\n                </label>\r\n              </div>\r\n              \r\n              <div class=\"form-group col-sm-6\" style=\"text-align: center\">\r\n                <label for=\"details\" class=\"control-label\">Detalles</label>\r\n                <input type=\"text\" pattern=\"[a-zA-Z .0-9]{3,150}\" class=\"form-control\" id=\"details\" [(ngModel)]=\"model.details\"\r\n                  name=\"details\" #details=\"ngModel\" />                \r\n                <!-- <input type=\"text\" class=\"form-control\" id=\"detail\" [(ngModel)]=\"detail\" name=\"detail\" #detail=\"ngModel\" /> -->\r\n                <!-- <span *ngIf=\"!detail.valid && detail.touched && detail?.pattern\" class=\"text-alert\">\r\n                  *Detalle requerido.\r\n                </span>\r\n                <span *ngIf=\"detail?.pattern && detail.touched\" class=\"text-alert\">\r\n                  *Detalle invalido.\r\n                </span> -->\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"state\">Estado</label>\r\n                <select style=\"width: 50%\" class=\"form-control\" id=\"state\" [(ngModel)]=\"model.state\" \r\n                  name=\"state\" #state=\"ngModel\" required>\r\n                    <option value=\"0\">Programar llamada</option>\r\n                    <option value=\"1\">No contestó llamada</option>\r\n                    <option value=\"2\">Contestó llamada</option>\r\n                </select>\r\n                <span *ngIf=\"!interes.valid && interes.touched\" class=\"text-alert\">\r\n                  *Seguimiento de persona requerido.\r\n                </span>\r\n                <!--<div [hidden]=\"intere?.valid || intere?.pristine\" class=\"\">\r\n                     *intereo requeridos\r\n                  </div>-->\r\n              </div>\r\n\r\n              <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!interesForm.form.valid\">Registrar</button>\r\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\r\n              <br>\r\n              <br>\r\n            </div>\r\n          </form>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/event/persona/edit-persona-interes/edit-persona-interes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPersonaInteresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_persona_service__ = __webpack_require__("./src/app/services/persona.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modelo_tracing__ = __webpack_require__("./src/app/modelo/tracing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditPersonaInteresComponent = /** @class */ (function () {
    function EditPersonaInteresComponent(router, route, _personaService, _peticionesService) {
        this.router = router;
        this.route = route;
        this._personaService = _personaService;
        this._peticionesService = _peticionesService;
        this.model = new __WEBPACK_IMPORTED_MODULE_4__modelo_tracing__["a" /* Tracing */](null, "", "");
    }
    EditPersonaInteresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var personIdEventId = params.id;
            _this.personId = personIdEventId.split('-')[0];
            _this.eventId = personIdEventId.split('-')[1];
            _this.findPerson();
            _this.model.eventId = _this.eventId;
        });
    };
    EditPersonaInteresComponent.prototype.findPerson = function () {
        var _this = this;
        this._peticionesService.getPerson(this.personId).subscribe(function (result) {
            _this.person = result;
            // console.log(this.person);
            _this.getIntersOfPerson();
        });
    };
    EditPersonaInteresComponent.prototype.getIntersOfPerson = function () {
        var _this = this;
        var interesItem = {};
        interesItem.state = 0;
        interesItem.eventId = this.eventId;
        interesItem.personId = this.personId;
        this._peticionesService.getInteresOfPersonaWithInteres(interesItem).subscribe(function (res) {
            _this.interes = res;
            // console.log(this.interes);
            _this.person.detail = _this.interes.details || '';
            _this.interesOfPerson = _this.interes.state;
        });
    };
    EditPersonaInteresComponent.prototype.onSubmit = function () {
        var _this = this;
        // console.log(this.person.detail);
        // console.log(this.interesOfPerson, this.person.detail);
        var interesItem = {};
        interesItem.details = this.person.detail;
        interesItem.state = this.interesOfPerson;
        interesItem.eventId = this.eventId;
        interesItem.personId = this.personId;
        interesItem.tracing = this.model;
        this._peticionesService.setInteresOfPersonFromEvent(interesItem).subscribe(function (response) {
            // console.log(response);
            // console.log(this.model);
            // this._peticionesService.addNewTracing(this.personId, this.model).subscribe(response => {
            //   var esperado = response;
            //   console.log(esperado);
            //   this.router.navigate(['home/events/persons/', this.eventId]);
            // });
            _this.router.navigate(['home/events/persons/', _this.eventId]);
        });
    };
    EditPersonaInteresComponent.prototype.cancel = function () {
        window.history.back();
    };
    EditPersonaInteresComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-persona-interes',
            template: __webpack_require__("./src/app/event/persona/edit-persona-interes/edit-persona-interes.component.html"),
            styles: [__webpack_require__("./src/app/event/persona/edit-persona-interes/edit-persona-interes.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_persona_service__["a" /* PersonaService */], __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__services_persona_service__["a" /* PersonaService */],
            __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]])
    ], EditPersonaInteresComponent);
    return EditPersonaInteresComponent;
}());



/***/ }),

/***/ "./src/app/event/persona/edit/edit.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n  \r\n  .text-alert{\r\n    color:#dd4b39;\r\n  }"

/***/ }),

/***/ "./src/app/event/persona/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n    <br>\r\n    <div class=\"content\">\r\n        <h4>Editar Persona</h4>\r\n        <div class=\"box box-primary\" style=\"width: 90%\">\r\n            <div class=\"container \">\r\n                <label>\r\n                    <h3>{{ person.first_name }} {{person.last_name}}</h3>\r\n                </label>\r\n                <div [hidden]=\"submitted\">\r\n                    <form (ngSubmit)=\"saveEdition()\" #addPerson=\"ngForm\" class=\"\">\r\n                        <div class=\"form-group col-sm-8\">\r\n                            <div class=\"form-group col-sm-6\" style=\"text-align: center\" >\r\n                                <label for=\"first_name\" class=\"control-label\">Nombre</label>\r\n                                <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú]{0,20}\" class=\"form-control\" id=\"first_name\" [(ngModel)]=\"person.first_name\"\r\n                                    name=\"first_name\" #firstname=\"ngModel\" required/>\r\n                                <span *ngIf=\"!firstname.valid && firstname.touched\" class=\"text-alert\">\r\n                                    *Nombre de persona requerido.\r\n                                </span>\r\n\r\n                            </div>\r\n                            <div class=\"form-group col-sm-6\" style=\"text-align: center\" >\r\n                                <label for=\"last_name\" class=\"control-label\">Apellidos</label>\r\n                                <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú]{0,20}\" class=\"form-control\" id=\"last_name\" [(ngModel)]=\"person.last_name\"\r\n                                    name=\"last_name\" #lastname=\"ngModel\" required/>\r\n                                <span *ngIf=\"!lastname.valid && lastname.touched\" class=\"text-alert\">\r\n                                    *Apellido de persona requerido.\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-sm-8\" >\r\n                            <div class=\"form-group col-sm-4\" >\r\n                                <label for=\"ci\" class=\"control-label\" style=\"text-align: left\">Cedula de Identidad</label>\r\n                                <input type=\"number\" pattern=\"[1-9][0-9]{6}\" class=\"form-control\" id=\"ci\" [(ngModel)]=\"person.ci\" name=\"ci\" #ci=\"ngModel\"\r\n                                    />\r\n                                <span *ngIf=\"!ci.valid && ci.touched\" class=\"text-alert\">\r\n                                    *CI de persona requerido.\r\n                                </span>\r\n                            </div>\r\n                            <div class=\"form-group col-sm-4\" >\r\n                                <label for=\"cellphone\" class=\"control-label\" style=\"text-align: center\">Celular</label>\r\n                                <input type=\"number\" pattern=\"[6-7][0-9]{7}\" class=\"form-control\" id=\"cellphone\" [(ngModel)]=\"person.cellphone\" name=\"cellphone\"\r\n                                    #cellphone=\"ngModel\" required/>\r\n                                <span *ngIf=\"!cellphone.valid && cellphone.touched\" class=\"text-alert\">\r\n                                    *Celular de persona requerido.\r\n                                </span>\r\n                            </div>\r\n                            <div class=\"form-group col-sm-4\" >\r\n                                <label for=\"phone\" class=\"control-label\" style=\"text-align: right\">Telefono</label>\r\n                                <input type=\"number\" pattern=\"[4][0-9]{6}\" class=\"form-control\" id=\"phone\" [(ngModel)]=\"person.phone\" name=\"phone\" #phone=\"ngModel\"\r\n                                />\r\n                                <span *ngIf=\"!phone.valid && phone.touched\" class=\"text-alert\">\r\n                                    *Telefono de persona requerido.\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group col-sm-8\">\r\n                            <div class=\"form-group col-sm-6\" >\r\n                                    <label for=\"email\" pattern=\"[a-zA-Z.0-9-_]*[@][a-z]{3,15}[.][a-z]{3,15}\" class=\"control-label\" style=\"text-align: left\">Correo</label>\r\n                                    <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"person.email\" name=\"email\" #email=\"ngModel\" />\r\n                                    <span *ngIf=\"!email.valid && email.touched\" class=\"text-alert\">\r\n                                        *Email de persona requerido.\r\n                                    </span>\r\n                            </div>\r\n                            <div class=\"form-group col-sm-4\">\r\n                                <label for=\"selectMedio\">Medios de Contacto</label>\r\n                                <select class=\"form-control\" id=\"selectMedios\" [(ngModel)]=\"person.contact_medium\" \r\n                                            (change)=\"selectMed()\" name=\"selectMedios\" #selectMedios=\"ngModel\" >\r\n                                    <option value=1>WhatsApp</option>\r\n                                    <option value=2>Afiches</option>\r\n                                    <option value=3>Facebook</option>\r\n                                    <option value=4>Recomendacion</option>\r\n                                    <option value=5>Visitas Aulas</option>\r\n                                    <option value=6>Visita Empresa</option>\r\n                                    <!-- <option value=7>Otros</option> -->\r\n                                </select>\r\n                                <!-- <div class=\"form-group col-sm-4\">\r\n                                    <br>\r\n                                    <p *ngIf=\"selectMedio == 7\">\r\n                                        <input type=\"text\" pattern=\"[a-zA-Z]{0,20}\" placeholder=\"Otros\" name=\"otros\" #otros=\"ngModel\" [(ngModel)]=\"otro\"\r\n                                            class=\"form-control\" />\r\n                                        <span *ngIf=\"!otros.valid && otros.touched\" class=\"text-alert\">\r\n                                            <h6>*Especificacion Requerida.</h6>\r\n                                        </span>\r\n                                    </p>\r\n                                </div> -->\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-sm-8\">\r\n                            <label for=\"ocupSelect\">\r\n                              <i class=\"fa fa-tag prefix grey-text\"></i>Ocupación</label>\r\n                            <select class=\"form-control\" id=\"ocupSelect\" [(ngModel)]=\"ocupacion\" (change)=\"captOcupation()\"\r\n                                 name=\"ocupSelect\" #ocupSelect=\"ngModel\"  >\r\n                                <option value=\"estudiante\">Estudiante</option>\r\n                                <option value=\"profesional\">Profesional</option>\r\n                                <option value=\"particular\">Particular</option>                     \r\n                            </select>\r\n                            <div class=\"form-group col-sm-6\">\r\n                              <br>\r\n                              <p *ngIf=\"ocupacion == 'estudiante'\">\r\n                                <!-- <input type=\"text\" pattern=\"[a-zA-Z ]{0,30}\" placeholder=\"Universidad\" name=\"universidad\" #universidad=\"ngModel\" \r\n                                [(ngModel)]=\"descOcupation.universidad\" class=\"form-control\" required />\r\n                                <span *ngIf=\"!universidad.valid && universidad.touched\" class=\"text-alert\">\r\n                                    <h6>*Nombre de Universidad requerido.</h6> \r\n                                </span> -->\r\n\r\n                                <select class=\"form-control\" id=\"univer\" [(ngModel)]=\"descOcupation.universidad\" \r\n                                    name=\"univer\" #ocupSelect=\"ngModel\">\r\n                                    <option value=\"\" hidden>Seleccionar...</option>                               \r\n                                    <option value=1>Universidad Mayor de San Simon</option>\r\n                                    <option value=2>U. Catolica</option>\r\n                                    <option value=3>U. Latinoamericana</option>                     \r\n                                </select>\r\n\r\n\r\n                              </p>\r\n                              <p *ngIf=\"ocupacion == 'estudiante'\">\r\n                                  <input type=\"text\" pattern=\"[a-zA-Z ]{0,20}\" placeholder=\"Carrera\" name=\"carrera\" #carrera=\"ngModel\"\r\n                                   [(ngModel)]=\"descOcupation.carrera\" class=\"form-control\"   />\r\n                                   <span *ngIf=\"!carrera.valid && carrera.touched\" class=\"text-alert\">\r\n                                      <h6>*Carrera de persona requerido.</h6>\r\n                                   </span> \r\n                                </p> \r\n                                <p *ngIf=\"ocupacion == 'estudiante'\">\r\n                                  <input type=\"text\" pattern=\"[a-zA-Z0-9]{0,20}\" placeholder=\"Semestre\" name=\"semestre\" #semestre=\"ngModel\" \r\n                                  [(ngModel)]=\"descOcupation.semestre\" class=\"form-control\"  /> \r\n                                  <span *ngIf=\"!semestre.valid && semestre.touched\" class=\"text-alert\">\r\n                                      <h6>*Semestre de persona requerido.</h6>\r\n                                  </span>\r\n                                </p>\r\n                                <p *ngIf=\"ocupacion == 'particular'\">\r\n                                  <input type=\"text\" pattern=\"[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\" placeholder=\"Area de Trabajo\" name=\"areaTrabajo\" #areaTrabajo=\"ngModel\" \r\n                                  [(ngModel)]=\"descOcupation.areaTrabajo\" class=\"form-control\"  /> \r\n                                  <span *ngIf=\"!areaTrabajo.valid && areaTrabajo.touched\" class=\"text-alert\">\r\n                                      <h6>*Área de trabajo de persona requerido.</h6>\r\n                                  </span>\r\n                                </p> \r\n                                <p *ngIf=\"ocupacion == 'profesional'\">\r\n                                  <input type=\"text\" pattern=\"[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\" placeholder=\"Profesion\" name=\"profesion\" #profesion=\"ngModel\"\r\n                                   [(ngModel)]=\"descOcupation.profesion\" class=\"form-control\"  /> \r\n                                   <span *ngIf=\"!profesion.valid && profesion.touched\" class=\"text-alert\">\r\n                                      <h6>*Profesión de persona requerido.</h6>\r\n                                 </span>\r\n                                </p> \r\n                                <p *ngIf=\"ocupacion == 'profesional'\">\r\n                                  <input type=\"text\" pattern=\"[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\" placeholder=\"Empresa\" name=\"empresa\" #empresa=\"ngModel\"\r\n                                   [(ngModel)]=\"descOcupation.empresa\" class=\"form-control\"  /> \r\n                                   <span *ngIf=\"!empresa.valid && empresa.touched\" class=\"text-alert\">\r\n                                      <h6>*Nombre de Empresa requerido.</h6>\r\n                                  </span>\r\n                                </p> \r\n                                <p *ngIf=\"ocupacion == 'profesional'\">\r\n                                  <input type=\"text\" pattern=\"[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\" placeholder=\"Cargo\" name=\"cargo\" #cargo=\"ngModel\" \r\n                                  [(ngModel)]=\"descOcupation.cargo\" class=\"form-control\" />\r\n                                  <span *ngIf=\"!cargo.valid && cargo.touched\" class=\"text-alert\">\r\n                                      <h6>*Cargo de persona requerido.</h6>\r\n                                  </span> \r\n                                </p>\r\n                              </div>\r\n                        </div>\r\n                        <div class=\"form-group\" style=\"width: 50%\">\r\n                            <label for=\"programs\">Intereses</label>\r\n                            <br>\r\n                            <label>\r\n                                <div *ngFor=\"let program of newProgramsCheck; let i = index\">\r\n                                    <input type=\"checkbox\" name=\"program{{i}}\" #categories=\"ngModel\" value=\"{{program.programName}}\" [(ngModel)]=\"program.checked\"\r\n                                    /> {{program.programName}}\r\n                                </div>\r\n                            </label>\r\n                            <div [hidden]=\"programs?.valid || programs?.pristine\" class=\"text-alert\">\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                        <!-- <div class=\"form-group col-sm-8\">\r\n                            <label for=\"evento\">Evento</label>\r\n                            <select class=\"form-control\" id=\"evento\" [(ngModel)]=\"IdEvent\"\r\n                                    name=\"evento\" #evento=\"ngModel\" required >\r\n                              <option *ngFor=\"let evento of eventos\" [value]=\"evento._id\">{{evento.name}}</option>\r\n                            </select>\r\n                    </div> -->\r\n                        <div class=\"form-group col-sm-8\" style=\"text-align:center \">\r\n                            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addPerson.form.valid\">Guardar</button>\r\n                            <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\r\n                            <!-- <button type=\"button\" class=\"btn btn-danger\" (click)=\"addPerson.reset()\">Cancelar</button> -->\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/event/persona/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = /** @class */ (function () {
    function EditComponent(_peticionesService, route, router) {
        this._peticionesService = _peticionesService;
        this.route = route;
        this.router = router;
        this.messageEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.newProgramsCheck = [];
        this.newInteres = [];
        this.submitted = false;
    }
    EditComponent.prototype.ngOnInit = function () {
        this.queryPersonId();
    };
    EditComponent.prototype.selectMed = function () {
        // console.log(this.person.contact_medium);
    };
    EditComponent.prototype.queryPersonId = function () {
        var _this = this;
        this.queryPrograms();
        this.route.params.subscribe(function (params) {
            _this.personId = params.id;
            _this.findPerson();
        });
    };
    EditComponent.prototype.llenarProgramsCheckbox = function () {
        for (var _i = 0, _a = this.programs; _i < _a.length; _i++) {
            var p = _a[_i];
            var programItem = {};
            programItem.checked = false;
            programItem.programId = p._id;
            programItem.programName = p.name;
            programItem.state = 0;
            this.newProgramsCheck.push(programItem);
        }
        this.fixProgramCheckbox();
    };
    EditComponent.prototype.fixProgramCheckbox = function () {
        for (var _i = 0, _a = this.person.interes; _i < _a.length; _i++) {
            var p = _a[_i];
            for (var _b = 0, _c = this.newProgramsCheck; _b < _c.length; _b++) {
                var npc = _c[_b];
                if (npc.programId == p.programId) {
                    npc.checked = true;
                    // console.log(this.newProgramsCheck);
                }
            }
        }
    };
    EditComponent.prototype.queryPrograms = function () {
        var _this = this;
        this._peticionesService.getPrograms().subscribe(function (response) {
            _this.programs = response;
            // console.log(this.programs);
            // console.log("hi")
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    EditComponent.prototype.findPerson = function () {
        var _this = this;
        this._peticionesService.getPerson(this.personId).subscribe(function (result) {
            _this.person = result;
            // console.log(this.person);
            _this.personfirstname = _this.person.first_name;
            _this.last_name = _this.person.last_name;
            _this.ci = _this.person.ci;
            _this.cellphone = _this.person.cellphone;
            _this.phone = _this.person.phone;
            _this.email = _this.person.email;
            _this.ocupacion = _this.person.ocupation;
            _this.descOcupation = _this.person.descOcupation;
            _this.medium = _this.person.contact_medium;
            // console.log(this.descOcupation + "hola");
            _this.llenarProgramsCheckbox();
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    EditComponent.prototype.captOcupation = function () {
        // console.log(this.ocupSelected);
        this.descOcupation.universidad = '';
        this.descOcupation.carrera = '';
        this.descOcupation.semestre = '';
        this.descOcupation.areaTrabajo = '';
        this.descOcupation.profesion = '';
        this.descOcupation.cargo = '';
        this.descOcupation.empresa = '';
        this.person.ocupation = this.ocupSelected;
    };
    EditComponent.prototype.saveEdition = function () {
        var _this = this;
        // this.person.first_name=this.personfirstname;
        // this.person.last_name=this.last_name;
        // this.person.ci=this.ci;
        // this.person.cellphone=this.cellphone;
        // this.person.phone=this.phone;
        // this.person.email=this.email;
        this.person.ocupation = this.ocupacion;
        this.person.descOcupation = this.descOcupation;
        for (var _i = 0, _a = this.newProgramsCheck; _i < _a.length; _i++) {
            var npc = _a[_i];
            if (npc.checked) {
                this.newInteres.push(npc);
            }
        }
        this.person.interes = this.newInteres;
        // console.log(this.person);
        this._peticionesService.updatePerson(this.person).subscribe(function (result) {
            var res = result;
            // console.log(res);
            for (var _i = 0, _a = _this.person.interes; _i < _a.length; _i++) {
                var pro = _a[_i];
                var programPerson = {};
                programPerson.personId = _this.person._id;
                programPerson.programId = pro.programId;
                _this._peticionesService.addInteresToEvents(programPerson).subscribe(function (res) {
                    _this.router.navigate(['home/persons']);
                    alert('Se Guardo correctamente la edicion');
                });
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage + "Error al editar");
            alert("no se edito");
        });
    };
    EditComponent.prototype.cancel = function () {
        this.router.navigate(['/home/persons']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("close", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], EditComponent.prototype, "close", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], EditComponent.prototype, "messageEvent", void 0);
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit',
            template: __webpack_require__("./src/app/event/persona/edit/edit.component.html"),
            styles: [__webpack_require__("./src/app/event/persona/edit/edit.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/event/persona/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.first_name.toLowerCase().includes(searchText) || it.last_name.toLowerCase().includes(searchText) || (it.cellphone + '').toLocaleLowerCase().includes(searchText);
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/event/persona/filtro-universidad-medio/filtro-universidad-medio.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n  \r\n  .text-alert{\r\n    color:#dd4b39;\r\n}"

/***/ }),

/***/ "./src/app/event/persona/filtro-universidad-medio/filtro-universidad-medio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n  <br>\r\n  <div class=\"content\">\r\n      <div class=\"box box-primary\">\r\n          <div class=\"container \">\r\n             \r\n            <h5>Filtro de Personas </h5>\r\n\r\n\r\n\r\n            <div>\r\n              <form (ngSubmit)=\"onSubmit()\" #filtroForm=\"ngForm\">\r\n                <div class=\"form-group col-sm-8\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"programs\">Universidades</label>\r\n                          <br>           \r\n                          <label>\r\n                            <div *ngFor=\"let uni of listaUniversidades; let i = index\" >\r\n                                  <input type=\"checkbox\" name=\"uni{{i}}\" #univer=\"ngModel\" value=\"{{uni._id}}\" [(ngModel)]=\"uni.checked\" /> {{uni.name}}\r\n                            </div>\r\n                           </label>                                 \r\n                            <div [hidden]=\"univer?.valid || univer?.pristine\"\r\n                                class=\"text-alert\"> \r\n                            </div>\r\n                     </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"programs\">Medios de Contacto</label>\r\n                       <br>        \r\n                         <label>\r\n                            <div *ngFor=\"let mc of listaMediosContacto; let i = index\" >\r\n                                <input type=\"checkbox\" name=\"mc{{i}}\" #mediosC=\"ngModel\" value=\"{{mc.id}}\" [(ngModel)]=\"mc.checked\" /> {{mc.name}}\r\n                            </div>\r\n                          </label>                        \r\n                    <div [hidden]=\"mediosC?.valid || mediosC?.pristine\"\r\n                        class=\"text-alert\">\r\n\r\n                    </div>\r\n                </div>\r\n    \r\n                  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!filtroForm.form.valid\">Buscar</button>\r\n                  <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\r\n                  <br>\r\n                  <br>\r\n                </div>\r\n              </form>\r\n\r\n\r\n\r\n\r\n              <table class=\"table table-hover\" >\r\n                <thead >\r\n                   <tr>\r\n                      <th>Nombre</th>\r\n                      <th>Apellido</th>\r\n                      <th>Telefono</th>\r\n                      <th>Whatsapp Group</th>\r\n                      <th>Ciudad</th>\r\n                      <th>Ocupacion</th>\r\n                      <th colspan=\"2\">Opciones</th>\r\n                   </tr>\r\n                </thead>\r\n                <tbody> \r\n                   <tr *ngFor=\"let i of listado_personas\">\r\n                      <td>{{ i.first_name }}</td>\r\n                      <th>{{i.last_name}}</th>\r\n                      <td>{{ i.cellphone }}</td>\r\n                      <td>{{i.whatsapp_group}}</td>\r\n                      <td>{{i.city}}</td>\r\n                      <td>{{ i.ocupation }}</td>\r\n                     \r\n                      <td>\r\n                         <!-- <a class=\"btn btn-primary\" (click)=\"edit(i._id)\">EDITAR</a> -->\r\n                        \r\n                      </td>\r\n                   </tr>\r\n                </tbody>\r\n                <!-- <h6>.</h6> -->\r\n             </table>\r\n    \r\n            </div>\r\n\r\n          </div>\r\n      </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/event/persona/filtro-universidad-medio/filtro-universidad-medio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltroUniversidadMedioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global__ = __webpack_require__("./src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FiltroUniversidadMedioComponent = /** @class */ (function () {
    function FiltroUniversidadMedioComponent(_peticionesService, route, router) {
        this._peticionesService = _peticionesService;
        this.route = route;
        this.router = router;
        this.listaUniversidades = [];
        this.listaMediosContacto = [];
        this.listado_personas = [];
        this.listaUniversidadesChecked = [];
        this.listaMediosContactoChecked = [];
    }
    FiltroUniversidadMedioComponent.prototype.ngOnInit = function () {
        this.filterPerson();
        this.llenarUniversidades();
        this.llenarMediosContacto();
    };
    FiltroUniversidadMedioComponent.prototype.onSubmit = function () {
        this.listado_personas = [];
        this.listaUniversidadesChecked = [];
        this.listaMediosContactoChecked = [];
        for (var _i = 0, _a = this.listaUniversidades; _i < _a.length; _i++) {
            var u = _a[_i];
            if (u.checked) {
                this.listaUniversidadesChecked.push(u);
            }
        }
        // console.log(this.listaUniversidadesChecked)
        for (var _b = 0, _c = this.listaMediosContacto; _b < _c.length; _b++) {
            var m = _c[_b];
            if (m.checked) {
                this.listaMediosContactoChecked.push(m);
            }
        }
        // console.log(this.listaMediosContactoChecked)
        this.filterPerson();
    };
    FiltroUniversidadMedioComponent.prototype.filterPerson = function () {
        // let u={}as ObjeSearch;
        // u.uni='Universidad Mayor de San Simon';
        var _this = this;
        var ots = {};
        ots.listaUniChecked = this.listaUniversidadesChecked;
        ots.listaMedChecked = this.listaMediosContactoChecked;
        ots.identity = __WEBPACK_IMPORTED_MODULE_3__services_global__["b" /* Identity */];
        this._peticionesService.filterUniversidadMedio(ots).subscribe(function (response) {
            _this.listaPersonas = response;
            _this.listado_personas = _this.listaPersonas;
            // console.log(this.listado_personas);
        });
    };
    FiltroUniversidadMedioComponent.prototype.llenarUniversidades = function () {
        var _this = this;
        this._peticionesService.getUni().subscribe(function (res) {
            var universidades = res[0].university;
            console.log(universidades);
            for (var _i = 0, universidades_1 = universidades; _i < universidades_1.length; _i++) {
                var univer = universidades_1[_i];
                var uni = {};
                uni._id = univer._id;
                uni.name = univer.nombre;
                uni.checked = false;
                _this.listaUniversidades.push(uni);
            }
            console.log(_this.listaUniversidades);
        });
        // let umss={}as ItemUniversidad;
        // umss.checked=false;
        // umss.id=1;
        // umss.name='Universidad Mayor de San Simon';
        // this.listaUniversidades.push(umss);
        // let umss2={}as ItemUniversidad;
        // umss2.checked=false;
        // umss2.id=2;
        // umss2.name='U. Catolica';
        // this.listaUniversidades.push(umss2);
        // let umss3={}as ItemUniversidad;
        // umss3.checked=false;
        // umss3.id=3;
        // umss3.name='U. Latinoamericana';
        // this.listaUniversidades.push(umss3);
    };
    FiltroUniversidadMedioComponent.prototype.llenarMediosContacto = function () {
        var WhatsApp = {};
        WhatsApp.name = 'WhatsApp';
        WhatsApp.id = 1;
        WhatsApp.checked = false;
        this.listaMediosContacto.push(WhatsApp);
        var Afiches = {};
        Afiches.name = 'Afiches';
        Afiches.id = 2;
        Afiches.checked = false;
        this.listaMediosContacto.push(Afiches);
        var Facebook = {};
        Facebook.name = 'Facebook';
        Facebook.id = 3;
        Facebook.checked = false;
        this.listaMediosContacto.push(Facebook);
        var Recomendacion = {};
        Recomendacion.name = 'Recomendacion';
        Recomendacion.id = 4;
        Recomendacion.checked = false;
        this.listaMediosContacto.push(Recomendacion);
        var VisitasA = {};
        VisitasA.name = 'Visitas Aulas';
        VisitasA.id = 5;
        VisitasA.checked = false;
        this.listaMediosContacto.push(VisitasA);
        var VisitasE = {};
        VisitasE.name = 'Visita Empresa';
        VisitasE.id = 6;
        VisitasE.checked = false;
        this.listaMediosContacto.push(VisitasE);
    };
    FiltroUniversidadMedioComponent.prototype.cancel = function () {
        for (var _i = 0, _a = this.listaUniversidades; _i < _a.length; _i++) {
            var itemU = _a[_i];
            itemU.checked = false;
        }
        this.listaUniversidadesChecked = [];
        for (var _b = 0, _c = this.listaMediosContacto; _b < _c.length; _b++) {
            var itemM = _c[_b];
            itemM.checked = false;
        }
        this.listaMediosContactoChecked = [];
        this.listado_personas = [];
    };
    FiltroUniversidadMedioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-filtro-universidad-medio',
            template: __webpack_require__("./src/app/event/persona/filtro-universidad-medio/filtro-universidad-medio.component.html"),
            styles: [__webpack_require__("./src/app/event/persona/filtro-universidad-medio/filtro-universidad-medio.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], FiltroUniversidadMedioComponent);
    return FiltroUniversidadMedioComponent;
}());



/***/ }),

/***/ "./src/app/event/persona/persona.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 35px;\r\n    margin-bottom: 5px;\r\n    cursor: pointer;\r\n    font-size: 10px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\n/* Hide the browser's default radio button */\r\n\r\n.container input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n}\r\n\r\n/* Create a custom radio button */\r\n\r\n.checkmark {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 15px;\r\n    width: 15px;\r\n    background-color: #eee;\r\n    border-radius: 30%;\r\n}\r\n\r\n/* On mouse-over, add a grey background color */\r\n\r\n.container:hover input ~ .checkmark {\r\n    background-color: #ccc;\r\n}\r\n\r\n/* When the radio button is checked, add a blue background */\r\n\r\n.container input:checked ~ .checkmark {\r\n    background-color: #2196F3;\r\n}\r\n\r\n/* Create the indicator (the dot/circle - hidden when not checked) */\r\n\r\n.checkmark:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n\r\n/* Show the indicator (dot/circle) when checked */\r\n\r\n.container input:checked ~ .checkmark:after {\r\n    display: block;\r\n}\r\n\r\n/* Style the indicator (dot/circle) */\r\n\r\n.container .checkmark:after {\r\n \ttop: 6px;\r\n\tleft: 6px;\r\n\twidth: 5px;\r\n\theight: 5px;\r\n\tborder-radius: 20%;\r\n\tbackground: white;\r\n}"

/***/ }),

/***/ "./src/app/event/persona/persona.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n  <div class=\"content\">\r\n\r\n    <div class=\"box box-primary\">\r\n\r\n        <section class=\"content\">\r\n            <div>     \r\n                <ol class=\"breadcrumb\">\r\n                    <li><a class=\"btn btn-primary\" [routerLink]=\"['/home/persons/add']\"><i class=\"fa fa-book\"></i>Registrar Persona</a></li>\r\n                </ol>\r\n            </div> \r\n           <div *ngIf='rol?.name==\"Admin\"'>\r\n             <label for=\"text\">{{this.textoAdmin}}</label>\r\n           </div>\r\n           <table class=\"table\">\r\n                 <th>Filtros Personas</th> \r\n           </table>\r\n          \r\n             <div>\r\n            <div class=\"filter-wrap\">\r\n              <div class=\"col-lg-1\">Buscar:</div>\r\n              <input [(ngModel)]=\"searchText\" placeholder=\"Nombre Persona\" class=\"filter-input\">\r\n              <span class=\"filter-clear\" *ngIf=\"searchText.length>0\" (click)=\"clearFilter()\">X</span>\r\n              <!-- <a class=\"btn btn-primary filter-clear\" *ngIf=\"searchText.length>0\" (clic)=\"clearFilter()\">Cancelar</a> -->\r\n            </div>\r\n          </div>\r\n     <table class=\"table table-hover table table-striped table-bordered\" style=\"width:100%\">\r\n        <thead >\r\n           <tr>\r\n              <th>Nombre</th>\r\n              <th>Apellido</th>\r\n              <th>Telefono</th>\r\n              <th>Whatsapp Group</th>\r\n              <th>Ciudad</th>\r\n              <th>Ocupacion</th>\r\n              <th>Perfil</th>\r\n              <!-- <th>Asistencia</th> -->\r\n              <th colspan=\"2\">Opciones</th>\r\n           </tr>\r\n        </thead>\r\n        <tbody > \r\n           <!--<tr *ngFor=\"let i of inscriptions | buscarPersona: busqueda\">-->\r\n            <tr *ngFor=\"let i of mostrar | filter : searchText\" >\r\n              <td>{{ i.first_name }}</td>\r\n              <th>{{i.last_name}}</th>\r\n              <td>{{ i.cellphone }}</td>\r\n              <td>{{i.whatsapp_group}}</td>\r\n              <td>{{i.city}}</td>\r\n              <td>{{ i.ocupation }}</td>\r\n              <!-- <td>\r\n                  <p *ngIf=\"color == 'verde'\">\r\n                    <a class=\" btn btn-success\" (click)=\"butonv(i._id)\">ok</a>\r\n                  </p>\r\n                  <p *ngIf=\"color == 'rojo'\">\r\n                    <a class=\" btn btn-danger\" (click)=\"butonv(i._id)\">not</a>\r\n                  </p>\r\n              </td>  -->\r\n              <!-- <td>\r\n                  <p *ngIf=\"color == 'verde'\">\r\n                    <a class=\" btn btn-success\" (click)=\"butonv(i._id)\">ok</a>\r\n                  </p>\r\n                  <p *ngIf=\"color == 'rojo'\">\r\n                    <a class=\" btn btn-danger\" (click)=\"butonv(i._id)\">not</a>\r\n                  </p>\r\n              </td>  -->\r\n              <td>\r\n                <a class=\"btn btn-info\" (click)=\"viewProfile(i._id)\">VER</a>\r\n              </td>\r\n              <td>\r\n                 <a class=\"btn btn-primary\" (click)=\"edit(i._id)\">EDITAR</a>\r\n                 <!-- <a class=\"btn btn-warning\" (click)=\"asistence(i._id)\">asist</a> -->\r\n                 <!-- <app-control-asistance></app-control-asistance> -->\r\n              </td>\r\n           </tr>\r\n        </tbody>\r\n        <tfoot align=\"center\">\r\n         <!-- <pagination-controls id = \"foo\" maxSize = \" 9 \"\r\n         ( pageChange ) = \" pageChanged ($ event) \"\r\n         directionLinks = \" true \"\r\n         autoHide = \" verdadero \"\r\n         previousLabel = \" Anterior \"\r\n         nextLabel = \" Siguiente \"\r\n         screenReaderPaginationLabel = \" Paginación \"\r\n         screenReaderPageLabel = \" página \"\r\n         screenReaderCurrentLabel = \" Estás en la página \">\r\n          | paginate: {id: 'foo',\r\n           itemsPerPage: pageSize,\r\n           currentPage: p,\r\n           totalItems: total}  \r\n         </pagination-controls>  -->\r\n         <!-- <a class=\"btn\" (click)=\"dis()\" disabled = \"page == 1\" >\r\n          anterior\r\n        </a> -->\r\n        <a>Pagina # {{page}}</a>\r\n        <br>\r\n        <button (click)=\"dis()\" [disabled]=\"page == 1\">Anterior</button>\r\n        <button (click)=\"aum()\" [disabled]=\"page == totalPag\" >Siguiente</button>\r\n         <!-- <a class=\"previousLabel\" (click)=\"aum()\" disabled=\" page == totalPag\">\r\n           siguiente\r\n         </a> -->\r\n        </tfoot>\r\n     </table>\r\n     \r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/event/persona/persona.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_persona_service__ = __webpack_require__("./src/app/services/persona.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global__ = __webpack_require__("./src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { NgxPaginationModule } from 'ngx-pagination';
var PersonaComponent = /** @class */ (function () {
    function PersonaComponent(router, route, _personaService, _peticionesService) {
        this.router = router;
        this.route = route;
        this._personaService = _personaService;
        this._peticionesService = _peticionesService;
        this.searchText = "";
        this.color = 'rojo';
        this.mostrar = [];
        this.textoAdmin = "Usted es Administrador y se muestran TODAS las personas";
    }
    PersonaComponent.prototype.ngOnInit = function () {
        // console.log(Identity)
        this.getRol();
        this.getCartera();
    };
    PersonaComponent.prototype.listarPersonasPorRol = function () {
        var _this = this;
        this._peticionesService.getPersonsOfCartera(this.cartera._id).subscribe(function (response) {
            _this.listado_personas = response;
            _this.total = _this.listado_personas.length;
            _this.mostrarPer();
            // console.log(this.listado_personas)
        });
    };
    PersonaComponent.prototype.dis = function () {
        this.page = this.page - 1;
        var inicio = (8 * (this.page - 1));
        var final = (8 * (this.page - 1)) + 8;
        this.mostrar = [];
        for (var a = inicio; a < final; a++) {
            this.mostrar.push(this.listado_personas[a]);
        }
    };
    PersonaComponent.prototype.aum = function () {
        this.page = this.page + 1;
        // console.log(this.page)
        var inicio = (8 * (this.page - 1));
        // console.log(inicio)
        var final = (8 * (this.page - 1)) + 8;
        if (final > this.total) {
            final = this.total;
        }
        // console.log(final)
        this.mostrar = [];
        for (var a = inicio; a < final; a++) {
            this.mostrar.push(this.listado_personas[a]);
        }
    };
    PersonaComponent.prototype.mostrarPer = function () {
        this.page = 1;
        this.total = this.listado_personas.length;
        if (this.total == 0) {
            this.totalPag = 1;
        }
        else {
            this.totalPag = Math.ceil(this.total / 8);
        }
        this.mostrar = [];
        console.log(this.total);
        if (this.totalPag > 1) {
            for (var a = 0; a < 8; a++) {
                this.mostrar.push(this.listado_personas[a]);
            }
        }
        else {
            this.mostrar = this.listado_personas;
        }
    };
    PersonaComponent.prototype.query = function () {
        var _this = this;
        this._peticionesService.getPersons().subscribe(function (result) {
            _this.listado_personas = result;
            _this.mostrarPer();
            // console.log(this.listado_personas);
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    PersonaComponent.prototype.edit = function (_id) {
        this.router.navigate(['home/persons/edit', _id]);
    };
    PersonaComponent.prototype.asistence = function (_id) {
        this.router.navigate(['home/persons/asistencia', _id]);
    };
    // butonv(){
    //  if(this.color == 'rojo') this.color='verde'
    //  else{this.color = 'rojo'}
    // }
    PersonaComponent.prototype.butonv = function (_id) {
        if (this.color == 'rojo') {
            this.router.navigate(['home/persons/asistencia', _id]);
            this.color = 'verde';
        }
        else {
            this.color = 'rojo';
        }
    };
    PersonaComponent.prototype.clearFilter = function () {
        this.searchText = "";
    };
    PersonaComponent.prototype.getCartera = function () {
        var _this = this;
        this._peticionesService.getCarteraFromUserId(__WEBPACK_IMPORTED_MODULE_4__services_global__["b" /* Identity */]._id).subscribe(function (response) {
            _this.cartera = response;
            if (_this.rol.name == "Admin") {
                _this.query();
            }
            else {
                _this.listarPersonasPorRol();
            }
        });
    };
    PersonaComponent.prototype.getRol = function () {
        var _this = this;
        this._peticionesService.getRole(__WEBPACK_IMPORTED_MODULE_4__services_global__["b" /* Identity */].rol).subscribe(function (response) {
            _this.rol = response;
            // console.log(this.rol)
        });
    };
    PersonaComponent.prototype.viewProfile = function (_id) {
        this.router.navigate(['home/profilePerson', _id]);
    };
    PersonaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-persona',
            template: __webpack_require__("./src/app/event/persona/persona.component.html"),
            styles: [__webpack_require__("./src/app/event/persona/persona.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_persona_service__["a" /* PersonaService */], __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__services_persona_service__["a" /* PersonaService */],
            __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]])
    ], PersonaComponent);
    return PersonaComponent;
}());



/***/ }),

/***/ "./src/app/event/profile-person/profile-person.component.css":
/***/ (function(module, exports) {

module.exports = ".user-row {\r\n    margin-bottom: 14px;\r\n}\r\n.user-row:last-child {\r\n    margin-bottom: 0;\r\n}\r\n.dropdown-user {\r\n    margin: 13px 0;\r\n    padding: 5px;\r\n    height: 100%;\r\n}\r\n.dropdown-user:hover {\r\n    cursor: pointer;\r\n}\r\n.table-user-information > tbody > tr {\r\n    border-top: 1px solid rgb(221, 221, 221);\r\n}\r\n.table-user-information > tbody > tr:first-child {\r\n    border-top: 0;\r\n}\r\n.table-user-information > tbody > tr > td {\r\n    border-top: 0;\r\n}\r\n.toppad\r\n{\r\n    margin-top:20px;\r\n}"

/***/ }),

/***/ "./src/app/event/profile-person/profile-person.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n  <div class=\"content\">\r\n\r\n    <div class=\"box box-primary\">\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4 toppad  pull-right col-md-offset-3 \">\r\n              <!--<A href=\"edit.html\" >Editar Perfil</A>-->\r\n              <br>\r\n              <p class=\"text-info\">Fecha: {{date | date}}</p>\r\n            </div>\r\n        \r\n            <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-4 col-lg-offset-4 toppad\" >\r\n              <h2 class=\"text-info\" align=\"center\">Perfil de Persona</h2>\r\n              <br>\r\n              <div class=\"panel panel-info\">\r\n                <div class=\"panel-heading\">\r\n                  <h3 class=\"panel-title\"><strong>{{person?.first_name}} {{person?.last_name}}</strong></h3>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-3 col-lg-3 \" align=\"center\"><img  class=\"profile-img img-circle img-responsive\" src=\"assets/dist/img/line.png\" alt=\"\"></div>\r\n                      \r\n                    <div class=\" col-md-9 col-lg-9 \">\r\n                        <strong>Datos personales:</strong>\r\n                      <table class=\"table table-user-information\">\r\n                        <tbody>\r\n                          <tr>\r\n                            <td>Nombres</td>\r\n                            <td>{{person?.first_name}}</td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>Apellidos</td>\r\n                            <td>{{person?.last_name}}</td>\r\n                          </tr>\r\n                          <tr>\r\n                              <td>Cédula de Identidad</td>\r\n                              <td>{{person?.ci}}</td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>Teléfono</td>\r\n                            <td *ngIf=\"person?.phone==null\">-----</td>\r\n                            <td>{{person?.phone}}</td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>Celular</td>\r\n                            <td>{{person?.cellphone}}</td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>Correo Electrónico</td>\r\n                            <td><a href=\"mailto:email\">{{person?.email}}</a></td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>Cartera</td>\r\n                            <td>{{carteraReturned?.name}}</td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                    <strong>Estado laboral de la Persona:</strong>\r\n                      <table class=\"table table-user-information\">\r\n                        <tbody>\r\n                          <tr>\r\n                            <td>Ocupación</td>\r\n                            <td>{{person?.ocupation}}</td>                                                                                        \r\n                          </tr>\r\n                        <!--Estudiante-->\r\n                          <tr *ngIf=\"ocupation=='estudiante'\">\r\n                              <td>Carrera</td>                                        \r\n                              <td>{{carrera?.nombre}}</td>                                      \r\n                          </tr>\r\n                          <tr *ngIf=\"ocupation=='estudiante'\"> \r\n                              <td>Universidad</td>                                        \r\n                              <td>{{universidad?.nombre}}</td>                                   \r\n                          </tr>\r\n                          <tr *ngIf=\"ocupation=='estudiante'\">\r\n                              <td>Semestre</td>                                        \r\n                              <td>{{ocupations?.semestre}}</td>                                     \r\n                          </tr>\r\n                        <!--Particular-->\r\n                          <tr *ngIf=\"ocupation=='particular'\">\r\n                              <td>Área de Trabajo</td>                                        \r\n                              <td>{{ocupations?.areaTrabajo}}</td>                                     \r\n                          </tr>\r\n                          <tr>\r\n                        <!--Profesional-->\r\n                          <tr *ngIf=\"ocupation=='profesional'\">\r\n                            <td>Profesión</td>                                        \r\n                            <td>{{ocupations?.profesion}}</td>                                     \r\n                          </tr>\r\n                          <tr *ngIf=\"ocupation=='profesional'\">\r\n                            <td>Empresa</td>                                        \r\n                            <td>{{ocupations?.empresa}}</td>                                     \r\n                          </tr>\r\n                          <tr *ngIf=\"ocupation=='profesional'\">\r\n                            <td>Cargo</td>                                        \r\n                            <td>{{ocupations?.cargo}}</td>                                     \r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                    <strong>Programas de Interés:</strong>\r\n                      <table class=\"table table-user-information\">\r\n                        <tbody>\r\n                          <tr *ngFor=\"let i of person?.interes\">\r\n                            <td><li>{{i.programName}}</li></td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                      <!-- <strong>Seguimiento:</strong>\r\n                      <table class=\"table table-user-information\">\r\n                        <tbody>\r\n                          <tr>\r\n                            <td>\r\n                              <a class=\"btn btn-primary fa fa-plus\" (click)=\"addTracing(personId)\"> Añadir Seguimiento</a>\r\n                            </td> \r\n                          </tr>\r\n                          <tr *ngFor=\"let i of tracing\">\r\n                            <td>{{ i.date_tracing | date}}</td>\r\n                            <td *ngIf=\"i.state==1\">Programar llamada</td>\r\n                            <td *ngIf=\"i.state==2\">No le contestó llamada</td>\r\n                            <td *ngIf=\"i.state==3\">Contestó pero no confirmó</td>\r\n                            <td>{{ i.details }}</td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table> -->\r\n                    </div>\r\n                  </div>\r\n                </div>  \r\n              </div>\r\n              <div align=\"center\">\r\n                  <button class=\"btn btn-primary\" (click)=\"cancelar()\">Volver</button>\r\n              </div> \r\n            </div>\r\n          </div>\r\n\r\n    </div>\r\n  </div>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/event/profile-person/profile-person.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePersonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilePersonComponent = /** @class */ (function () {
    // public tracing;
    function ProfilePersonComponent(route, router, _peticionesService) {
        this.route = route;
        this.router = router;
        this._peticionesService = _peticionesService;
        this.date = new Date();
    }
    ProfilePersonComponent.prototype.ngOnInit = function () {
        this.queryPersonId();
        this.findPerson();
    };
    ProfilePersonComponent.prototype.queryPersonId = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.personId = params.id;
        });
    };
    ProfilePersonComponent.prototype.findPerson = function () {
        var _this = this;
        // console.log(this.personId)
        this._peticionesService.getPerson(this.personId).subscribe(function (result) {
            _this.person = result;
            // console.log(this.person)
            _this.findCartera();
            _this.ocupation = _this.person.ocupation;
            //  console.log(this.ocupation)
            _this.ocupations = _this.person.descOcupation;
            _this._peticionesService.getCarrera(_this.person.descOcupation.carrera).subscribe(function (res) {
                _this.carrera = res;
                // console.log('esta es la carrera',this.carrera);
                _this._peticionesService.getUniversidad(_this.person.descOcupation.universidad).subscribe(function (res) {
                    _this.universidad = res;
                });
            }, function (err) {
                console.log(err);
            });
            //  console.log(this.ocupations)
            // this.tracing = this.person.profile.tracing;
            // console.log(this.tracing)
            // for (let i = 0; i < this.person.profile.length; i++) {
            //   for (let j = 0; j < this.person.programDetails.length; j++) {
            //     // console.log(this.person.profile[i].programs)
            //     // console.log(this.person.programDetails[j].name)
            //     if (this.person.profile[i].programs == this.person.programDetails[j]._id) {
            //       this.person.profile[i].name = this.person.programDetails[j].name;
            //     }
            //   }
            // }
        }, function (error) {
            console.log(error);
        });
    };
    ProfilePersonComponent.prototype.findCartera = function () {
        var _this = this;
        this._peticionesService.getCartera(this.person.carteras).subscribe(function (result) {
            _this.carteraReturned = result;
            // console.log(this.carteraReturned)
        }, function (error) {
            console.log(error);
        });
    };
    // addTracing(){
    //   this.router.navigate(['/home/tracing/add', this.personId]);
    // }
    ProfilePersonComponent.prototype.cancelar = function () {
        window.history.back();
    };
    ProfilePersonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile-person',
            template: __webpack_require__("./src/app/event/profile-person/profile-person.component.html"),
            styles: [__webpack_require__("./src/app/event/profile-person/profile-person.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]])
    ], ProfilePersonComponent);
    return ProfilePersonComponent;
}());



/***/ }),

/***/ "./src/app/event/profile-person/tracing/tracing.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/event/profile-person/tracing/tracing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n    <br>\r\n    <div class=\"\">\r\n       <div class=\"box box-primary\">\r\n  \r\n          <div class=\"container \">\r\n             <div [hidden]=\"submitted\">\r\n                <h1>Añadir Seguimiento</h1>\r\n                <br>\r\n                <form (ngSubmit)=\"save()\" #addTracing=\"ngForm\" class=\"jumbotron\">\r\n                  <!-- <div class=\"form-group col-sm-8\">\r\n                      <label data-error=\"wrong\" data-success=\"right\" for=\"form8\">\r\n                         <i class=\"fa fa-calendar prefix grey-text\"></i> Fecha de Seguimiento</label>\r\n                      <input type=\"date\" id=\"form34\" class=\"form-control validate\" [(ngModel)]=\"model.date_tracing\" name=\"date\" #date required>\r\n                  </div> -->\r\n                  <div class=\"form-group col-sm-8\">\r\n                      <label for=\"state\">Estado</label>\r\n                      <select class=\"form-control\" id=\"state\" [(ngModel)]=\"model.state\" name=\"state\" #state=\"ngModel\">\r\n                        <option value=\"1\">Programar llamada</option>\r\n                        <option value=\"2\">No le contestó llamada</option>\r\n                        <option value=\"3\">Contestó pero no confirmó</option>\r\n                      </select>\r\n                      <!-- <div [hidden]=\"offices.valid || offices.pristine\" class=\"\">\r\n                                 sucursal is required\r\n                         </div> -->\r\n                  </div>\r\n                  <div class=\"form-group col-sm-8\">\r\n                      <label for=\"details\" class=\" control-label\">Detalles</label>\r\n                      <input type=\"text\" pattern=\"[a-zA-Z ]{3,150}\" class=\"form-control\" id=\"details\" [(ngModel)]=\"model.details\" name=\"details\"\r\n                         #details=\"ngModel\" required>\r\n                      <span *ngIf=\"!details?.valid && details?.touched\" class=\"text-alert\">\r\n                         *Detalles del Seguimiento requerido.\r\n                      </span>\r\n                      <!--<div [hidden]=\"descripcion?.valid || descripcion?.pristine\" class=\"\">\r\n                                  descripcion requerida\r\n                              </div>-->\r\n                  </div>\r\n                  <div class=\"form-group col-sm-8\" style=\"text-align:center \">\r\n                      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addTracing?.form.valid\">Guardar</button>\r\n                      <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\r\n                  </div>\r\n                </form>\r\n             </div>\r\n          </div>\r\n       </div>\r\n    </div>\r\n  </div>  "

/***/ }),

/***/ "./src/app/event/profile-person/tracing/tracing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TracingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modelo_tracing__ = __webpack_require__("./src/app/modelo/tracing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TracingComponent = /** @class */ (function () {
    function TracingComponent(_peticionesService, route, router) {
        this._peticionesService = _peticionesService;
        this.route = route;
        this.router = router;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__modelo_tracing__["a" /* Tracing */](null, "", "");
    }
    TracingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.personId = params.id;
            // this.model.personId = this.personId;
        });
    };
    TracingComponent.prototype.onSubmit = function () {
        // console.log(this.model);
    };
    TracingComponent.prototype.save = function () {
        if ((this.model.details == '')) {
            window.alert("Asegúrese de llenar todos los campos");
        }
        else {
            // console.log(this.model);
            // this._peticionesService.addTracing(this.personId, this.model).subscribe(response => {
            //     var esperado = response;
            //     console.log(esperado);
            //     alert("El seguimiento se creó correctamente");
            //     window.history.back()
            //     },
            //     error => {
            //       console.log(<any>error);
            // });
        }
    };
    TracingComponent.prototype.cancel = function () {
        window.history.back();
    };
    TracingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tracing',
            template: __webpack_require__("./src/app/event/profile-person/tracing/tracing.component.html"),
            styles: [__webpack_require__("./src/app/event/profile-person/tracing/tracing.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], TracingComponent);
    return TracingComponent;
}());



/***/ }),

/***/ "./src/app/events/add-carrera/add-carrera.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n.ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n  \r\n.text-alert{\r\n    color:#dd4b39;\r\n}"

/***/ }),

/***/ "./src/app/events/add-carrera/add-carrera.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n  <br>\r\n  <!-- <app-alerts></app-alerts> -->\r\n  <div class=\"content\">\r\n     <div class=\"box box-primary\">\r\n\r\n        <div class=\"container \">\r\n           <div [hidden]=\"submitted\">\r\n              <h1>Registrar Carrera</h1>\r\n              <br>\r\n              <form (ngSubmit)=\"save()\" #addEvent=\"ngForm\" class=\"\">\r\n                 <div class=\"form-group col-sm-8\">\r\n                    <label for=\"uni\" class=\"control-label\">Nombre Carrera</label>\r\n                    <input type=\"text\" pattern=\"[a-zA-Z0-9 .,-]{3,100}\" class=\"form-control\" id=\"uni\" [(ngModel)]=\"model.carrera\" name=\"uni\" #uni=\"ngModel\" required />\r\n                 </div>\r\n                 <div class=\"form-group col-sm-8\" style=\"text-align:center \">\r\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addEvent.form.valid\">Guardar</button>\r\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelar()\">Cancelar</button>\r\n                 </div>\r\n              </form>\r\n           </div>\r\n        </div>\r\n     </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/events/add-carrera/add-carrera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCarreraComponent; });
/* unused harmony export Carrera */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddCarreraComponent = /** @class */ (function () {
    function AddCarreraComponent(_peticionesService, route, router) {
        this._peticionesService = _peticionesService;
        this.route = route;
        this.router = router;
        this.submitted = false;
        this.model = new Carrera("");
    }
    AddCarreraComponent.prototype.ngOnInit = function () {
    };
    AddCarreraComponent.prototype.save = function () {
        this._peticionesService.addCarrera(this.model).subscribe(function (res) {
            var resul = res;
        });
        this.router.navigate(['/home/events']);
    };
    AddCarreraComponent.prototype.cancelar = function () {
        this.router.navigate(['/home/events']);
    };
    AddCarreraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-carrera',
            template: __webpack_require__("./src/app/events/add-carrera/add-carrera.component.html"),
            styles: [__webpack_require__("./src/app/events/add-carrera/add-carrera.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AddCarreraComponent);
    return AddCarreraComponent;
}());

var Carrera = /** @class */ (function () {
    function Carrera(carrera) {
        this.carrera = carrera;
    }
    return Carrera;
}());



/***/ }),

/***/ "./src/app/events/addEvent/addEvent.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n.ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n  \r\n.text-alert{\r\n    color:#dd4b39;\r\n}"

/***/ }),

/***/ "./src/app/events/addEvent/addEvent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n   <br>\r\n   <!-- <app-alerts></app-alerts> -->\r\n   <div class=\"content\">\r\n      <div class=\"box box-primary\">\r\n\r\n         <div class=\"container \">\r\n            <div >\r\n               <h1>Registrar Evento</h1>\r\n               <br>\r\n               <form (ngSubmit)=\"save()\" #addEvent=\"ngForm\" >\r\n                  <div class=\"form-group col-sm-8\">\r\n                     <label for=\"name\" class=\"control-label\">Nombre Evento</label>\r\n                     <!-- pattern=\"[a-zA-Z]{3,20}[ ]{0,1}[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\" -->\r\n                     <!-- <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}\" class=\"form-control\" id=\"name\" [(ngModel)]=\"model.name\" name=\"name\" #name=\"ngModel\" required /> -->\r\n                     <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 ]{3,80}\" class=\"form-control\" id=\"name\" [(ngModel)]=\"model.name\" name=\"name\" #name=\"ngModel\" required />\r\n                     <!-- <span *ngIf=\"!name.valid && name.touched\" class=\"text-alert\">\r\n                                     *Nombre de Evento requerido.\r\n                             </span> -->\r\n                     <!--<div [hidden]=\"name?.valid || name?.pristine\" class=\"text-alert\">\r\n                             kjkn\r\n                         </div>-->\r\n                  </div>\r\n                  <div class=\"form-group col-sm-8\">\r\n                     <label for=\"descripcion\" class=\" control-label\">Descripcion</label>\r\n                     <input type=\"text\" pattern=\"[a-zA-Z .-_:;¿?¡!',0-9Ñ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú]{3,280}\" class=\"form-control\" id=\"descripcion\" [(ngModel)]=\"model.description\" name=\"descripcion\"\r\n                        #descripcion=\"ngModel\" required>\r\n                     <span *ngIf=\"!descripcion.valid && descripcion.touched\" class=\"text-alert\">\r\n                        *descripcion de Evento requerido.\r\n                     </span>\r\n                     <!--<div [hidden]=\"descripcion?.valid || descripcion?.pristine\" class=\"\">\r\n                                 descripcion requerida\r\n                             </div>-->\r\n                  </div>\r\n                  <div class=\"form-group col-sm-8\">\r\n                     <label data-error=\"wrong\" data-success=\"right\" for=\"form8\">\r\n                        <i class=\"fa fa-calendar prefix grey-text\"></i> Inicio</label>\r\n                     <input type=\"date\" id=\"form34\" class=\"form-control validate\" [(ngModel)]=\"model.date_start\" name=\"fecha\" required #date>\r\n                  </div>\r\n                  <div class=\"form-group col-sm-8\">\r\n                     <label for=\"total\">Total cupos</label>\r\n                     <input type=\"number\" pattern=\"[0-9]{0,3}\" class=\"form-control\" id=\"total\" [(ngModel)]=\"model.total\" name=\"total\" #total=\"ngModel\" required>\r\n                     <span *ngIf=\"!total.valid && total.touched\" class=\"text-alert\">\r\n                        *total cupo de evento invalido.\r\n                     </span>\r\n                     <!--<div [hidden]=\"total?.valid || total?.pristine\" class=\"\">\r\n                                 Monto inicial Requerido\r\n                         </div>-->\r\n                  </div>\r\n                  <div class=\"form-group col-sm-8\">\r\n                     <label for=\"nomPrograma\">Programa</label>\r\n                     <select class=\"form-control\" id=\"nomPrograma\" required [(ngModel)]=\"model.programs\" name=\"nomPrograma\" #nomPrograma=\"ngModel\">\r\n                        <option *ngFor=\"let programa of programs\" [value]=\"programa._id\">{{programa.name}}</option>\r\n                     </select>\r\n\r\n\r\n\r\n                     <!-- <div [hidden]=\"offices.valid || offices.pristine\" class=\"\">\r\n                                sucursal is required\r\n                        </div> -->\r\n                  </div>\r\n\r\n\r\n                  <div class=\"form-group col-sm-8\">\r\n                        <label for=\"offices\">Sucursal</label>\r\n                        <select class=\"form-control\" id=\"offices\"\r\n                                required\r\n                                [(ngModel)]=\"model.offices\" name=\"offices\"\r\n                                #offices=\"ngModel\">\r\n                          <option *ngFor=\"let sucur of sucursales\" [value]=\"sucur._id\">{{sucur.name}}</option>\r\n                        </select>\r\n                        <div [hidden]=\"offices.valid || offices.pristine\" class=\"text-alert\">\r\n                                *sucursal es requerido\r\n                        </div>\r\n                </div>\r\n\r\n                  <div class=\"form-group col-sm-8\" style=\"text-align:center \">\r\n                     <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addEvent.form.valid\">Guardar</button>\r\n                     <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelar()\">Cancelar</button>\r\n                  </div>\r\n               </form>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>"

/***/ }),

/***/ "./src/app/events/addEvent/addEvent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modelo_event__ = __webpack_require__("./src/app/modelo/event.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddEventComponent = /** @class */ (function () {
    function AddEventComponent(_peticionesService, route, router) {
        this._peticionesService = _peticionesService;
        this.route = route;
        this.router = router;
        this.submitted = false;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__modelo_event__["a" /* Event */]("", "", null, null, "", "", null, true);
    }
    AddEventComponent.prototype.ngOnInit = function () {
        this.queryPrograms();
    };
    AddEventComponent.prototype.queryPrograms = function () {
        var _this = this;
        this._peticionesService.getPrograms().subscribe(function (response) {
            _this.programs = response;
            _this._peticionesService.getSucursales().subscribe(function (response) {
                _this.sucursales = response;
                // console.log(this.sucursales)
            });
            //console.log(this.programs);
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    AddEventComponent.prototype.cancelar = function () {
        this.router.navigate(['home/events']);
    };
    AddEventComponent.prototype.onSubmit = function () {
        // console.log(this.model);
    };
    AddEventComponent.prototype.save = function () {
        var _this = this;
        var fechaActual = new Date;
        if (this.model.date_start < fechaActual) {
            alert("Asegurese que la fecha sea mayor a la de hoy");
        }
        else {
            // console.log(this.model);
            this._peticionesService.addEvent(this.model).subscribe(function (response) {
                _this.router.navigate(['/home/events']);
                alert("El evento se creo con exito");
            });
        }
    };
    AddEventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-addEvent',
            template: __webpack_require__("./src/app/events/addEvent/addEvent.component.html"),
            styles: [__webpack_require__("./src/app/events/addEvent/addEvent.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AddEventComponent);
    return AddEventComponent;
}());



/***/ }),

/***/ "./src/app/events/addProgram/addProgram.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/events/addProgram/addProgram.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"modalAddProgram\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n   <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n         <div class=\"modal-header text-center\">\r\n            <h4 class=\"modal-title w-100 font-weight-bold\">Registro de Programas</h4>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" #close>\r\n               <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n         </div>\r\n\r\n         <div class=\"modal-body mx-3\">\r\n\r\n            <!-- <form (ngSubmit)=\"onSubmit(contactForm);\" #contactForm=\"ngForm\" > -->\r\n\r\n            <div class=\"md-form mb-5\">\r\n               <label data-error=\"wrong\" data-success=\"right\" for=\"form34\">\r\n                <i class=\"fa fa-pencil prefix grey-text\"></i> Nombre</label>\r\n               <input type=\"text\" pattern=\"[a-zA-Z]{3,20}[ ]{0,1}[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\" class=\"form-control validate\" #nameInput>\r\n            </div>\r\n            <br>\r\n            <div class=\"md-form\">\r\n               <label data-error=\"wrong\" data-success=\"right\" for=\"form8\">\r\n            <i class=\"fa fa-book prefix grey-text\"></i> Modulos</label>\r\n               <input type=\"text\" class=\"form-control validate\" #moduleInput>\r\n               <textarea type=\"text\" class=\"md-textarea form-control\" rows=\"4\" #modulesArea ></textarea>\r\n            </div>\r\n            <br>\r\n            <div class=\"md-form\">\r\n               <label data-error=\"wrong\" data-success=\"right\" for=\"form8\">\r\n                <i class=\"fa fa-comment prefix grey-text\"></i> Descripcion</label>\r\n               <textarea type=\"text\" pattern=\"[a-zA-Z ]{3,150}\" class=\"md-textarea form-control\" rows=\"4\" #detailsArea></textarea>\r\n            </div>\r\n         </div>\r\n         <div class=\"modal-footer d-flex justify-content-center\">\r\n            <button class=\"btn btn-unique\" (click)=\"save()\">Guardar\r\n               <i class=\"fa fa-paper-plane-o ml-1\"></i>\r\n            </button>\r\n         </div>\r\n         <!-- </form> -->\r\n      </div>\r\n   </div>\r\n</div>\r\n<div class=\"text-center\">\r\n   <a href=\"\" class=\"btn btn-primary btn-rounded mb-4\" data-toggle=\"modal\" data-target=\"#modalAddProgram\">Registrar Programas</a>\r\n</div>"

/***/ }),

/***/ "./src/app/events/addProgram/addProgram.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProgramComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modelo_programa__ = __webpack_require__("./src/app/modelo/programa.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddProgramComponent = /** @class */ (function () {
    function AddProgramComponent(_peticionesService) {
        this._peticionesService = _peticionesService;
    }
    AddProgramComponent.prototype.ngOnInit = function () {
        this.modules = '';
    };
    AddProgramComponent.prototype.save = function () {
        var _this = this;
        var name = this.nameInputRef.nativeElement.value;
        var modules = this.modulesAreaRef.nativeElement.value.split('\n');
        modules.splice(-1, 1);
        var details = this.detailsAreaRef.nativeElement.value;
        var newProgram = new __WEBPACK_IMPORTED_MODULE_1__modelo_programa__["a" /* Programa */](name, details);
        this._peticionesService.addProgram(newProgram).subscribe(function (response) {
            // console.log(response);
            _this.close.nativeElement.click();
        }, function (error) {
            var errosMessage = error;
            alert('El nombre del Programa ya existe debe crear otro programa ');
        });
    };
    AddProgramComponent.prototype.add = function () {
        var module = this.moduleInputRef.nativeElement.value;
        this.modules = this.modules + module + '\n';
        this.modulesAreaRef.nativeElement.value = this.modules;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('nameInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AddProgramComponent.prototype, "nameInputRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('moduleInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AddProgramComponent.prototype, "moduleInputRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('modulesArea'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AddProgramComponent.prototype, "modulesAreaRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('detailsArea'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AddProgramComponent.prototype, "detailsAreaRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("close", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AddProgramComponent.prototype, "close", void 0);
    AddProgramComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-addProgram',
            template: __webpack_require__("./src/app/events/addProgram/addProgram.component.html"),
            styles: [__webpack_require__("./src/app/events/addProgram/addProgram.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]])
    ], AddProgramComponent);
    return AddProgramComponent;
}());



/***/ }),

/***/ "./src/app/events/alert/alert.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/events/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" style=\"border: rosybrown\" id=\"modalAlert\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n     <div class=\"modal-content\">\r\n          <div class=\"modal-header text-center\">\r\n            <h4 class=\"modal-title w-100 font-weight-bold\">Alert</h4>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" #close>\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body mx-3 \" *ngIf='listaPrograms.length > 0'>\r\n            <li *ngFor=\"let programa of listaPrograms\"><strong> * {{programa.name}}</strong></li>\r\n            <div style=\"background: plum\"><h5>Estos son los programas que tiene para añadir al nuevo Evento, si usted quiere crear o registrar un nuevo programa elija la opcion \r\n                <strong >CREAR PROGRAMA</strong> y si no \r\n                <strong >CREAR EVENTO</strong></h5>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer d-flex justify-content-center\" >\r\n               <button type=\"button\" class=\"btn btn-success\" (click)=\"continuar()\">CREAR EVENTO</button>\r\n                <button type=\"submit\" class=\"btn btn-warning\"(click)=\"craerProgram()\">CREAR PROGRAMA</button>\r\n          </div>\r\n     </div>\r\n  </div>\r\n</div>\r\n<div class=\"text-center\">\r\n  <li><a class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalAlert\"><i class=\"fa fa-book\"></i> Registrar Evento</a></li>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/events/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = /** @class */ (function () {
    function AlertComponent(_peticionesService, route, router) {
        this._peticionesService = _peticionesService;
        this.route = route;
        this.router = router;
        this.listaPrograms = [];
        this.programs = null;
    }
    AlertComponent.prototype.ngOnInit = function () {
        this.queryPrograms();
    };
    AlertComponent.prototype.queryPrograms = function () {
        var _this = this;
        this._peticionesService.getPrograms().subscribe(function (response) {
            _this.programs = response;
            _this.listaPrograms = _this.programs;
            //console.log(this.programs);
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    AlertComponent.prototype.craerProgram = function () {
        this.router.navigate(['/home/program/add']);
        this.close.nativeElement.click();
    };
    AlertComponent.prototype.continuar = function () {
        this.router.navigate(['/home/events/add']);
        this.close.nativeElement.click();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("close", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AlertComponent.prototype, "close", void 0);
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-alert',
            template: __webpack_require__("./src/app/events/alert/alert.component.html"),
            styles: [__webpack_require__("./src/app/events/alert/alert.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/events/events.component.css":
/***/ (function(module, exports) {

module.exports = ".h{\r\n    padding-top: 50px ;\r\n}\r\n.cabecera{\r\n    background-color: #367fa9; \r\n    color: #fff; \r\n    border-color: #2e6da4;\r\n    border-top-color: rgb(32, 77, 116);\r\n    border-right-color: rgb(32, 77, 116);\r\n    border-bottom-color: rgb(32, 77, 116);\r\n    border-left-color: rgb(32, 77, 116);\r\n}"

/***/ }),

/***/ "./src/app/events/events.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n      <div class=\"content\">\r\n\r\n            <div class=\"box box-primary\"> \r\n                        <section class=\"content-header\">\r\n                                    <h1>\r\n                                       Eventos\r\n                                       <small>Vigentes</small>\r\n                                    </h1>\r\n                                 </section>\r\n                                 <section class=\"content\">\r\n                                          <ol class=\"breadcrumb\">\r\n                                                      <!-- <li *ngIf='role?.name == \"Admin\"'><app-add-ejecutivo></app-add-ejecutivo></li> -->\r\n                                                      <!-- <li *ngIf='role?.name == \"Admin\"'><app-addProgram></app-addProgram></li> -->\r\n                                                      <!-- <li><app-alert></app-alert></li> -->\r\n                                                      <li><a class=\"btn btn-primary\" [routerLink]=\"['/home/events/add']\"><i class=\"fa fa-book\"></i>Registrar Eventos</a></li>\r\n                                                      <li><a class=\"btn btn-primary a\" [routerLink]=\"['/home/persons/add']\"><i class=\"fa fa-book\"></i>Registrar Personas</a></li>\r\n                                                      <li><a class=\"btn btn-primary\" [routerLink]=\"['/home/listas']\"><i class=\"fa fa-book\"></i>Registrar Universidad</a></li>                        \r\n                                                      <li><a class=\"btn btn-primary\" [routerLink]=\"['/home/addCarrera']\"><i class=\"fa fa-book\"></i>Registrar Carrera</a></li>                        \r\n                                                </ol>\r\n                                    <table class=\"table table-hover\">\r\n                                       <thead>\r\n                                          <tr class=\"text-info cabecera hover\">\r\n                              \r\n                                             <th><h4 class=\"text-center font-family-serif\">Nombre</h4></th>\r\n                                             <th><h4 class=\"text-center\">Fecha de Inicio</h4></th>\r\n                                             <th><h4 class=\"text-center\">Cupos</h4></th>\r\n                                             <th><h4 class=\"text-center\">Programa</h4></th>\r\n                                             <th><h4 class=\"text-center\">Estado</h4></th>\r\n                                             <th> <h4 class=\"text-center\">Activo</h4></th>\r\n                                             \r\n                                          </tr>\r\n                                       </thead>\r\n                              \r\n                                       <tbody>\r\n                              \r\n                                          <tr *ngFor=\"let event of lista_eventos\" class=\"bg-info text-center\">\r\n                                             <td>{{ event.name }}</td>\r\n                                             <td>{{ event.date_start | date }}</td>\r\n                                             <td>{{ event.cupos }}</td>\r\n                                             <td>{{event.programa}}</td>\r\n                                             <td>\r\n                                                <a class=\"btn btn-primary\" (click)=\"personsOfEvents(event._id)\">Personas</a>\r\n                                             </td>\r\n                                             <td > <button class=\"btn btn-danger\" (click)=\"cerrarEvento(event?._id)\" [disabled]=\"!event.active\">Cerrar Evento</button></td>\r\n                                          </tr>\r\n                                       </tbody>\r\n                                    </table>\r\n                        </section>\r\n\r\n\r\n            </div>\r\n      </div>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/events/events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global__ = __webpack_require__("./src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { UserService } from '../services/user.service';


var EventsComponent = /** @class */ (function () {
    function EventsComponent(router, _peticionesService) {
        this.router = router;
        this._peticionesService = _peticionesService;
        this.lista_eventos = [];
    }
    EventsComponent.prototype.ngOnInit = function () {
        this.queryRol();
        //    this.queryEventsOfSucursal();
    };
    EventsComponent.prototype.addPerson = function () {
        this.router.navigate(['home/event/persons/add']);
    };
    EventsComponent.prototype.send = function (_id) {
        this.router.navigate(['home/event', _id]);
    };
    EventsComponent.prototype.personsOfEvents = function (_id) {
        this.router.navigate(['home/events/persons', _id]);
    };
    EventsComponent.prototype.queryEventsOfSucursal = function () {
        var _this = this;
        this._peticionesService.getEventsOfSucursal(__WEBPACK_IMPORTED_MODULE_2__services_global__["b" /* Identity */]._id).subscribe(function (result) {
            _this.events = result;
            //    console.log(this.events)
            _this.events.map(function (event) {
                var sum = 0;
                event.inscriptions.forEach(function (e) {
                    if (e.state == 1)
                        sum++;
                });
                event.cupos = event.total - sum;
            });
            var _loop_1 = function (e) {
                var eventoItem = {};
                eventoItem.name = e.name;
                eventoItem.date_start = e.date_start;
                eventoItem.cupos = e.total;
                eventoItem._id = e._id;
                eventoItem.programaId = e.programs;
                eventoItem.active = e.active;
                _this._peticionesService.getProgram(e.programs).subscribe(function (result) {
                    _this.program = result;
                    eventoItem.programa = _this.program.name;
                    _this.lista_eventos.push(eventoItem);
                });
            };
            for (var _i = 0, _a = _this.events; _i < _a.length; _i++) {
                var e = _a[_i];
                _loop_1(e);
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    EventsComponent.prototype.queryEventsAdmin = function () {
        var _this = this;
        this._peticionesService.getAllEventsActive(__WEBPACK_IMPORTED_MODULE_2__services_global__["b" /* Identity */]._id).subscribe(function (result) {
            _this.events = result;
            //    console.log(this.events)
            _this.events.map(function (event) {
                var sum = 0;
                event.inscriptions.forEach(function (e) {
                    if (e.state == 1)
                        sum++;
                });
                event.cupos = event.total - sum;
            });
            var _loop_2 = function (e) {
                var eventoItem = {};
                eventoItem.name = e.name;
                eventoItem.date_start = e.date_start;
                eventoItem.cupos = e.total;
                eventoItem._id = e._id;
                eventoItem.programaId = e.programs;
                eventoItem.active = e.active;
                _this._peticionesService.getProgram(e.programs).subscribe(function (result) {
                    _this.program = result;
                    eventoItem.programa = _this.program.name;
                    _this.lista_eventos.push(eventoItem);
                });
            };
            for (var _i = 0, _a = _this.events; _i < _a.length; _i++) {
                var e = _a[_i];
                _loop_2(e);
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    EventsComponent.prototype.queryRol = function () {
        var _this = this;
        //console.log(Identity.rol)
        this._peticionesService.getRole(__WEBPACK_IMPORTED_MODULE_2__services_global__["b" /* Identity */].rol).subscribe(function (result) {
            _this.role = result;
            if (_this.role.name == 'Admin') {
                _this.queryEventsAdmin();
            }
            else {
                _this.queryEventsOfSucursal();
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    EventsComponent.prototype.cerrarEvento = function (eventId) {
        var _this = this;
        this._peticionesService.cerrarEvento(eventId).subscribe(function (response) {
            var eventocerrado = response;
            // this.router.navigate(['home/events']);
            //   window.history.back();
            _this.events = null;
            _this.lista_eventos = [];
            _this.queryRol();
        });
    };
    EventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-events',
            template: __webpack_require__("./src/app/events/events.component.html"),
            styles: [__webpack_require__("./src/app/events/events.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */]])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/events/persons-of-events/persons-of-events.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/events/persons-of-events/persons-of-events.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n\r\n  <div class=\"content\">\r\n\r\n    <div class=\"box box-primary\">\r\n        <section class=\"content\">\r\n            <div>\r\n              <ol class=\"breadcrumb\">\r\n                <!-- <li><a class=\"btn btn-primary\" [routerLink]=\"['/home/persons/add']\"><i class=\"fa fa-book\"></i>Registrar Persona</a></li>\r\n                      <li><app-control-asistance></app-control-asistance></li> -->\r\n              </ol>\r\n            </div>\r\n        \r\n            <table class=\"table\">\r\n              <th>Filtros Personas</th>\r\n            </table>\r\n            <div *ngIf='rol?.name==\"Admin\"'>\r\n        \r\n              <button class=\"btn btn-primary margin-left\" (click)=\"loadPersonsInteres2(0)\">Interesados</button>\r\n              <button class=\"btn btn-primary margin-left\" (click)=\"loadPersonsInteres2(2)\">Confirmados</button>\r\n              <button class=\"btn btn-primary margin-left\" (click)=\"loadPersonsInteres2(3)\">Inscrito</button>\r\n              <button class=\"btn btn-primary margin-left\" (click)=\"loadPersonsInteres2(4)\">On Line</button>\r\n              <button class=\"btn btn-primary margin-left\" (click)=\"loadPersonsInteres2(5)\">Proximo Evento</button>\r\n              <button class=\"btn btn-primary margin-left\" (click)=\"loadPersonsInteres2(6)\">Sin Interes</button>\r\n              <button class=\"btn btn-primary margin-left\" (click)=\"loadPersons2()\">Todos</button>\r\n        \r\n            </div>\r\n            <div *ngIf='rol?.name!=\"Admin\"'>\r\n        \r\n              <button class=\"btn btn-primary margin-left\" (click)=\"loadPersonsInteresByCartera(0)\">Interesados</button>\r\n              <button class=\"btn btn-primary margin-left\" (click)=\"loadPersonsInteresByCartera(2)\">Confirmados</button>\r\n              <button class=\"btn btn-primary margin-left\" (click)=\"loadPersonsInteresByCartera(3)\">Inscrito</button>\r\n              <button class=\"btn btn-primary margin-left\" (click)=\"loadPersonsInteresByCartera(4)\">On Line</button>\r\n              <button class=\"btn btn-primary margin-left\" (click)=\"loadPersonsInteresByCartera(5)\">Proximo Evento</button>\r\n              <button class=\"btn btn-primary margin-left\" (click)=\"loadPersonsInteresByCartera(6)\">Sin Interes</button>\r\n              <button class=\"btn btn-primary margin-left\" (click)=\"loadPersonsInteresByCartera()\">Todos</button>\r\n        \r\n            </div>\r\n            <div>\r\n              <!-- <div class=\"filter-wrap\">\r\n                <div class=\"col-lg-1\">Buscar:</div>\r\n                <input [(ngModel)]=\"searchText\" placeholder=\"Nombre Persona\" class=\"filter-input\">\r\n                <span class=\"filter-clear\" *ngIf=\"searchText.length>0\" (click)=\"clearFilter()\">X</span>\r\n              </div> -->\r\n        \r\n        \r\n            </div>\r\n            <table class=\"table table-hover\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Nombre Completo</th>\r\n                  <!-- <th>Apellido</th> -->\r\n                  <th>Telefono</th>\r\n                  <th>Interes</th>\r\n                  <!-- <th>Ciudad</th> -->\r\n                  <th>Medio de Contacto</th>\r\n                  <th>Ocupacion</th>\r\n                  <th>Detalles de Ocupacion</th>\r\n                  <th>Seguimiento</th>\r\n                  <th colspan=\"2\">Opciones</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let i of lista_personasPorInteres\">\r\n                  <td>{{ i.first_name }} {{i.last_name}}</td>\r\n                  <!-- <th>{{i.last_name}}</th> -->\r\n                  <td>{{ i.cellphone }}</td>\r\n                  <td>{{i.stateName}}</td>\r\n                  <!-- <td>{{i.city}}</td> -->\r\n        \r\n                  <td *ngIf=\"i.contact_medium==1\">WhatsApp</td>\r\n                  <td *ngIf=\"i.contact_medium==2\">Afiches</td>\r\n                  <td *ngIf=\"i.contact_medium==3\">Facebook</td>\r\n                  <td *ngIf=\"i.contact_medium==4\">Recomendacion</td>\r\n                  <td *ngIf=\"i.contact_medium==5\">Visitas Aulas</td>\r\n                  <td *ngIf=\"i.contact_medium==6\">Visitas Empresa</td>\r\n                  <td *ngIf=\"i.contact_medium==undefined\">Sin Asignar</td>\r\n         \r\n                  <td>{{ i.ocupation }}</td>\r\n                  \r\n                  <td *ngIf=\"i.ocupation=='estudiante'\">\r\n                    Carrera: {{i.descOcupation?.carrera}}<br> \r\n                    Universidad: {{i.descOcupation?.universidad}}<br>\r\n                    Semestre:{{i.descOcupation?.semestre}}\r\n                  </td>          \r\n                  <td *ngIf=\"i.ocupation=='particular'\">\r\n                    Área: {{i.descOcupation?.areaTrabajo}}<br> \r\n                  </td>          \r\n                  <td *ngIf=\"i.ocupation=='profesional'\">\r\n                      Profesión: {{i.descOcupation?.profesion}}<br>             \r\n                      Empresa: {{i.descOcupation?.empresa}}<br>             \r\n                      Cargo: {{i.descOcupation?.cargo}}<br>             \r\n                  </td>\r\n                  \r\n                  <td>{{i.tracingName}}</td>\r\n        \r\n                  <td>\r\n                    <a class=\"btn btn-primary\" (click)=\"edit(i._id)\">EDITAR</a>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <br>\r\n            <div align=\"center\">\r\n              <input type=\"text\" id=\"grupo\" placeholder=\"Grupo\">\r\n              <input type=\"text\" id=\"PrimerNombre\" placeholder=\"Primer Nombre\">\r\n              <input type=\"text\" id=\"SegundoNombre\" placeholder=\"Segundo Nombre\">\r\n              <input type=\"text\" id=\"Apellido\" placeholder=\"Apellidos\">\r\n              <input type=\"text\" id=\"Celular\" placeholder=\"Celular\">\r\n              <button class=\"btn btn-primary\" (click)=\"exportarExcel()\">Exportar Excel</button>\r\n            </div>\r\n        \r\n          </section>\r\n\r\n    </div>\r\n  </div>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/events/persons-of-events/persons-of-events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonsOfEventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_persona_service__ = __webpack_require__("./src/app/services/persona.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global__ = __webpack_require__("./src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { Angular5Csv } from 'angular5-csv/Angular5-csv';
var PersonsOfEventsComponent = /** @class */ (function () {
    function PersonsOfEventsComponent(router, route, _personaService, _peticionesService) {
        this.router = router;
        this.route = route;
        this._personaService = _personaService;
        this._peticionesService = _peticionesService;
        this.lista_personas = [];
        this.lista_personasPorInteres = [];
        this.listaToExport = [];
    }
    PersonsOfEventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.queryRol();
        this.route.params.subscribe(function (params) {
            _this.eventId = params.id;
            // this.loadPersons2();
            _this.loadPersonsByCartera();
        });
    };
    PersonsOfEventsComponent.prototype.loadPersonsByCartera = function () {
        var _this = this;
        this.lista_personasPorInteres = [];
        this._peticionesService.getEvent(this.eventId).subscribe(function (res) {
            _this.event = res;
            var eventIdPersonId = {};
            eventIdPersonId.event = _this.event;
            eventIdPersonId.identity = __WEBPACK_IMPORTED_MODULE_4__services_global__["b" /* Identity */];
            _this._peticionesService.getPersonasInteresWithEventByCartera(eventIdPersonId).subscribe(function (res) {
                _this.listaReturned = res;
                _this.lista_personasPorInteres = _this.listaReturned;
                // console.log(this.lista_personasPorInteres)
            });
        });
    };
    PersonsOfEventsComponent.prototype.loadPersons2 = function () {
        var _this = this;
        this.lista_personasPorInteres = [];
        this._peticionesService.getEvent(this.eventId).subscribe(function (response) {
            _this.event = response;
            _this._peticionesService.getPersonasInteresWithEvent(_this.event).subscribe(function (res) {
                _this.listaReturned = res;
                _this.lista_personasPorInteres = _this.listaReturned;
            });
        });
    };
    PersonsOfEventsComponent.prototype.loadPersonsInteres2 = function (numInteres) {
        var _this = this;
        this.lista_personasPorInteres = [];
        var eventinteres = {};
        eventinteres.event = this.event;
        eventinteres.interes = numInteres;
        this._peticionesService.getPersonFilterInteresWithEvent(eventinteres).subscribe(function (response) {
            _this.listaReturned = response;
            _this.lista_personasPorInteres = _this.listaReturned;
        });
    };
    PersonsOfEventsComponent.prototype.loadPersonsInteresByCartera = function (numInteres) {
        var _this = this;
        this.lista_personasPorInteres = [];
        var eventinteres = {};
        eventinteres.event = this.event;
        eventinteres.interes = numInteres;
        eventinteres.identity = __WEBPACK_IMPORTED_MODULE_4__services_global__["b" /* Identity */];
        this._peticionesService.getPersonFilterInteresWithEventByCartera(eventinteres).subscribe(function (response) {
            _this.listaReturned = response;
            _this.lista_personasPorInteres = _this.listaReturned;
        });
    };
    PersonsOfEventsComponent.prototype.edit = function (_id) {
        var personIdEventId = _id + '-' + this.eventId;
        this.router.navigate(['home/events/persons/edit', personIdEventId]);
    };
    PersonsOfEventsComponent.prototype.queryRol = function () {
        var _this = this;
        this._peticionesService.getCurrentRol(__WEBPACK_IMPORTED_MODULE_4__services_global__["b" /* Identity */]).subscribe(function (res) {
            _this.rol = res;
        });
    };
    PersonsOfEventsComponent.prototype.exportarExcel = function () {
        nPersons(0, this.lista_personasPorInteres, this.listaToExport, this.event.name);
        var options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: false,
            showTitle: false,
            useBom: true,
            headers: [
                document.getElementById('grupo').value,
                document.getElementById('PrimerNombre').value,
                document.getElementById('SegundoNombre').value,
                document.getElementById('Apellido').value,
                document.getElementById('Celular').value,
            ]
        };
        // console.log(this.listaToExport);
        //this.toExport = new Angular5Csv(this.listaToExport, "Nuevo Reporte", options);
    };
    PersonsOfEventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-persons-of-events',
            template: __webpack_require__("./src/app/events/persons-of-events/persons-of-events.component.html"),
            styles: [__webpack_require__("./src/app/events/persons-of-events/persons-of-events.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_persona_service__["a" /* PersonaService */], __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__services_persona_service__["a" /* PersonaService */],
            __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]])
    ], PersonsOfEventsComponent);
    return PersonsOfEventsComponent;
}());

function nPersons(i, lista_personasPorInteres, listaToExport, name) {
    // console.log(i, lista_personasPorInteres.length);
    if (i == lista_personasPorInteres.length)
        return;
    var personToExport = {};
    // for (let p of lista_personasPorInteres) {
    personToExport.grupo = name;
    personToExport.first_name = lista_personasPorInteres[i].first_name;
    personToExport.middle_name = '';
    personToExport.last_name = lista_personasPorInteres[i].last_name;
    personToExport.cellphone = lista_personasPorInteres[i].cellphone;
    listaToExport.push(personToExport);
    // }
    return nPersons(i + 1, lista_personasPorInteres, listaToExport, name);
}


/***/ }),

/***/ "./src/app/facilitador/add-facilitador/add-facilitador.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n  \r\n  .text-alert{\r\n    color:#dd4b39;\r\n  }"

/***/ }),

/***/ "./src/app/facilitador/add-facilitador/add-facilitador.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n    <br>\r\n    <div class=\"\">\r\n  \r\n  \r\n   \r\n    <div class=\"box box-primary\">\r\n  \r\n  <div class=\"container\">\r\n      <div [hidden]=\"submitted\">\r\n        <h1>Registrar Facilitador</h1>\r\n        <form (ngSubmit)=\"onSubmit()\" #addEjecutivo=\"ngForm\" >\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Nombres</label>\r\n            <input type=\"text\" pattern=\"[a-zA-Z]{3,10}[ ]{0,1}[a-zA-Z]{0,10}\" class=\"form-control\" id=\"name\"\r\n                   required\r\n                   [(ngModel)]=\"facilitadorName\" name=\"name\"\r\n                   #name=\"ngModel\"\r\n                   >\r\n            <div [hidden]=\"name?.valid || name?.pristine\"\r\n                 class=\"\">\r\n                 Nombre es invalido\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"form-group\">\r\n              <label for=\"correo\">Trabajo</label>\r\n              <input type=\"correo\" pattern=\"[a-zA-Z ]{3,50}\" class=\"form-control\" id=\"correo\"\r\n                     required\r\n                     [(ngModel)]=\"facilitadorjob\" name=\"correo\"\r\n                     #correo=\"ngModel\">\r\n              <div [hidden]=\"correo?.valid || correo?.pristine\" class=\"\">\r\n              trabajo es invalido\r\n              </div>\r\n            </div>\r\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addEjecutivo.form.valid\">Registrar</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\r\n        </form>\r\n      </div>\r\n     \r\n              \r\n    </div>\r\n  \r\n    </div>\r\n  \r\n  </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/facilitador/add-facilitador/add-facilitador.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFacilitadorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modelo_facilitador__ = __webpack_require__("./src/app/modelo/facilitador.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddFacilitadorComponent = /** @class */ (function () {
    function AddFacilitadorComponent(_peticionesService, route, router) {
        this._peticionesService = _peticionesService;
        this.route = route;
        this.router = router;
        this.submitted = false;
        this.powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
        this.model = [, '', '', , "", '', ''];
    }
    AddFacilitadorComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.facilitador = new __WEBPACK_IMPORTED_MODULE_3__modelo_facilitador__["a" /* facilitador */](this.facilitadorName, this.facilitadorjob);
        this._peticionesService.addFacilitador(this.facilitador).subscribe(function (response) {
            _this.facilitadorNuevo = response;
            // console.log(this.facilitadorNuevo);
            _this.router.navigate(['/home/facilitador']);
            alert('se creo facilitador');
            // this.MessageEvent.emit();
        }, function (error) {
            console.log(error);
            alert('error al crear facilitador, verifique los datos');
        });
    };
    AddFacilitadorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._peticionesService.getSucursales().subscribe(function (response) {
            _this.sucursales = response;
            // console.log(this.sucursales)
        });
    };
    AddFacilitadorComponent.prototype.cancel = function () {
        this.router.navigate(['/home/facilitador']);
    };
    AddFacilitadorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-facilitador',
            template: __webpack_require__("./src/app/facilitador/add-facilitador/add-facilitador.component.html"),
            styles: [__webpack_require__("./src/app/facilitador/add-facilitador/add-facilitador.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AddFacilitadorComponent);
    return AddFacilitadorComponent;
}());



/***/ }),

/***/ "./src/app/facilitador/edit-facilitador/edit-facilitador.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/facilitador/edit-facilitador/edit-facilitador.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n    <section class=\"content\">\r\n       <!-- test -->\r\n       <div style=\"text-align:center; margin:auto; width:40%;\">\r\n          EDITAR FACILITADOR\r\n             <div><label><h1>{{ facilitador?.name }}</h1></label></div>\r\n          \r\n         <div class=\"jumbotron\">\r\n         <div> \r\n             <input type=\"text\" name=\"t\" [(ngModel)]=\"facilitadorName\" class=\"form-control\" required />\r\n             <label>Descripcion</label>\r\n          \r\n         </div>\r\n          <div>\r\n             <input type=\"submit\" value=\"GUARDAR\" class=\"btn btn-success\" (click)=\"saveInscription()\"/>\r\n             <input type=\"submit\" value=\"CANCELAR\" class=\"btn btn-success\" (click)=\"cancelar(eventId)\"/>\r\n          </div>\r\n         </div>\r\n     </div>\r\n   </section>\r\n     \r\n </div>"

/***/ }),

/***/ "./src/app/facilitador/edit-facilitador/edit-facilitador.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFacilitadorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditFacilitadorComponent = /** @class */ (function () {
    function EditFacilitadorComponent(_peticionesService, route, router) {
        this._peticionesService = _peticionesService;
        this.route = route;
        this.router = router;
    }
    EditFacilitadorComponent.prototype.ngOnInit = function () {
        this.queryFacilitador();
    };
    EditFacilitadorComponent.prototype.onSubmit = function () {
    };
    EditFacilitadorComponent.prototype.simbolos = function (nameV) {
        // console.log("ingreso simbolos");
        var res = false;
        for (var i = 0; i < nameV.length; i++) {
            if (nameV[i] == '!' || nameV[i] == '@' || nameV[i] == '#' || nameV[i] == '$' || nameV[i] == '%' || nameV[i] == '^') {
                res = true;
            }
        }
        return res;
    };
    EditFacilitadorComponent.prototype.editfacilitador = function () {
        var _this = this;
        // console.log(this.facilitador);
        this.facilitador.name = this.facilitadorName;
        if (this.facilitadorName == '') {
            window.alert("Asegurese que todos los campos esten llenos");
        }
        else {
            if (this.simbolos(this.facilitadorName)) {
                // console.log("hay simbolos");
                window.alert("asegurese de no introducir simbolos");
            }
            else {
                this._peticionesService.updateFacilitador(this.facilitador).subscribe(function (result) {
                    var res = result;
                    // console.log(res);
                    _this.router.navigate(['home/facilitador']);
                }, function (error) {
                    var errorMessage = error;
                    console.log(errorMessage);
                });
            }
        }
    };
    EditFacilitadorComponent.prototype.queryFacilitador = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.facilitadorId = params.id;
            // console.log(this.facilitadorId);
        });
        this._peticionesService.getFacilitador(this.facilitadorId).subscribe(function (result) {
            _this.facilitador = result;
            // console.log(this.facilitador);
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    EditFacilitadorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-facilitador',
            template: __webpack_require__("./src/app/facilitador/edit-facilitador/edit-facilitador.component.html"),
            styles: [__webpack_require__("./src/app/facilitador/edit-facilitador/edit-facilitador.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], EditFacilitadorComponent);
    return EditFacilitadorComponent;
}());



/***/ }),

/***/ "./src/app/facilitador/facilitador.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/facilitador/facilitador.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\"> <!-- Content Header (Page header) -->\r\n    <section class=\"content-header\">\r\n       <h1>\r\n          Facilitadores\r\n          <small>Vigentes</small>\r\n       </h1>\r\n       \r\n    </section>\r\n    <section class=\"content\">\r\n        <a class=\"btn btn-primary a\" (click)=\"addfacilitador()\">Registrar Facilitador</a>\r\n       <table class=\"table table-hover\">\r\n          <thead>\r\n             <tr>\r\n                <th>Nombre de Facilitador</th>\r\n                <th>Trabajo</th>\r\n                <!-- <th>Editar Facilitador</th> -->\r\n                <!-- <th colspan=\"2\">estado</th> -->\r\n             </tr>\r\n          </thead>\r\n  \r\n          <tbody>\r\n  \r\n             <tr *ngFor=\"let facilitador of facilitadores\">\r\n                <td>{{ facilitador.name }}</td>\r\n                <!-- <td>{{ eventcd fedate_start | date }}</td> -->\r\n                <td>{{ facilitador.job }}</td>\r\n                <!-- <td>{{ event.date_start | date }}</td> -->\r\n                <!-- <td>\r\n                   <!-- <button class=\"btn btn-warning\" (click)=\"editfacilitador(facilitador._id)\">EDITAR</button> -->\r\n                  <!-- <a class=\"btn btn-primary\" (click)=\"editFacilitador(facilitador._id)\">Editar</a>\r\n                </td> -->\r\n             </tr>\r\n          </tbody>\r\n       </table>\r\n    </section>\r\n  </div>"

/***/ }),

/***/ "./src/app/facilitador/facilitador.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return facilitadorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { facilitador } from '../modelo/facilitador';
var facilitadorComponent = /** @class */ (function () {
    function facilitadorComponent(route, router, _peticionesService) {
        this.route = route;
        this.router = router;
        this._peticionesService = _peticionesService;
    }
    facilitadorComponent.prototype.ngOnInit = function () {
        this.queryFacilitators();
    };
    facilitadorComponent.prototype.editFacilitador = function (id) {
        //console.log("facilitadorComponent");
        this.router.navigate(['/home/facilitador/edit/', id]);
    };
    facilitadorComponent.prototype.addfacilitador = function () {
        this.router.navigate(['/home/facilitador/add']);
    };
    facilitadorComponent.prototype.infofacilitador = function (_id) {
        // console.log(_id);
        this.router.navigate(['/home/facilitador/info', _id]);
    };
    // deletefacilitador(_id:string){
    //   this._peticionesService.deleteUser().subscribe(
    //     result => {
    //        console.log(result); 
    //     },
    //   error => {
    //     console.log(<any>error)
    //   });
    // }
    facilitadorComponent.prototype.queryFacilitators = function () {
        var _this = this;
        this._peticionesService.getFacilitadores().subscribe(function (result) {
            _this.facilitadores = result;
            //  console.log(this.facilitadores); 
        }, function (error) {
            console.log(error);
        });
    };
    facilitadorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-facilitador',
            template: __webpack_require__("./src/app/facilitador/facilitador.component.html"),
            styles: [__webpack_require__("./src/app/facilitador/facilitador.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]])
    ], facilitadorComponent);
    return facilitadorComponent;
}());



/***/ }),

/***/ "./src/app/graphicReports/report-event/bar-event/bar-event.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/graphicReports/report-event/bar-event/bar-event.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div>\r\n  <div style=\"display: block\">\r\n    <canvas baseChart\r\n            [datasets]=\"barChartData\"\r\n            [labels]=\"barChartLabels\"\r\n            [options]=\"barChartOptions\"\r\n            [legend]=\"barChartLegend\"\r\n            [chartType]=\"barChartType\"\r\n            (chartHover)=\"chartHovered($event)\"\r\n            (chartClick)=\"chartClicked($event)\"></canvas>\r\n  </div>\r\n</div> -->"

/***/ }),

/***/ "./src/app/graphicReports/report-event/bar-event/bar-event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarEventComponent = /** @class */ (function () {
    function BarEventComponent(route, _peticionesService) {
        this.route = route;
        this._peticionesService = _peticionesService;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['Ejecutivo 1', 'Ejecutivo 2', 'Ejecutivo 3', 'Ejecutivo 4'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [{ events: [1, 5] }], label: 'Evento 1' }
        ];
    }
    // events
    BarEventComponent.prototype.chartClicked = function (e) {
        //   console.log(e);
    };
    BarEventComponent.prototype.chartHovered = function (e) {
        //   console.log(e);
    };
    // console.log('randomizando')
    BarEventComponent.prototype.setGraphic = function (data) {
        this.barChartData[0].data = data;
    };
    BarEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.eventId = params.id.split('-')[0];
            _this.barChartData[0].label = params.id.split('-')[1];
        });
        this._peticionesService.getMejorEjecutivo(this.eventId).subscribe(function (result) {
            _this.data = result;
            _this.barChartLabels = _this.data.map(function (u) { return u.name; });
            _this.setGraphic(_this.data.map(function (u) { return u.total; }));
        }, function (error) {
            console.log(error);
        });
    };
    BarEventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bar-event',
            template: __webpack_require__("./src/app/graphicReports/report-event/bar-event/bar-event.component.html"),
            styles: [__webpack_require__("./src/app/graphicReports/report-event/bar-event/bar-event.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]])
    ], BarEventComponent);
    return BarEventComponent;
}());



/***/ }),

/***/ "./src/app/graphicReports/report-event/report-event.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/graphicReports/report-event/report-event.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n     <h1>\r\n        Reportes\r\n        <small>Grafico de Barras</small>\r\n     </h1>\r\n     <ol class=\"breadcrumb\">\r\n        <li>\r\n           Reportes por Evento\r\n        </li>\r\n        <li>\r\n           <a href=\"#\">\r\n              <i class=\"fa fa-dashboard\"></i>Home</a>\r\n        </li>\r\n        <li class=\"active\">Reportes</li>\r\n     </ol>\r\n  </section>\r\n  <section class=\"content\">\r\n      <div>\r\n          <table class=\"table table-hover\">\r\n              <thead>\r\n                  <tr>\r\n                      <th>Ejecutivo</th>\r\n                      <th>Evento</th>\r\n                      <th>Incritos</th>\r\n                  </tr>\r\n               </thead>\r\n              <tbody>\r\n                 <tr *ngFor=\"let i of user\">\r\n                    <td>{{ i.name }}</td>\r\n                    <td>{{ i.inscriptions }}</td>\r\n                    <td>{{ i.inscriptions.length}}</td>\r\n                 </tr>\r\n              </tbody>\r\n           </table>\r\n      </div>\r\n\r\n    <!-- <app-bar-event></app-bar-event> -->\r\n  </section>\r\n</div>"

/***/ }),

/***/ "./src/app/graphicReports/report-event/report-event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportEventComponent = /** @class */ (function () {
    function ReportEventComponent(_peticionesService) {
        this._peticionesService = _peticionesService;
    }
    ReportEventComponent.prototype.ngOnInit = function () {
        //   this._peticionesService.getMejorEjecutivo(this.userId).subscribe(
        //      result => {
        //         this.user = result;
        //         console.log(this.user);
        //         //this.inscriptions = this.user.inscriptions;
        //         //console.log(this.inscriptions);
        //      },
        //      error => {
        //         console.log(<any>error);
        //      }
        //   );
    };
    ReportEventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-report-event',
            template: __webpack_require__("./src/app/graphicReports/report-event/report-event.component.html"),
            styles: [__webpack_require__("./src/app/graphicReports/report-event/report-event.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */]])
    ], ReportEventComponent);
    return ReportEventComponent;
}());



/***/ }),

/***/ "./src/app/graphicReports/report-trimestral/bar/bar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/graphicReports/report-trimestral/bar/bar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div>\r\n  <div style=\"display: block\">\r\n    <canvas baseChart\r\n            [datasets]=\"barChartData\"\r\n            [labels]=\"barChartLabels\"\r\n            [options]=\"barChartOptions\"\r\n            [legend]=\"barChartLegend\"\r\n            [chartType]=\"barChartType\"\r\n            (chartHover)=\"chartHovered($event)\"\r\n            (chartClick)=\"chartClicked($event)\"></canvas>\r\n  </div>\r\n</div> -->"

/***/ }),

/***/ "./src/app/graphicReports/report-trimestral/bar/bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarComponent = /** @class */ (function () {
    // public barChartData = [];
    function BarComponent(_peticionesService) {
        this._peticionesService = _peticionesService;
        this.d = new Date();
        // public d = new Date(2018,2,3);
        this.month = [];
        // public setGraphic(data): void {
        //    this.barChartData[0].data = data;
        // }
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = [this.d.getMonth() - 3, this.d.getMonth() - 2, this.d.getMonth() - 1];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [{ events: name }, '', '',], label: 'Evento 1' },
            { data: [{ events: name }, '', '',], label: 'Evento 2' },
            { data: [{ events: name }, '', '',], label: 'Evento 3' },
        ];
    }
    BarComponent.prototype.months = function () {
        this.month[0] = "January";
        this.month[1] = "February";
        this.month[2] = "March";
        this.month[3] = "April";
        this.month[4] = "May";
        this.month[5] = "June";
        this.month[6] = "July";
        this.month[7] = "August";
        this.month[8] = "September";
        this.month[9] = "October";
        this.month[10] = "November";
        this.month[11] = "December";
    };
    // events
    BarComponent.prototype.chartClicked = function (e) {
        //   console.log(e);
    };
    BarComponent.prototype.chartHovered = function (e) {
        //   console.log(e);
    };
    BarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._peticionesService.getTrimestral().subscribe(function (result) {
            _this.events = result;
            // console.log("sssssssssssss"+this.events)
            // this.events.map(event => {
            //    event.inscriptions = event.inscriptions.filter(e => e.state == 1);;
            // });
            // this.barChartData = [];
            // this.events.forEach(e => {
            //    this.barChartData.push({ data: [], label: e.programName }); //= params.id.split('-')[1];
            // });
            // this.barChartLabels = this.events.map(u => u.name);
            // this.setGraphic(this.events.map(u => u.total));
        }, function (error) {
            console.log(error);
        });
    };
    BarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bar',
            template: __webpack_require__("./src/app/graphicReports/report-trimestral/bar/bar.component.html"),
            styles: [__webpack_require__("./src/app/graphicReports/report-trimestral/bar/bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */]])
    ], BarComponent);
    return BarComponent;
}());



/***/ }),

/***/ "./src/app/graphicReports/report-trimestral/report-trimestral.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/graphicReports/report-trimestral/report-trimestral.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n     <h1>\r\n        Reportes\r\n        <small>Reportes trimestrales</small>\r\n     </h1>\r\n     <!--<ol class=\"breadcrumb\">\r\n        <li>\r\n           Reportes trimestrales\r\n        </li>\r\n        <li>\r\n           <a href=\"#\">\r\n              <i class=\"fa fa-dashboard\"></i>Home</a>\r\n        </li>\r\n        <li class=\"active\">Reportes</li>\r\n     </ol>-->\r\n  </section>\r\n  <section class=\"content\">\r\n    <!-- <div>\r\n        <table class=\"table table-hover\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Nombre</th>\r\n                    <th>Estado</th>\r\n                    <th>Incritos</th>\r\n                </tr>\r\n             </thead>\r\n            <tbody>\r\n               <tr *ngFor=\"let i of events\">\r\n                  <td>{{ i.name }}</td>\r\n                  <td>{{ i.state }}</td>\r\n                  <td>{{ i.inscriptions.length}}</td>\r\n                \r\n               </tr>\r\n            </tbody>\r\n         </table>\r\n    </div> -->\r\n\r\n    <!-- <app-bar></app-bar> -->\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/graphicReports/report-trimestral/report-trimestral.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportTrimestralComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportTrimestralComponent = /** @class */ (function () {
    function ReportTrimestralComponent(_route, _router, _peticionesService) {
        this._route = _route;
        this._router = _router;
        this._peticionesService = _peticionesService;
    }
    ReportTrimestralComponent.prototype.ngOnInit = function () {
        // console.log('report-trimestral.component.ts cargado')
    };
    ReportTrimestralComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-report-trimestral',
            template: __webpack_require__("./src/app/graphicReports/report-trimestral/report-trimestral.component.html"),
            styles: [__webpack_require__("./src/app/graphicReports/report-trimestral/report-trimestral.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]])
    ], ReportTrimestralComponent);
    return ReportTrimestralComponent;
}());



/***/ }),

/***/ "./src/app/graphicReports/reports/barra/barra.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/graphicReports/reports/barra/barra.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div>\r\n    <div style=\"display: block\">\r\n      <canvas baseChart\r\n              [datasets]=\"barChartData\"\r\n              [labels]=\"barChartLabels\"\r\n              [options]=\"barChartOptions\"\r\n              [legend]=\"barChartLegend\"\r\n              [chartType]=\"barChartType\"\r\n              (chartHover)=\"chartHovered($event)\"\r\n              (chartClick)=\"chartClicked($event)\"></canvas>\r\n    </div>\r\n    <button class=\"btn btn-primary\" (click)=\"randomize()\">Actualizar</button>\r\n  </div> -->"

/***/ }),

/***/ "./src/app/graphicReports/reports/barra/barra.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarraComponent = /** @class */ (function () {
    function BarraComponent(_peticionesService) {
        this._peticionesService = _peticionesService;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['Enero', 'Febrero', 'Marzo', 'Abril'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [{ events: this.inscriptions }, '', '', ''], label: 'Evento' },
            { data: [{ events: name }, '', '', ''], label: 'Evento 2' }
        ];
    }
    // events
    BarraComponent.prototype.chartClicked = function (e) {
        // console.log(e);
    };
    BarraComponent.prototype.chartHovered = function (e) {
        // console.log(e);
    };
    BarraComponent.prototype.randomize = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40
        ];
        var clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
    };
    BarraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._peticionesService.getEvents().subscribe(function (result) {
            _this.events = result;
            //  console.log(result)
            _this.events.map(function (event) {
                // var sum = 0;
                event.inscriptions = event.inscriptions.filter(function (e) { console.log(e.state == 1); return e.state == 1; });
                // console.log(e)
                // event.inscritos = sum;
            });
            //  console.log(this.events)
            _this.inscriptions = _this.events.inscritos;
        }, function (error) {
            console.log(error);
        });
    };
    BarraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-barra',
            template: __webpack_require__("./src/app/graphicReports/reports/barra/barra.component.html"),
            styles: [__webpack_require__("./src/app/graphicReports/reports/barra/barra.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */]])
    ], BarraComponent);
    return BarraComponent;
}());



/***/ }),

/***/ "./src/app/graphicReports/reports/linea/linea.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/graphicReports/reports/linea/linea.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <div style=\"display: block;\">\r\n    <canvas baseChart width=\"400\" height=\"400\"\r\n                [datasets]=\"lineChartData\"\r\n                [labels]=\"lineChartLabels\"\r\n                [options]=\"lineChartOptions\"\r\n                [colors]=\"lineChartColors\"\r\n                [legend]=\"lineChartLegend\"\r\n                [chartType]=\"lineChartType\"\r\n                (chartHover)=\"chartHovered($event)\"\r\n                (chartClick)=\"chartClicked($event)\"></canvas>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6\" style=\"margin-bottom: 10px\">\r\n    <table class=\"table table-responsive table-condensed\">\r\n      <tr>\r\n        <th *ngFor=\"let label of lineChartLabels\">{{label}}</th>\r\n      </tr>\r\n      <tr *ngFor=\"let d of lineChartData\">\r\n        <td *ngFor=\"let label of lineChartLabels; let j=index\">{{d && d.data[j]}}</td>\r\n      </tr>\r\n    </table>\r\n    <button class=\"btn btn-primary btn-block\" (click)=\"randomize()\">CLICK</button>\r\n  </div>\r\n</div> -->"

/***/ }),

/***/ "./src/app/graphicReports/reports/linea/linea.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LineaComponent = /** @class */ (function () {
    function LineaComponent() {
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    LineaComponent.prototype.randomize = function () {
        var _lineChartData = new Array(this.lineChartData.length);
        for (var i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    };
    // events
    LineaComponent.prototype.chartClicked = function (e) {
        // console.log(e);
    };
    LineaComponent.prototype.chartHovered = function (e) {
        // console.log(e);
    };
    LineaComponent.prototype.ngOnInit = function () {
    };
    LineaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-linea',
            template: __webpack_require__("./src/app/graphicReports/reports/linea/linea.component.html"),
            styles: [__webpack_require__("./src/app/graphicReports/reports/linea/linea.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LineaComponent);
    return LineaComponent;
}());



/***/ }),

/***/ "./src/app/graphicReports/reports/reports.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/graphicReports/reports/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Reportes\r\n      <small>Eventos e Inscritos</small>\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li>\r\n        <button [routerLink]=\"['/home/trimestral']\" class=\"btn btn-primary\">Ver trimestral</button>\r\n      </li>\r\n    </ol>\r\n  </section>\r\n  <section class=\"content\">\r\n    <div>\r\n      <table class=\"table table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>Nombre</th>\r\n            <th>Estado</th>\r\n            <th>Incritos</th>\r\n            <th>Grafica del Evento</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let i of events\">\r\n            <td>{{ i.name }}</td>\r\n            <td>{{ i.state }}</td>\r\n            <td>{{ i.inscriptions.length}}</td>\r\n            <td>\r\n              <button [routerLink]=\"['/home/reportEvent/'+ i._id + '-' + i.name]\" class=\"btn btn-primary\">VER GRAFICO</button>\r\n            </td>\r\n\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n    <!-- <app-barra></app-barra> -->\r\n    <!--<app-linea></app-linea>\r\n    <app-torta></app-torta>-->\r\n  </section>\r\n</div>"

/***/ }),

/***/ "./src/app/graphicReports/reports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(_route, _router, _peticionesService) {
        this._route = _route;
        this._router = _router;
        this._peticionesService = _peticionesService;
        this.titulo = 'Reportes de Eventos';
    }
    ReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('reports.component.ts cargado')
        this._peticionesService.getEvents().subscribe(function (result) {
            _this.events = result;
            //  console.log(result)
            _this.events.map(function (event) {
                // var sum = 0;
                event.inscriptions = event.inscriptions.filter(function (e) { console.log(e.state == 1); return e.state == 1; });
                // console.log(e)
                // event.inscritos = sum;
            });
            //  console.log(this.events)
            _this.inscriptions = _this.events.inscritos;
        }, function (error) {
            console.log(error);
        });
    };
    ReportsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reports',
            template: __webpack_require__("./src/app/graphicReports/reports/reports.component.html"),
            styles: [__webpack_require__("./src/app/graphicReports/reports/reports.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/graphicReports/reports/torta/torta.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/graphicReports/reports/torta/torta.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div style=\"display: block\">\r\n    <canvas baseChart\r\n            [data]=\"pieChartData\"\r\n            [labels]=\"pieChartLabels\"\r\n            [chartType]=\"pieChartType\"\r\n            (chartHover)=\"chartHovered($event)\"\r\n            (chartClick)=\"chartClicked($event)\"></canvas>\r\n  </div> -->\r\n"

/***/ }),

/***/ "./src/app/graphicReports/reports/torta/torta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TortaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TortaComponent = /** @class */ (function () {
    function TortaComponent() {
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
    }
    // events
    TortaComponent.prototype.chartClicked = function (e) {
        // console.log(e);
    };
    TortaComponent.prototype.chartHovered = function (e) {
        // console.log(e);
    };
    TortaComponent.prototype.ngOnInit = function () {
    };
    TortaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-torta',
            template: __webpack_require__("./src/app/graphicReports/reports/torta/torta.component.html"),
            styles: [__webpack_require__("./src/app/graphicReports/reports/torta/torta.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TortaComponent);
    return TortaComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<app-appheader></app-appheader>\r\n\r\n<app-appmenu></app-appmenu>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<app-appfooter></app-appfooter>\r\n<app-appsettings></app-appsettings>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_global__ = __webpack_require__("./src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (__WEBPACK_IMPORTED_MODULE_1__services_global__["b" /* Identity */]._id == '') {
            this.router.navigate(['/login']);
        }
        else {
            this.router.navigate(['/home/events']);
            this.identify = __WEBPACK_IMPORTED_MODULE_1__services_global__["b" /* Identity */]._id;
            // console.log(this.identify+'   este es el id');  //recuperando el id del usuario
            // this._peticionesService.getEvents().subscribe(
            //    result => {
            //       this.events = result;
            //       console.log(this.events);
            //    },
            //    error => {
            //       var errorMessage = <any>error;
            //       console.log(errorMessage);
            //    }
            // );
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/plantilla/appfooter/appfooter.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/plantilla/appfooter/appfooter.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\r\n    <div class=\"pull-right hidden-xs\">\r\n      <b>Version</b> 1.0.0\r\n    </div>\r\n    <strong>CECAP COMPANY &copy; - <a href=\"http://www.cecapconsulting.com\">Studio</a>.</strong> Todos los derechos reservados\r\n    <div class=\"chatkit-messenger-chat\"></div>\r\n  </footer>\r\n"

/***/ }),

/***/ "./src/app/home/plantilla/appfooter/appfooter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppfooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppfooterComponent = /** @class */ (function () {
    function AppfooterComponent() {
    }
    AppfooterComponent.prototype.ngOnInit = function () {
    };
    AppfooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-appfooter',
            template: __webpack_require__("./src/app/home/plantilla/appfooter/appfooter.component.html"),
            styles: [__webpack_require__("./src/app/home/plantilla/appfooter/appfooter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppfooterComponent);
    return AppfooterComponent;
}());



/***/ }),

/***/ "./src/app/home/plantilla/appheader/appheader.component.css":
/***/ (function(module, exports) {

module.exports = ".cabecera{\r\n    background-color: lightgreen;\r\n}"

/***/ }),

/***/ "./src/app/home/plantilla/appheader/appheader.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n  appheader works!\r\n</p> -->\r\n\r\n\r\n<header class=\"main-header\">\r\n  \r\n      <!-- <a [routerLink]=\"['/']\" class=\"logo\">\r\n        <span class=\"logo-mini\"><b>C</b>CO</span>\r\n      </a> -->\r\n      \r\n      <!-- Header Navbar: style can be found in header.less -->\r\n      <nav class=\"navbar navbar-static-top\">\r\n         <!-- Sidebar toggle button-->\r\n         \r\n         <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n         </a>\r\n         <!-- <span class=\"logo-lg\"><b>Cecap</b>COMPANY</span> -->\r\n         <!-- Navbar Right Menu -->\r\n        <div class=\"navbar-custom-menu\">\r\n          <ul class=\"nav navbar-nav\">\r\n            <!-- Messages: style can be found in dropdown.less-->\r\n            <!--<li class=\"dropdown messages-menu\">\r\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                <i class=\"fa fa-envelope-o\"></i>\r\n                <span class=\"label label-success\">4</span>\r\n              </a>\r\n              <ul class=\"dropdown-menu\">\r\n                <li class=\"header\">You have 4 messages</li>\r\n                <li>\r\n                  <ul class=\"menu\">\r\n                    <li>\r\n                      <a href=\"#\">\r\n                        <div class=\"pull-left\">\r\n                          <img src=\"assets/dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n                        </div>\r\n                        <h4>\r\n                          Support Team\r\n                          <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\r\n                        </h4>\r\n                        <p>Why not buy a new awesome theme?</p>\r\n                      </a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"#\">\r\n                        <div class=\"pull-left\">\r\n                          <img src=\"assets/dist/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n                        </div>\r\n                        <h4>\r\n                          AdminLTE Design Team\r\n                          <small><i class=\"fa fa-clock-o\"></i> 2 hours</small>\r\n                        </h4>\r\n                        <p>Why not buy a new awesome theme?</p>\r\n                      </a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"#\">\r\n                        <div class=\"pull-left\">\r\n                          <img src=\"assets/dist/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n                        </div>\r\n                        <h4>\r\n                          Developers\r\n                          <small><i class=\"fa fa-clock-o\"></i> Today</small>\r\n                        </h4>\r\n                        <p>Why not buy a new awesome theme?</p>\r\n                      </a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"#\">\r\n                        <div class=\"pull-left\">\r\n                          <img src=\"assets/dist/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n                        </div>\r\n                        <h4>\r\n                          Sales Department\r\n                          <small><i class=\"fa fa-clock-o\"></i> Yesterday</small>\r\n                        </h4>\r\n                        <p>Why not buy a new awesome theme?</p>\r\n                      </a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"#\">\r\n                        <div class=\"pull-left\">\r\n                          <img src=\"assets/dist/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n                        </div>\r\n                        <h4>\r\n                          Reviewers\r\n                          <small><i class=\"fa fa-clock-o\"></i> 2 days</small>\r\n                        </h4>\r\n                        <p>Why not buy a new awesome theme?</p>\r\n                      </a>\r\n                    </li>\r\n                  </ul>\r\n                </li>\r\n                <li class=\"footer\"><a href=\"#\">See All Messages</a></li>\r\n              </ul>\r\n            </li>-->\r\n            <!-- Notifications: style can be found in dropdown.less -->\r\n            <!--<li class=\"dropdown notifications-menu\">\r\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                <i class=\"fa fa-bell-o\"></i>\r\n                <span class=\"label label-warning\">10</span>\r\n              </a>\r\n              <ul class=\"dropdown-menu\">\r\n                <li class=\"header\">You have 10 notifications</li>\r\n                <li>\r\n                  <ul class=\"menu\">\r\n                    <li>\r\n                      <a href=\"#\">\r\n                        <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\r\n                      </a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"#\">\r\n                        <i class=\"fa fa-warning text-yellow\"></i> Very long description here that may not fit into the\r\n                        page and may cause design problems\r\n                      </a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"#\">\r\n                        <i class=\"fa fa-users text-red\"></i> 5 new members joined\r\n                      </a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"#\">\r\n                        <i class=\"fa fa-shopping-cart text-green\"></i> 25 sales made\r\n                      </a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"#\">\r\n                        <i class=\"fa fa-user text-red\"></i> You changed your username\r\n                      </a>\r\n                    </li>\r\n                  </ul>\r\n                </li>\r\n                <li class=\"footer\"><a href=\"#\">View all</a></li>\r\n              </ul>\r\n            </li> -->\r\n            <!--<li class=\"dropdown tasks-menu\">\r\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                <i class=\"fa fa-flag-o\"></i>\r\n                <span class=\"label label-danger\">9</span>\r\n              </a>\r\n              <ul class=\"dropdown-menu\">\r\n                <li class=\"header\">You have 9 tasks</li>\r\n                <li>\r\n                  <ul class=\"menu\">\r\n                    <li>\r\n                      <a href=\"#\">\r\n                        <h3>\r\n                          Design some buttons\r\n                          <small class=\"pull-right\">20%</small>\r\n                        </h3>\r\n                        <div class=\"progress xs\">\r\n                          <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\"\r\n                               aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                            <span class=\"sr-only\">20% Complete</span>\r\n                          </div>\r\n                        </div>\r\n                      </a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"#\">\r\n                        <h3>\r\n                          Create a nice theme\r\n                          <small class=\"pull-right\">40%</small>\r\n                        </h3>\r\n                        <div class=\"progress xs\">\r\n                          <div class=\"progress-bar progress-bar-green\" style=\"width: 40%\" role=\"progressbar\"\r\n                               aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                            <span class=\"sr-only\">40% Complete</span>\r\n                          </div>\r\n                        </div>\r\n                      </a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"#\">\r\n                        <h3>\r\n                          Some task I need to do\r\n                          <small class=\"pull-right\">60%</small>\r\n                        </h3>\r\n                        <div class=\"progress xs\">\r\n                          <div class=\"progress-bar progress-bar-red\" style=\"width: 60%\" role=\"progressbar\"\r\n                               aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                            <span class=\"sr-only\">60% Complete</span>\r\n                          </div>\r\n                        </div>\r\n                      </a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"#\">\r\n                        <h3>\r\n                          Make beautiful transitions\r\n                          <small class=\"pull-right\">80%</small>\r\n                        </h3>\r\n                        <div class=\"progress xs\">\r\n                          <div class=\"progress-bar progress-bar-yellow\" style=\"width: 80%\" role=\"progressbar\"\r\n                               aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                            <span class=\"sr-only\">80% Complete</span>\r\n                          </div>\r\n                        </div>\r\n                      </a>\r\n                    </li>\r\n                  </ul>\r\n                </li>\r\n                <li class=\"footer\">\r\n                  <a href=\"#\">View all tasks</a>\r\n                </li>\r\n              </ul>\r\n            </li>-->\r\n            <!-- User Account: style can be found in dropdown.less -->\r\n            <li class=\"dropdown user user-menu\">\r\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                <img src=\"assets/dist/img/line.png\" class=\"user-image\" alt=\"User Image\">\r\n                <span class=\"hidden-xs\">{{nameUser}}</span>\r\n              </a>\r\n              <ul class=\"dropdown-menu\">\r\n                <!-- User image -->\r\n                <li class=\"user-header\">\r\n                  <img src=\"assets/dist/img/line.png\" class=\"img-circle\" alt=\"User Image\">\r\n  \r\n                  <p>\r\n                      {{nameUser}}\r\n                    <!-- <small>Member since April 2018</small> -->\r\n                  </p>\r\n                </li>\r\n                <!-- Menu Body -->\r\n                <!-- <li class=\"user-body\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-xs-4 text-center\">\r\n                      <a href=\"#\">Followers</a>\r\n                    </div>\r\n                    <div class=\"col-xs-4 text-center\">\r\n                      <a href=\"#\">Sales</a>\r\n                    </div>\r\n                    <div class=\"col-xs-4 text-center\">\r\n                      <a href=\"#\">Friends</a>\r\n                    </div>\r\n                  </div>\r\n                </li> -->\r\n                <!-- Menu Footer-->\r\n                <li class=\"user-footer\">\r\n                  <div class=\"pull-left\">\r\n                    <a class=\"btn btn-default btn-flat\" (click)=\"contra()\">Cambiar Contraseña</a>\r\n                  </div>\r\n                  <div class=\"pull-right\">\r\n                    <a class=\"btn btn-default btn-flat\" (click)=\"logOut()\">Sign out</a>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n            <!-- Control Sidebar Toggle Button -->\r\n            <li>\r\n              <!-- <a href=\"#\" data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a> -->\r\n            </li>\r\n          </ul>\r\n        </div>\r\n  \r\n      </nav>\r\n    </header>"

/***/ }),

/***/ "./src/app/home/plantilla/appheader/appheader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppheaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_async_local_storage__ = __webpack_require__("./node_modules/angular-async-local-storage/angular-async-local-storage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global__ = __webpack_require__("./src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppheaderComponent = /** @class */ (function () {
    function AppheaderComponent(localStorage, _router) {
        this.localStorage = localStorage;
        this._router = _router;
    }
    AppheaderComponent.prototype.ngOnInit = function () {
        this.nameUser = __WEBPACK_IMPORTED_MODULE_3__services_global__["b" /* Identity */].name;
    };
    AppheaderComponent.prototype.logOut = function () {
        this.localStorage.removeItem('Identity').subscribe(function () { });
        __WEBPACK_IMPORTED_MODULE_3__services_global__["b" /* Identity */]._id = '';
        __WEBPACK_IMPORTED_MODULE_3__services_global__["b" /* Identity */].rol = '';
        __WEBPACK_IMPORTED_MODULE_3__services_global__["b" /* Identity */].name = '';
        this._router.navigate(['/login']);
    };
    AppheaderComponent.prototype.contra = function () {
        this._router.navigate(['/home/cambiar']);
    };
    AppheaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-appheader',
            template: __webpack_require__("./src/app/home/plantilla/appheader/appheader.component.html"),
            styles: [__webpack_require__("./src/app/home/plantilla/appheader/appheader.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular_async_local_storage__["a" /* AsyncLocalStorage */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppheaderComponent);
    return AppheaderComponent;
}());



/***/ }),

/***/ "./src/app/home/plantilla/appmenu/appmenu.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/plantilla/appmenu/appmenu.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- <p>\r\n  appmenu works!\r\n</p> -->\r\n<aside class=\"main-sidebar\">\r\n    <!-- sidebar: style can be found in sidebar.less -->\r\n    <section class=\"sidebar\">\r\n      <!-- Sidebar user panel -->\r\n      <div class=\"user-panel\">\r\n        <div class=\"pull-left image\">\r\n          <img src=\"assets/dist/img/line.png\" class=\"img-circle\" alt=\"User Image\">\r\n          <!--<i class=\"fa fa-user-circle-o image-responsive \"></i>-->\r\n        </div>\r\n        <div class=\"pull-left info\">\r\n          <p>{{nameUser}}</p>\r\n          <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\r\n        </div>\r\n      </div>\r\n      <!-- search form -->\r\n      <form action=\"#\" method=\"get\" class=\"sidebar-form\">\r\n        <div class=\"input-group\">\r\n          <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Buscar...\">\r\n          <span class=\"input-group-btn\">\r\n                <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\">\r\n                  <i class=\"fa fa-search\"></i>\r\n                </button>\r\n              </span>\r\n        </div>\r\n      </form>\r\n      <!-- /.search form -->\r\n      <!-- sidebar menu: : style can be found in sidebar.less -->\r\n      <ul class=\"sidebar-menu\" data-widget=\"tree\">\r\n        <li class=\"header\">MENU PRINCIPAL</li>\r\n          <li><a [routerLink]=\"['/home/events']\"><i class=\"fa fa-book\"></i><span>Eventos</span></a></li>\r\n        \r\n          <li><a [routerLink]=\"['/home/persons']\"><i class=\"fa fa-book\"></i> <span>Lista de Personas</span></a></li>\r\n          <li><a [routerLink]=\"['/home/ejecutivo']\"><i class=\"fa fa-book\"></i> <span>Ejecutivo</span></a></li>\r\n          <li><a [routerLink]=\"['/home/cartera']\"><i class=\"fa fa-book\"></i> <span>Cartera</span></a></li>\r\n          <li><a [routerLink]=\"['/home/programs']\"><i class=\"fa fa-book\"></i> <span>Programas</span></a></li>\r\n          <!-- <li><a [routerLink]=\"['/home/facilitador']\"><i class=\"fa fa-book\"></i> <span>facilitador</span></a></li> -->\r\n          <li><a [routerLink]=\"['/home/sucursal']\"><i class=\"glyphicon glyphicon-globe\"></i>Sucursales</a></li>\r\n          <!-- <li><a [routerLink]=\"['/home/sucursal/add']\"><i class=\"fa fa-book\"></i>Add Sucursal</a></li> -->\r\n          <li><a [routerLink]=\"['/home/importWhatsapp']\"><i class=\"fa fa-book\"></i> <span>Importar de whatsapp</span> </a></li>\r\n          <li><a [routerLink]=\"['/home/importFromExcel']\"><i class=\"fa fa-book\"></i><span>Importar de Excel</span> </a></li>\r\n          <!-- <li><a [routerLink]=\"['/home/segmentacion']\"><i class=\"fa fa-book\"></i>segementacion</a></li> -->\r\n          <li><a [routerLink]=\"['/home/segmentacion']\"><i class=\"fa fa-book\"></i> <span>segementacion</span> </a></li>\r\n          <li><a [routerLink]=\"['/home/filtros']\"><i class=\"fa fa-book\"></i> <span>Filtros Personas</span> </a></li>\r\n          <li><a [routerLink]=\"['/home/divideCartera']\"><i class=\"fa fa-book\"></i> <span>Dividir Personas de Cartera</span> </a></li>\r\n          <li><a [routerLink]=\"['/home/reporteEjecutivo']\"><i class=\"fa fa-book\"></i> <span>Reportes</span> </a></li>\r\n          <li><a [routerLink]=\"['/home/reporteEvents']\"><i class=\"fa fa-book\"></i> <span>Reportes Eventos</span> </a></li>\r\n      \r\n                    \r\n\r\n\r\n          \r\n          \r\n      </ul>\r\n    </section>\r\n    <!-- /.sidebar -->\r\n  </aside>"

/***/ }),

/***/ "./src/app/home/plantilla/appmenu/appmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppmenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_global__ = __webpack_require__("./src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppmenuComponent = /** @class */ (function () {
    function AppmenuComponent() {
        this.prueba = 'add';
    }
    AppmenuComponent.prototype.ngOnInit = function () {
        this.nameUser = __WEBPACK_IMPORTED_MODULE_1__services_global__["b" /* Identity */].name;
    };
    AppmenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-appmenu',
            template: __webpack_require__("./src/app/home/plantilla/appmenu/appmenu.component.html"),
            styles: [__webpack_require__("./src/app/home/plantilla/appmenu/appmenu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppmenuComponent);
    return AppmenuComponent;
}());



/***/ }),

/***/ "./src/app/home/plantilla/appsettings/appsettings.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/plantilla/appsettings/appsettings.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- \r\n\r\n\r\n<aside class=\"control-sidebar control-sidebar-dark\">\r\n    <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\r\n      <li><a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\r\n      <li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a></li>\r\n    </ul>\r\n    <div class=\"tab-content\">\r\n      <div class=\"tab-pane\" id=\"control-sidebar-home-tab\">\r\n        <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\r\n        <ul class=\"control-sidebar-menu\">\r\n          <li>\r\n            <a href=\"javascript:void(0)\">\r\n              <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\r\n\r\n              <div class=\"menu-info\">\r\n                <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\r\n\r\n                <p>Will be 23 on April 24th</p>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"javascript:void(0)\">\r\n              <i class=\"menu-icon fa fa-user bg-yellow\"></i>\r\n\r\n              <div class=\"menu-info\">\r\n                <h4 class=\"control-sidebar-subheading\">Frodo Updated His Profile</h4>\r\n\r\n                <p>New phone +1(800)555-1234</p>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"javascript:void(0)\">\r\n              <i class=\"menu-icon fa fa-envelope-o bg-light-blue\"></i>\r\n\r\n              <div class=\"menu-info\">\r\n                <h4 class=\"control-sidebar-subheading\">Nora Joined Mailing List</h4>\r\n\r\n                <p>nora@example.com</p>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"javascript:void(0)\">\r\n              <i class=\"menu-icon fa fa-file-code-o bg-green\"></i>\r\n\r\n              <div class=\"menu-info\">\r\n                <h4 class=\"control-sidebar-subheading\">Cron Job 254 Executed</h4>\r\n\r\n                <p>Execution time 5 seconds</p>\r\n              </div>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n\r\n        <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\r\n        <ul class=\"control-sidebar-menu\">\r\n          <li>\r\n            <a href=\"javascript:void(0)\">\r\n              <h4 class=\"control-sidebar-subheading\">\r\n                Custom Template Design\r\n                <span class=\"label label-danger pull-right\">70%</span>\r\n              </h4>\r\n\r\n              <div class=\"progress progress-xxs\">\r\n                <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"javascript:void(0)\">\r\n              <h4 class=\"control-sidebar-subheading\">\r\n                Update Resume\r\n                <span class=\"label label-success pull-right\">95%</span>\r\n              </h4>\r\n\r\n              <div class=\"progress progress-xxs\">\r\n                <div class=\"progress-bar progress-bar-success\" style=\"width: 95%\"></div>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"javascript:void(0)\">\r\n              <h4 class=\"control-sidebar-subheading\">\r\n                Laravel Integration\r\n                <span class=\"label label-warning pull-right\">50%</span>\r\n              </h4>\r\n\r\n              <div class=\"progress progress-xxs\">\r\n                <div class=\"progress-bar progress-bar-warning\" style=\"width: 50%\"></div>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"javascript:void(0)\">\r\n              <h4 class=\"control-sidebar-subheading\">\r\n                Back End Framework\r\n                <span class=\"label label-primary pull-right\">68%</span>\r\n              </h4>\r\n\r\n              <div class=\"progress progress-xxs\">\r\n                <div class=\"progress-bar progress-bar-primary\" style=\"width: 68%\"></div>\r\n              </div>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n\r\n      </div>\r\n\r\n      <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\r\n        <form method=\"post\">\r\n          <h3 class=\"control-sidebar-heading\">General Settings</h3>\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"control-sidebar-subheading\">\r\n              Report panel usage\r\n              <input type=\"checkbox\" class=\"pull-right\" checked>\r\n            </label>\r\n\r\n            <p>\r\n              Some information about this general settings option\r\n            </p>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"control-sidebar-subheading\">\r\n              Allow mail redirect\r\n              <input type=\"checkbox\" class=\"pull-right\" checked>\r\n            </label>\r\n\r\n            <p>\r\n              Other sets of options are available\r\n            </p>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"control-sidebar-subheading\">\r\n              Expose author name in posts\r\n              <input type=\"checkbox\" class=\"pull-right\" checked>\r\n            </label>\r\n\r\n            <p>\r\n              Allow the user to show his name in blog posts\r\n            </p>\r\n          </div>\r\n\r\n          <h3 class=\"control-sidebar-heading\">Chat Settings</h3>\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"control-sidebar-subheading\">\r\n              Show me as online\r\n              <input type=\"checkbox\" class=\"pull-right\" checked>\r\n            </label>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"control-sidebar-subheading\">\r\n              Turn off notifications\r\n              <input type=\"checkbox\" class=\"pull-right\">\r\n            </label>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"control-sidebar-subheading\">\r\n              Delete chat history\r\n              <a href=\"javascript:void(0)\" class=\"text-red pull-right\"><i class=\"fa fa-trash-o\"></i></a>\r\n            </label>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </aside> -->"

/***/ }),

/***/ "./src/app/home/plantilla/appsettings/appsettings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppsettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppsettingsComponent = /** @class */ (function () {
    function AppsettingsComponent() {
    }
    AppsettingsComponent.prototype.ngOnInit = function () {
    };
    AppsettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-appsettings',
            template: __webpack_require__("./src/app/home/plantilla/appsettings/appsettings.component.html"),
            styles: [__webpack_require__("./src/app/home/plantilla/appsettings/appsettings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppsettingsComponent);
    return AppsettingsComponent;
}());



/***/ }),

/***/ "./src/app/import-from-excel/import-from-excel.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/import-from-excel/import-from-excel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n  <br>\r\n  <div class=\"content\">\r\n\r\n\r\n    <div class=\"box box-primary\">\r\n\r\n      <div class=\"container\">\r\n\r\n\r\n        <h2>Impotar Numeros de excel</h2>\r\n        <div class=\"form-group\" style=\"width: 50%\">\r\n          <label for=\"programs\">Intereses</label>\r\n          <br>\r\n          <label>\r\n            <div *ngFor=\"let program of newProgramsCheck; let i = index\">\r\n              <input type=\"checkbox\" name=\"program{{i}}\" #categories=\"ngModel\" value=\"{{program.programName}}\" [(ngModel)]=\"program.checked\"\r\n              /> {{program.programName}}\r\n            </div>\r\n          </label>\r\n          <div [hidden]=\"programs?.valid || programs?.pristine\" class=\"text-alert\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"file\">Elegir Archivo</label>\r\n          <input type=\"file\" id=\"file\" (change)=\"handleFileInput($event.target.files)\">\r\n          <button type=\"button\" class=\"btn btn-info\" (click)=\"uploadFileToActivity()\">Upload</button>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/import-from-excel/import-from-excel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportFromExcelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global__ = __webpack_require__("./src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImportFromExcelComponent = /** @class */ (function () {
    function ImportFromExcelComponent(_peticionesService, route, router) {
        this._peticionesService = _peticionesService;
        this.route = route;
        this.router = router;
        this.newProgramsCheck = [];
    }
    ImportFromExcelComponent.prototype.ngOnInit = function () {
        this.queryCartera();
        this.queryPrograms();
    };
    ImportFromExcelComponent.prototype.llenarProgramsCheckbox = function () {
        for (var _i = 0, _a = this.programs; _i < _a.length; _i++) {
            var p = _a[_i];
            var programItem = {};
            programItem.checked = false;
            programItem.programId = p._id;
            programItem.programName = p.name;
            programItem.state = 0;
            this.newProgramsCheck.push(programItem);
        }
        // this.fixProgramCheckbox()
    };
    ImportFromExcelComponent.prototype.queryPrograms = function () {
        var _this = this;
        this._peticionesService.getPrograms().subscribe(function (response) {
            _this.programs = response;
            _this.llenarProgramsCheckbox();
            // console.log(this.programs);
            // console.log("hi")
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    ImportFromExcelComponent.prototype.incomingfile = function (event) {
        this.file = event.target.files[0];
    };
    ImportFromExcelComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
    };
    ImportFromExcelComponent.prototype.uploadFileToActivity = function () {
        var _this = this;
        var newInteres = [];
        for (var _i = 0, _a = this.newProgramsCheck; _i < _a.length; _i++) {
            var npc = _a[_i];
            if (npc.checked) {
                newInteres.push(npc);
            }
        }
        // console.log(newInteres);
        // this.person.interes = newInteres;
        this._peticionesService.postFile(this.fileToUpload, this.cartera, newInteres).subscribe(function (data) {
            // console.log(data, 'si se puede, si se puede')
            _this.router.navigate(['home/persons']);
            // do something, if upload success
        }, function (error) {
            console.log(error);
        });
    };
    ImportFromExcelComponent.prototype.queryCartera = function () {
        var _this = this;
        // console.log(Identity._id)
        this._peticionesService.getCarteraFromUserId(__WEBPACK_IMPORTED_MODULE_2__services_global__["b" /* Identity */]._id).subscribe(function (result) {
            _this.cartera = result;
            console.log(_this.cartera);
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    ImportFromExcelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-import-from-excel',
            template: __webpack_require__("./src/app/import-from-excel/import-from-excel.component.html"),
            styles: [__webpack_require__("./src/app/import-from-excel/import-from-excel.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_peticiones_service__["a" /* PeticionesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ImportFromExcelComponent);
    return ImportFromExcelComponent;
}());



/***/ }),

/***/ "./src/app/import-whats-numbers/import-whats-numbers.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n  \r\n  .text-alert{\r\n    color:#dd4b39;\r\n  }"

/***/ }),

/***/ "./src/app/import-whats-numbers/import-whats-numbers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n  <br>\r\n  <div class=\"content\">\r\n\r\n\r\n\r\n    <div class=\"box box-primary\">\r\n\r\n      <div class=\"container\">\r\n\r\n        <h2>Impotar Numeros de WhatsApp</h2>\r\n\r\n\r\n        <form (ngSubmit)=\"onSubmit()\" #WhatsNumber=\"ngForm\">\r\n          <div class=\"form-group col-sm-8\">\r\n            <label for=\"name\">Nombre del Grupo</label>\r\n            <input type=\"text\" pattern=\"[a-zA-Z0-9 ]{3,100}\" class=\"form-control\" id=\"name\" required [(ngModel)]=\"whatsGroupName\" name=\"name\"\r\n              #groupname=\"ngModel\">\r\n            <div [hidden]=\"groupname?.valid || groupname?.pristine\" class=\"text-alert\">\r\n              Nombre es invalido\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group col-sm-8\">\r\n            <label for=\"programs\">Intereses</label>\r\n            <!-- <input type=\"text\"  class=\"form-control\" id=\"programs\"\r\n                         required\r\n                         [(ngModel)]=\"whatsGroupName\" name=\"programs\"\r\n                         #programs=\"ngModel\"\r\n                         > -->\r\n\r\n            <br>\r\n\r\n            <label>\r\n              <div *ngFor=\"let program of programasListCheckbox; let i = index\">\r\n                <input type=\"checkbox\" name=\"program{{i}}\" #categories=\"ngModel\" value=\"{{program.programName}}\" [(ngModel)]=\"program.checked\"\r\n                /> {{program.programName}}\r\n              </div>\r\n            </label>\r\n\r\n\r\n            <div [hidden]=\"programs?.valid || programs?.pristine\" class=\"text-alert\">\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group col-sm-8\">\r\n            <label for=\"departament\">Departamento</label>\r\n            <select class=\"form-control\" id=\"departament\" [(ngModel)]=\"departamento\" name=\"departament\" #departament=\"ngModel\" required>\r\n              <option value=\"Cochabamba\">Cochabamba</option>\r\n              <option value=\"La Paz\">La Paz</option>\r\n              <option value=\"Santa Cruz\">Santa Cruz</option>\r\n            </select>\r\n            <!-- <input type=\"text\" class=\"form-control\" id=\"departament\" required\r\n                      [(ngModel)]=\"office.departament\" name=\"departament\" #departament=\"ngModel\" > -->\r\n            <span *ngIf=\"!departament.valid && departament.touched\" class=\"text-alert\">\r\n              *Departamento de Sucursal requerido.\r\n            </span>\r\n            <!--<div [hidden]=\"departament?.valid || departament?.pristine\" class=\"\">\r\n                     *Departamento requeridos\r\n                  </div>-->\r\n          </div>\r\n\r\n          <div class=\"form-group col-sm-8\">\r\n            <label for=\"numbers\">Pega los numeros aqui</label>\r\n\r\n            <textarea cols=\"30\" rows=\"10\" class=\"form-control\" id=\"numbers\" required [(ngModel)]=\"whatsNumbers\" name=\"numbers\" #numbers=\"ngModel\">pega aqui\r\n\r\n\r\n\r\n\r\n                    </textarea>\r\n            <div [hidden]=\"numbers?.valid || numbers?.pristine\" class=\"text-alert\">\r\n              Nombre es invalido\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-sm-8\">\r\n            <label for=\"name\">Ocupacion</label>\r\n\r\n            <label for=\"univer\">Universidad</label>\r\n            <select class=\"form-control\" id=\"univer\" [(ngModel)]=\"Universidad\" name=\"univer\" #ocupSelect=\"ngModel\">\r\n              <option *ngFor=\"let univ of universidades\" [value]=\"univ._id\">{{univ.nombre}}</option>\r\n              <!-- <option value=1>Universidad Mayor de San Simon</option>\r\n                                        <option value=2>U. Catolica</option>\r\n                                        <option value=3>U. Latinoamericana</option>                      -->\r\n            </select>\r\n\r\n            <!-- <select class=\"form-control\" id=\"univer\" [(ngModel)]=\"Universidad\" (change)=\"captUnive()\"\r\n                               name=\"univer\" #ocupSelect=\"ngModel\">\r\n                              <option value=\"\" hidden>Seleccionar...</option>                               \r\n                              <option value=1>Universidad Mayor de San Simon</option>\r\n                              <option value=2>U. Catolica</option>\r\n                              <option value=3>U. Latinoamericana</option>                     \r\n                          </select> -->\r\n          </div>\r\n          <div class=\"form-group col-sm-8\">\r\n            <label for=\"carrera\">Carrera</label>\r\n            <select class=\"form-control\" id=\"carr\" [(ngModel)]=\"nameCarrera\" name=\"carr\" #ocupSelect=\"ngModel\">\r\n              <option *ngFor=\"let carrera of carreras\" [value]=\"carrera._id\">{{carrera.nombre}}</option>\r\n            </select>\r\n            <!-- <input type=\"text\"  class=\"form-control\" id=\"carrera\"\r\n                           [(ngModel)]=\"nameCarrera\" name=\"carrera\"\r\n                           #carrera=\"ngModel\"\r\n                           >\r\n                    <div [hidden]=\"groupname?.valid || groupname?.pristine\"\r\n                         class=\"text-alert\">\r\n                      Nombre es invalido\r\n                    </div> -->\r\n          </div>\r\n\r\n          <div class=\"form-group col-sm-8\">\r\n\r\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!WhatsNumber.form.valid\">Registrar</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\r\n          </div>\r\n\r\n\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/import-whats-numbers/import-whats-numbers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportWhatsNumbersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global__ = __webpack_require__("./src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modelo_person__ = __webpack_require__("./src/app/modelo/person.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modelo_descOcupation__ = __webpack_require__("./src/app/modelo/descOcupation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ImportWhatsNumbersComponent = /** @class */ (function () {
    function ImportWhatsNumbersComponent(_peticionesService, router, route) {
        this._peticionesService = _peticionesService;
        this.router = router;
        this.route = route;
        this.numbers = [];
        this.programasListCheckbox = [];
        this.programasConInteres = [];
        this.newPersons = [];
        this.descOcupation = new __WEBPACK_IMPORTED_MODULE_5__modelo_descOcupation__["a" /* DescOcupation */]('', '', '', '', '', '', '');
        this.nuevaPersona = new __WEBPACK_IMPORTED_MODULE_3__modelo_person__["a" /* Person */]('', '', null, null, null, '', '', '', '', this.descOcupation, '', null, null);
        ///////////////////////////
        ///new Person(f
        //irst_name: string, 
        //last_name: string, 
        //ci: number, 
        //phone: number, 
        //cellphone: number, 
        //whatsapp_group: string, 
        //city: string, 
        //email: string, 
        //ocupation: string, 
        //descOcupation: DescOcupation, 
        //carteras: string)
        ////////////////////////////////
    }
    ImportWhatsNumbersComponent.prototype.ngOnInit = function () {
        this.queryCartera();
        this.queryPrograms();
        this.getUniversidades();
    };
    ImportWhatsNumbersComponent.prototype.onSubmit = function () {
        this.fixText();
        // console.log(this.whatsGroupName);
        // console.log(this.whatsNumbers);
    };
    ImportWhatsNumbersComponent.prototype.getUniversidades = function () {
        var _this = this;
        // console.log("hnjdjdjd")
        this._peticionesService.getUni().subscribe(function (res) {
            _this.universidades = res[0].university;
            _this.carreras = res[0].carrera;
            console.log(_this.universidades);
        });
    };
    ImportWhatsNumbersComponent.prototype.captUnive = function () {
    };
    ImportWhatsNumbersComponent.prototype.fixText = function () {
        // var numeros = this.whatsNumbers.split(',');
        // // console.log(numeros);
        // numeros.forEach(element => {
        //   if (element.split(';')[1] != undefined) {
        //     if (element.split(';')[1].length == 8) {
        //       this.numbers.push(element.split(';')[1]);
        //     }
        var _this = this;
        //   }
        // });
        // this.whatsNumbers = (<HTMLInputElement>document.getElementById('numbers')).value;
        var numeros = this.whatsNumbers.split(',');
        numeros.forEach(function (element) {
            if (element.split(';')[1] != undefined) {
                if (element.split(';')[1].length == 8) {
                    _this.numbers.push(element.split(';')[1]);
                }
            }
            else {
                if (element.split('+591 ')[1] != undefined)
                    _this.numbers.push(element.split('+591 ')[1]);
            }
        });
        // console.log(this.numbers);
        this.llenarProgramasConInteres();
    };
    ImportWhatsNumbersComponent.prototype.llenarProgramasConInteres = function () {
        for (var _i = 0, _a = this.programasListCheckbox; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.checked) {
                this.programasConInteres.push(i);
            }
        }
        // console.log(this.programasConInteres8);
        this.saveOnDB();
    };
    ImportWhatsNumbersComponent.prototype.saveOnDB = function () {
        var _this = this;
        var objWhats = {};
        console.log(this.numbers);
        objWhats.listaNumeros = this.numbers;
        objWhats.whatsapp_group = this.whatsGroupName;
        objWhats.cellphone = 0;
        objWhats.carteras = this.cartera._id;
        objWhats.city = this.departamento;
        objWhats.interes = this.programasConInteres;
        objWhats.universidad = this.Universidad;
        objWhats.carrera = this.nameCarrera;
        // console.log(this.Universidad);
        console.log(objWhats);
        this._peticionesService.saveBatchWhatsappNumbers(objWhats).subscribe(function (response) {
            _this.router.navigate(['home/persons']);
            // console.log(response);
        });
        this._peticionesService.getPersons().subscribe(function (response) {
            var prueba = response;
            console.log(prueba);
        });
    };
    ImportWhatsNumbersComponent.prototype.queryCartera = function () {
        var _this = this;
        // console.log(Identity._id)
        this._peticionesService.getCarteraFromUserId(__WEBPACK_IMPORTED_MODULE_2__services_global__["b" /* Identity */]._id).subscribe(function (result) {
            _this.cartera = result;
            // console.log(this.cartera);
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    ImportWhatsNumbersComponent.prototype.queryPrograms = function () {
        var _this = this;
        this._peticionesService.getPrograms().subscribe(function (response) {
            _this.programs = response;
            // console.log(this.programs);
            _this.llenarProgramsCheckbox();
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    ImportWhatsNumbersComponent.prototype.llenarProgramsCheckbox = function () {
        for (var _i = 0, _a = this.programs; _i < _a.length; _i++) {
            var pro = _a[_i];
            var oneProgramCheck = {};
            oneProgramCheck.programId = pro._id;
            oneProgramCheck.programName = pro.name;
            oneProgramCheck.checked = true;
            oneProgramCheck.state = 0;
            this.programasListCheckbox.push(oneProgramCheck);
        }
    };
    ImportWhatsNumbersComponent.prototype.cancel = function () {
        this;
    };
    ImportWhatsNumbersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-import-whats-numbers',
            template: __webpack_require__("./src/app/import-whats-numbers/import-whats-numbers.component.html"),
            styles: [__webpack_require__("./src/app/import-whats-numbers/import-whats-numbers.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], ImportWhatsNumbersComponent);
    return ImportWhatsNumbersComponent;
}());

////////////
//  0 interesados
//  1 en duda
//  2 confirmados
//  3 isncritos
//  4 enlinea
//  5 proximo evento 
//  6 sin interes
//////// 


/***/ }),

/***/ "./src/app/listas/listas.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n.ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n  \r\n.text-alert{\r\n    color:#dd4b39;\r\n}"

/***/ }),

/***/ "./src/app/listas/listas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n  <br>\r\n  <!-- <app-alerts></app-alerts> -->\r\n  <div class=\"content\">\r\n     <div class=\"box box-primary\">\r\n\r\n        <div class=\"container \">\r\n           <div [hidden]=\"submitted\">\r\n              <h1>Registrar Universidad</h1>\r\n              <br>\r\n              <form (ngSubmit)=\"save()\" #addEvent=\"ngForm\" class=\"jumbotron\">\r\n                 <div class=\"form-group col-sm-8\">\r\n                    <label for=\"uni\" class=\"control-label\">Nombre Universidad</label>\r\n                    <input type=\"text\" pattern=\"[a-zA-Z0-9 ,.-]{3,100}\" class=\"form-control\" id=\"uni\" [(ngModel)]=\"model.university\" name=\"uni\" #uni=\"ngModel\" required />\r\n                 </div>\r\n                 <!-- <div class=\"form-group col-sm-8\">\r\n                  <label for=\"carrera\" class=\"control-label\">Nombre Carrera</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"carrera\" [(ngModel)]=\"model.carrera\" name=\"carrera\" #carrera=\"ngModel\" required />\r\n               </div> -->\r\n                 <div class=\"form-group col-sm-8\" style=\"text-align:center \">\r\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addEvent.form.valid\">Guardar</button>\r\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelar()\">Cancelar</button>\r\n                 </div>\r\n              </form>\r\n           </div>\r\n        </div>\r\n     </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/listas/listas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modelo_list__ = __webpack_require__("./src/app/modelo/list.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListasComponent = /** @class */ (function () {
    function ListasComponent(_peticionesService, route, router) {
        this._peticionesService = _peticionesService;
        this.route = route;
        this.router = router;
        this.submitted = false;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__modelo_list__["a" /* List */]("");
    }
    ListasComponent.prototype.ngOnInit = function () {
    };
    ListasComponent.prototype.crearUniversidad = function () {
    };
    ListasComponent.prototype.save = function () {
        this._peticionesService.addUniversidad(this.model).subscribe(function (res) {
            var result = res;
        });
        this.router.navigate(['/home/events']);
    };
    ListasComponent.prototype.cancelar = function () {
        this.router.navigate(['/home/events']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("close", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ListasComponent.prototype, "close", void 0);
    ListasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-listas',
            template: __webpack_require__("./src/app/listas/listas.component.html"),
            styles: [__webpack_require__("./src/app/listas/listas.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ListasComponent);
    return ListasComponent;
}());



/***/ }),

/***/ "./src/app/login/contra/contra.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/contra/contra.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6 col-md-4 col-md-offset-4\">\r\n        <h1 class=\"text-center login-title\">Cambiar Contraseña</h1>\r\n        <div class=\"account-wall\">\r\n          <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"form-signin\">\r\n            <p>\r\n              <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password_hash\" class=\"form-control\" placeholder=\"Contraseña\"\r\n                required />\r\n              <span *ngIf=\"!password.valid && password.touched\" class=\"text-alert\">\r\n                *La contraseña de usuario es obligatorio.\r\n              </span>\r\n            </p>\r\n            <input type=\"submit\" value=\"LOGIN\" class=\"btn btn-success btn-lg btn-block\" />\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/contra/contra.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global__ = __webpack_require__("./src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContraComponent = /** @class */ (function () {
    function ContraComponent(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
        this.user = { password_hash: '' };
    }
    ContraComponent.prototype.ngOnInit = function () {
    };
    ContraComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.user);
        this._userService.change(__WEBPACK_IMPORTED_MODULE_3__services_global__["b" /* Identity */]._id, this.user).subscribe(function (response) {
            //  console
            _this._router.navigate(['/']);
        }, function (error) {
            //console.log(<any>error);
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error.body);
                _this.status = 'error';
            }
        });
    };
    ContraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contra',
            template: __webpack_require__("./src/app/login/contra/contra.component.html"),
            styles: [__webpack_require__("./src/app/login/contra/contra.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], ContraComponent);
    return ContraComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "/*:host{\r\n    flex-grow: 1;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  div.input{\r\n      position: relative;\r\n  }\r\n  div.input label{\r\n      position: absolute;\r\n      top: 0;\r\n      transform: translateY(-50%);\r\n      left: 10px;\r\n      background: crimson;\r\n      padding: 5px 2px;\r\n  }\r\n  div.input input{\r\n      padding: 10px 20px;\r\n      font-size: 25px;\r\n      outline: 0;\r\n  }**/\r\n.form-signin{\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n}\r\n.form-signin .form-signin-heading, .form-signin{\r\n    margin-bottom: 10px;\r\n}\r\n.form-signin{\r\n    font-weight: normal;\r\n}\r\n.form-signin .form-control{\r\n    position: relative;\r\n    font-size: 16px;\r\n    height: auto;\r\n    padding: 10px;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n.form-signin .form-control:focus{\r\n    z-index: 2;\r\n}\r\n.form-signin input[type=\"text\"]{\r\n    margin-bottom: -1px;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n}\r\n.form-signin input[type=\"password\"]{\r\n    margin-bottom: 10px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n}\r\n.account-wall{\r\n    margin-top: 20px;\r\n    padding: 40px 0px 20px 0px;\r\n    background-color: #f7f7f7;\r\n    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n.login-title{\r\n    color: #555;\r\n    font-size: 24px;\r\n    font-weight: 550;\r\n    display: block;\r\n}\r\n.text-alert{\r\n    color:#dd4b39;\r\n}\r\n.profile-img{\r\n    width: 96px;\r\n    height: 96px;\r\n    margin: 0 auto 10px;\r\n    display: block;\r\n    border-radius: 50%;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n    <link href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n    <script src=\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js\"></script>\r\n    <script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n \r\n<!--<div class=\"col-lg-6\">\r\n  <h1>Welcome to {{ title }}!</h1>\r\n  <img width=\"150\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n\r\n      <div class=\"alert alert-success\" *ngIf=\"status == 'success'\">\r\n        Login correcto !!\r\n      </div>\r\n      <div class=\"alert alert-danger\" *ngIf=\"status == 'error'\">\r\n          Login correcto !!\r\n        </div>\r\n      <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-lg-7\">\r\n          <p>\r\n            <label>Username</label>\r\n            <input type=\"text\" name=\"nombre\" #nombre=\"ngModel\" [(ngModel)]=\"user.name\" class=\"form-control\" required />\r\n            <span *ngIf=\"!nombre.valid && nombre.touched\">\r\n                El nombre de usuario es obligatorio.\r\n              </span>\r\n          </p>\r\n          <p>\r\n              <label>Contraseña</label>\r\n              <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password_hash\" class=\r\n              \"form-control\" required />\r\n              <span *ngIf=\"!password.valid && password.touched\">\r\n                El Password de usuario es obligatorio.\r\n              </span> \r\n            </p>  \r\n          <!-- <input type=\"submit\" value=\"LOGIN\" [routerLink]=\"['/home']\">\r\n          <input type=\"submit\" value=\"LOGIN\" class=\"btn btn-success\"/>\r\n        </form>\r\n  <div style=\"text-align:left\">\r\n    <h5>\r\n    CECAP Consulting: Todos los derechos reservados.\r\n    </h5>\r\n  </div>-->\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n      <div class=\"col-sm-6 col-md-4 col-md-offset-4\">\r\n          <h1 class=\"text-center login-title\">Bienvenidos a {{title}}</h1>\r\n          <div class=\"account-wall\">\r\n            <img class=\"profile-img\" src=\"assets/dist/img/line.png\" alt=\"\">\r\n                <div class=\"alert alert-success\" *ngIf=\"status == 'success'\">\r\n                  Login correcto !!\r\n                </div>\r\n                <div class=\"alert alert-danger\" *ngIf=\"status == 'error'\">\r\n                  Login correcto !!\r\n                </div>\r\n                <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"form-signin\">\r\n                  <p>\r\n                    <input type=\"text\" name=\"nombre\" #nombre=\"ngModel\" [(ngModel)]=\"user.name\" class=\"form-control\" placeholder=\"Nombre de usuario\" required/>\r\n                    <span *ngIf=\"!nombre.valid && nombre.touched\" class=\"text-alert\">\r\n                      *El nombre de usuario es obligatorio.\r\n                    </span>\r\n                  </p>\r\n                  <p>\r\n                    <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password_hash\" class=\"form-control\" placeholder=\"Contraseña\" required />\r\n                    <span *ngIf=\"!password.valid && password.touched\" class=\"text-alert\">\r\n                      *La contraseña de usuario es obligatorio.\r\n                    </span> \r\n                  </p>  \r\n                  <input type=\"submit\" value=\"LOGIN\" class=\"btn btn-success btn-lg btn-block\"/>\r\n                </form>\r\n            </div>\r\n            <div style=\"text-align:left\">\r\n              <h5>\r\n                CECAP Consulting: Todos los derechos reservados.\r\n              </h5>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_async_local_storage__ = __webpack_require__("./node_modules/angular-async-local-storage/angular-async-local-storage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global__ = __webpack_require__("./src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modelo_user__ = __webpack_require__("./src/app/modelo/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(_route, _router, _userService, localStorage) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.localStorage = localStorage;
        this.title = 'CECAP COMPANY';
        this.user = new __WEBPACK_IMPORTED_MODULE_5__modelo_user__["a" /* User */]('', '', null, '', '');
    }
    LoginComponent.prototype.ngOnInit = function () {
        // console.log('login.component cargado');
        // console.log('this._userService.register()');
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this._userService.signin(this.user).subscribe(function (response) {
            //  console
            _this.identity = response;
            if (!_this.identity || !_this.identity._id) {
                alert('Usuario Incorrecto');
            }
            else {
                __WEBPACK_IMPORTED_MODULE_3__services_global__["b" /* Identity */]._id = _this.identity._id;
                __WEBPACK_IMPORTED_MODULE_3__services_global__["b" /* Identity */].rol = _this.identity.rol;
                __WEBPACK_IMPORTED_MODULE_3__services_global__["b" /* Identity */].name = _this.user.name;
                _this.localStorage.setItem('Identity', { _id: _this.identity._id }).subscribe(function () { console.log('verifico el usuario'); });
                _this._router.navigate(['/']);
            }
        }, function (error) {
            //console.log(<any>error);
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error.body);
                _this.status = 'error';
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2_angular_async_local_storage__["a" /* AsyncLocalStorage */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modelo/Ejecutivo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ejecutivo; });
var Ejecutivo = /** @class */ (function () {
    function Ejecutivo(_id, name, lastname, password_hash, active, cell, correo, rol, offices, cartera) {
        this._id = _id;
        this.name = name;
        this.lastname = lastname;
        this.password_hash = password_hash;
        this.active = active;
        this.cell = cell;
        this.correo = correo;
        this.rol = rol;
        this.offices = offices;
        this.cartera = cartera;
    }
    return Ejecutivo;
}());



/***/ }),

/***/ "./src/app/modelo/cartera.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cartera; });
var Cartera = /** @class */ (function () {
    function Cartera(name, user) {
        this.name = name;
        this.user = user;
    }
    return Cartera;
}());



/***/ }),

/***/ "./src/app/modelo/correlativo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Correlativo; });
var Correlativo = /** @class */ (function () {
    function Correlativo(year, company_id, receipts) {
    }
    return Correlativo;
}());



/***/ }),

/***/ "./src/app/modelo/descOcupation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescOcupation; });
var DescOcupation = /** @class */ (function () {
    function DescOcupation(
        //universitario
        carrera, universidad, semestre, 
        //Particular
        areaTrabajo, 
        //Profesional
        profesion, empresa, cargo) {
        this.carrera = carrera;
        this.universidad = universidad;
        this.semestre = semestre;
        this.areaTrabajo = areaTrabajo;
        this.profesion = profesion;
        this.empresa = empresa;
        this.cargo = cargo;
    }
    return DescOcupation;
}());



/***/ }),

/***/ "./src/app/modelo/event.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
var Event = /** @class */ (function () {
    function Event(name, description, date_start, 
        // public inscriptions: [{
        //   name: string,
        //    state: number,
        //    person: string,
        //    description: string
        // }],
        total, programs, 
        //public modulo: string
        offices, date_end, active) {
        this.name = name;
        this.description = description;
        this.date_start = date_start;
        this.total = total;
        this.programs = programs;
        this.offices = offices;
        this.date_end = date_end;
        this.active = active;
    }
    return Event;
}());



/***/ }),

/***/ "./src/app/modelo/facilitador.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return facilitador; });
var facilitador = /** @class */ (function () {
    function facilitador(name, 
        // public last_name: string,
        // public cellphone:number,
        // public email:string,
        job) {
        this.name = name;
        this.job = job;
    }
    return facilitador;
}());



/***/ }),

/***/ "./src/app/modelo/inscription.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Inscription; });
var Inscription = /** @class */ (function () {
    function Inscription(total_price, module_price, bolivianos_price, dolares_price, canceled_price, price_event, receipt, 
        // public persons: string,
        users) {
        this.total_price = total_price;
        this.module_price = module_price;
        this.bolivianos_price = bolivianos_price;
        this.dolares_price = dolares_price;
        this.canceled_price = canceled_price;
        this.price_event = price_event;
        this.receipt = receipt;
        this.users = users;
    }
    return Inscription;
}());



/***/ }),

/***/ "./src/app/modelo/list.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List; });
var List = /** @class */ (function () {
    function List(university) {
        this.university = university;
    }
    return List;
}());



/***/ }),

/***/ "./src/app/modelo/lists.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lists; });
var Lists = /** @class */ (function () {
    function Lists(bolivianos, dolares, receipt, // varios recibos
        assist, type, //nuevo // nivelacion
        person, events, modulars) {
        this.bolivianos = bolivianos;
        this.dolares = dolares;
        this.receipt = receipt;
        this.assist = assist;
        this.type = type;
        this.person = person;
        this.events = events;
        this.modulars = modulars;
    }
    return Lists;
}());



/***/ }),

/***/ "./src/app/modelo/modulo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modulo; });
var Modulo = /** @class */ (function () {
    function Modulo(number, name, content, programs) {
        this.number = number;
        this.name = name;
        this.content = content;
        this.programs = programs;
    }
    return Modulo;
}());



/***/ }),

/***/ "./src/app/modelo/offices.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Offices; });
var Offices = /** @class */ (function () {
    function Offices(name, 
        // nit:String,
        ubicacion, caja, departament, company_id) {
    }
    return Offices;
}());



/***/ }),

/***/ "./src/app/modelo/person.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Person; });
var Person = /** @class */ (function () {
    function Person(first_name, last_name, ci, phone, cellphone, whatsapp_group, city, email, ocupation, //1 = universitario, 2=Profecional, 3=particular
        descOcupation, 
        // public user: string,
        carteras, interes, contact_medium) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.ci = ci;
        this.phone = phone;
        this.cellphone = cellphone;
        this.whatsapp_group = whatsapp_group;
        this.city = city;
        this.email = email;
        this.ocupation = ocupation;
        this.descOcupation = descOcupation;
        this.carteras = carteras;
        this.interes = interes;
        this.contact_medium = contact_medium;
    }
    return Person;
}());



/***/ }),

/***/ "./src/app/modelo/programa.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Programa; });
var Programa = /** @class */ (function () {
    function Programa(name, 
        //public modules: boolean,
        details) {
        this.name = name;
        this.details = details;
    }
    return Programa;
}());



/***/ }),

/***/ "./src/app/modelo/receipts.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Receipt; });
var Receipt = /** @class */ (function () {
    function Receipt(receipt, amount, description) {
    }
    return Receipt;
}());



/***/ }),

/***/ "./src/app/modelo/registro.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Registro; });
var Registro = /** @class */ (function () {
    function Registro(inscription, persona, eventId) {
        this.inscription = inscription;
        this.persona = persona;
        this.eventId = eventId;
    }
    return Registro;
}());



/***/ }),

/***/ "./src/app/modelo/tracing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tracing; });
var Tracing = /** @class */ (function () {
    function Tracing(state, details, eventId) {
        this.state = state;
        this.details = details;
        this.eventId = eventId;
    }
    return Tracing;
}());



/***/ }),

/***/ "./src/app/modelo/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
// export class User{
//     constructor(
//        public _id:string,
//        public nombre:string,
//        public apellido:string,
//        public correo:string,
//        public password:string,
//        public role:string,
//        public image: string
//     ){}
// }
var User = /** @class */ (function () {
    function User(_id, name, active, password_hash, rol) {
        this._id = _id;
        this.name = name;
        this.active = active;
        this.password_hash = password_hash;
        this.rol = rol;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/modulo/add-modulo/add-modulo.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n.text-alert{\r\n  color:#dd4b39;\r\n}"

/***/ }),

/***/ "./src/app/modulo/add-modulo/add-modulo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n   <br>\r\n   <div class=\"\">\r\n      <div class=\"box box-primary\">\r\n\r\n         <div class=\"container \">\r\n            <div >\r\n               <h1>Registrar Modulo</h1>\r\n               <span>{{program.name}}</span>\r\n               <br>\r\n               <form (ngSubmit)=\"onSubmit()\" #addModulo=\"ngForm\" class=\"jumbotron\">\r\n                  <div class=\"form-group col-sm-8\">\r\n                     <label for=\"number\">Numero del Modulo</label>\r\n                     <input type=\"number\" class=\"form-control\" id=\"number\" [(ngModel)]=\"modulo.number\" name=\"number\" #number=\"ngModel\" required>\r\n                     <span *ngIf=\"!number.valid && number.touched\" class=\"text-alert\">\r\n                        *Numero del Modulo requerido.\r\n                     </span>\r\n                     <!--<div [hidden]=\"number?.valid || number?.pristine\" class=\"\">\r\n                              Numero Requerido\r\n                      </div>-->\r\n                  </div>\r\n                  <div class=\"form-group col-sm-8\">\r\n                     <label for=\"name\" class=\"control-label\">Nombre del Modulo</label>\r\n                     <input type=\"text\" pattern=\"[A-Za-zÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 ]{3,42}\" class=\"form-control\" id=\"name\" [(ngModel)]=\"modulo.name\" name=\"name\" #name=\"ngModel\" required />\r\n                     <span *ngIf=\"!name.valid && name.touched\" class=\"text-alert\">\r\n                        *Nombre del Modulo requerido.\r\n                     </span>\r\n                     <!--<div [hidden]=\"name?.valid || name?.pristine\" class=\"text-alert\">\r\n                           kjkn\r\n                       </div>-->\r\n                  </div>\r\n                  <div class=\"form-group col-sm-8\">\r\n                     <label for=\"content\" class=\" control-label\">Contenido</label>\r\n                     <input type=\"text\" class=\"form-control\" id=\"content\" [(ngModel)]=\"modulo.content\" name=\"content\" #content=\"ngModel\" required>\r\n                     <span *ngIf=\"!content.valid && content.touched\" class=\"text-alert\">\r\n                        *Contenido del Modulo requerido.\r\n                     </span>\r\n                  </div>\r\n                  <!-- <div class=\"form-group col-sm-8\">\r\n                     <label for=\"content\" class=\" control-label\">Programa</label>\r\n                     <input type=\"text\" class=\"form-control\" id=\"content\" [(ngModel)]=\"program._id\" name=\"content\" #content=\"ngModel\" required>\r\n                  </div> -->\r\n                  <!-- <div class=\"form-group col-sm-8\">\r\n                     <label for=\"program\">Programa</label>\r\n                     <select class=\"form-control\" id=\"program\" required [(ngModel)]=\"modulo.programs\" name=\"program\" #program=\"ngModel\">\r\n                        <option *ngFor=\"let program of programs\" [value]=\"program._id\">{{program.name}}</option>\r\n                     </select>\r\n                  </div> -->\r\n                  <div class=\"form-group col-sm-8\" style=\"text-align:center \">\r\n                     <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addModulo.form.valid\">Registrar</button>\r\n                     <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\r\n                  </div>\r\n               </form>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modulo/add-modulo/add-modulo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddModuloComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modelo_modulo__ = __webpack_require__("./src/app/modelo/modulo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddModuloComponent = /** @class */ (function () {
    function AddModuloComponent(_peticionesService, router, route) {
        this._peticionesService = _peticionesService;
        this.router = router;
        this.route = route;
        this.modulo = new __WEBPACK_IMPORTED_MODULE_3__modelo_modulo__["a" /* Modulo */](null, '', '', ''); //number, name, content, program
    }
    AddModuloComponent.prototype.ngOnInit = function () {
        this.queryProgramId();
        this.queryProgram();
    };
    AddModuloComponent.prototype.queryProgram = function () {
        var _this = this;
        this._peticionesService.getProgram(this.programId).subscribe(function (response) {
            _this.program = response;
            // console.log(this.program);
        }, function (error) {
            console.log(error);
        });
    };
    AddModuloComponent.prototype.queryProgramId = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.programId = params.id;
        });
    };
    AddModuloComponent.prototype.onSubmit = function () {
        this.modulo.programs = this.programId;
        this._peticionesService.addModulo(this.modulo).subscribe(function (result) {
            var esperado = result;
            // console.log(esperado);
            alert('El Modulo se Creo correctamente');
            window.history.back();
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            alert('Error al Crear Modulo verifique los datos');
        });
    };
    AddModuloComponent.prototype.cancel = function () {
        window.history.back();
    };
    AddModuloComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-modulo',
            template: __webpack_require__("./src/app/modulo/add-modulo/add-modulo.component.html"),
            styles: [__webpack_require__("./src/app/modulo/add-modulo/add-modulo.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], AddModuloComponent);
    return AddModuloComponent;
}());



/***/ }),

/***/ "./src/app/modulo/edit-modulo/edit-modulo.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modulo/edit-modulo/edit-modulo.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-wrapper\">\r\n    <div class=\"content-wrapper\">      \r\n      <section class=\"content\">\r\n        \r\n        <div class=\"md-form\">\r\n            <i class=\"fa fa-pencil prefix grey-text\"></i>\r\n            <label data-error=\"wrong\" data-success=\"right\" for=\"form8\">Numero del Modulo</label>\r\n            <input type=\"text\" id=\"form34\" class=\"form-control validate\" value=\"{{moduloNumber}}\" #number>\r\n        </div>\r\n        <br>\r\n        <div class=\"md-form\">\r\n            <i class=\"fa fa-pencil prefix grey-text\"></i>\r\n            <label data-error=\"wrong\" data-success=\"right\" for=\"form8\">Nombre del Modulo</label>\r\n            <input type=\"text\" id=\"form34\" class=\"form-control validate\" value=\"{{moduloName}}\" #name>\r\n        </div>\r\n        <br>\r\n        <div class=\"md-form\">\r\n          <i class=\"fa fa-comment prefix grey-text\"></i>\r\n          <label data-error=\"wrong\" data-success=\"right\" for=\"form8\">Contenido</label>\r\n          <textarea type=\"text\" class=\"md-textarea form-control\" rows=\"4\" value=\"{{moduloContent}}\" #content>Contenido</textarea>\r\n          <!--<input type=\"text\" id=\"form34\" class=\"form-control validate\" value=\"{{moduloContent}}\" #content>-->\r\n        </div>\r\n  \r\n        <div class=\"modal-footer d-flex justify-content-center\">\r\n            <button class=\"btn btn-success\" (click)=\"saveModulo()\">Guardar\r\n               <i class=\"fa fa-paper-plane-o ml-1\"></i>\r\n            </button>\r\n            <button class=\"btn btn-success\" (click)=\"cancel()\">Cancelar\r\n              <i class=\"fa fa-paper-plane-o ml-1\"></i>\r\n           </button>\r\n        </div>\r\n    \r\n      </section>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </section>"

/***/ }),

/***/ "./src/app/modulo/edit-modulo/edit-modulo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditModuloComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditModuloComponent = /** @class */ (function () {
    function EditModuloComponent(route, router, _peticionesService) {
        this.route = route;
        this.router = router;
        this._peticionesService = _peticionesService;
    }
    EditModuloComponent.prototype.ngOnInit = function () {
        this.queryModuloId();
        this.findModulo();
        //this.queryProgramId();
    };
    EditModuloComponent.prototype.queryModuloId = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.moduloId = params.id;
        });
    };
    EditModuloComponent.prototype.findModulo = function () {
        var _this = this;
        this._peticionesService.getModulo(this.moduloId).subscribe(function (result) {
            _this.modulo = result;
            _this.moduloNumber = _this.modulo.number;
            _this.moduloName = _this.modulo.name;
            _this.moduloContent = _this.modulo.content;
            //console.log(this.modulo.number)
            //console.log(this.modulo.name)
            //console.log(this.modulo.content)
        }, function (error) {
            console.log(error);
        });
    };
    EditModuloComponent.prototype.saveModulo = function () {
        //console.log(this.modulo);
        this.modulo.number = this.numberRef.nativeElement.value;
        this.modulo.name = this.nameRef.nativeElement.value;
        this.modulo.content = this.contentRef.nativeElement.value;
        if (this.numberRef.nativeElement.value == null || this.nameRef.nativeElement.value == '' || this.contentRef.nativeElement.value == '') {
            window.alert("Asegurese que todos los campos esten llenos");
        }
        else {
            this._peticionesService.updateModulo(this.modulo).subscribe(function (result) {
                var res = result;
                //    console.log(res);
                alert('Se Guardo correctamente la edicion');
            }, function (error) {
                console.log(error);
                alert('Error al Guardar verifique los datos');
            });
            window.history.back();
        }
    };
    //save() {
    //console.log(this.modulo);
    //this.close.nativeElement.click();
    //}
    //queryProgramId(){
    //this.route.params.subscribe(params => {
    //this.programId=params.id;
    //});
    //}
    EditModuloComponent.prototype.cancel = function () {
        // this.router.navigate(['home/modulos']);
        window.history.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('number'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], EditModuloComponent.prototype, "numberRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('name'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], EditModuloComponent.prototype, "nameRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], EditModuloComponent.prototype, "contentRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("close", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], EditModuloComponent.prototype, "close", void 0);
    EditModuloComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-modulo',
            template: __webpack_require__("./src/app/modulo/edit-modulo/edit-modulo.component.html"),
            styles: [__webpack_require__("./src/app/modulo/edit-modulo/edit-modulo.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */]])
    ], EditModuloComponent);
    return EditModuloComponent;
}());



/***/ }),

/***/ "./src/app/modulo/modulo.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modulo/modulo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n   <section class=\"content-header\">\r\n      <h1>\r\n         Modulos\r\n         <small>Lista</small>\r\n         {{program.name}}\r\n      </h1>\r\n   </section>\r\n   <section class=\"content\">\r\n      <a class=\"btn btn-primary a\" (click)=\"addModulo()\">Registrar Modulo</a>\r\n\r\n      <table class=\"table table-hover\">\r\n         <thead>\r\n            <tr>\r\n               <th>Nro</th>\r\n               <th>Nombre</th>\r\n               <th>Contenido</th>\r\n               <th colspan=\"3\">Ajustes</th>\r\n            </tr>\r\n         </thead>\r\n         <tbody>\r\n            <tr *ngFor=\"let modulo of modulos\">\r\n               <td>{{ modulo.number }}</td>\r\n               <td>{{ modulo.name }}</td>\r\n               <td>{{ modulo.content }}</td>\r\n               <td>\r\n                  <a class=\"btn btn-warning\" (click)=\"editModulo(modulo._id)\">EDITAR</a>\r\n               </td>\r\n            </tr>\r\n         </tbody>\r\n      </table>\r\n\r\n   </section>\r\n   <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/modulo/modulo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuloComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModuloComponent = /** @class */ (function () {
    function ModuloComponent(route, router, _peticionesService) {
        this.route = route;
        this.router = router;
        this._peticionesService = _peticionesService;
    }
    ModuloComponent.prototype.ngOnInit = function () {
        this.queryProgramId();
        this.queryProgram();
        this.findModulos();
    };
    ModuloComponent.prototype.queryProgram = function () {
        var _this = this;
        this._peticionesService.getProgram(this.programId).subscribe(function (response) {
            _this.program = response;
        }, function (error) {
            console.log(error);
        });
    };
    ModuloComponent.prototype.queryProgramId = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.programId = params.id;
        });
    };
    ModuloComponent.prototype.findModulos = function () {
        var _this = this;
        // console.log(this.programId)
        this._peticionesService.getModulos(this.programId).subscribe(function (result) {
            _this.modulos = result;
            // console.log(this.modulos)
        }, function (error) {
            console.log(error);
        });
    };
    ModuloComponent.prototype.editModulo = function (_id) {
        this.router.navigate(['/home/modulo/edit', _id]);
    };
    ModuloComponent.prototype.addModulo = function () {
        this.router.navigate(['/home/modulo/add', this.programId]);
    };
    ModuloComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modulo',
            template: __webpack_require__("./src/app/modulo/modulo.component.html"),
            styles: [__webpack_require__("./src/app/modulo/modulo.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]])
    ], ModuloComponent);
    return ModuloComponent;
}());



/***/ }),

/***/ "./src/app/programa/add-programa/add-programa.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n.ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n  \r\n.text-alert{\r\n    color:#dd4b39;\r\n}"

/***/ }),

/***/ "./src/app/programa/add-programa/add-programa.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n  <br>\r\n   <div class=\"content\">\r\n     <div class=\"box box-primary\">\r\n     \r\n       <div class=\"container \">\r\n           <div>\r\n               <h1>Registrar Programa</h1>\r\n               <br>\r\n               <form (ngSubmit)=\"onSubmit()\" #addProgram=\"ngForm\" class=\"jumbotron\">\r\n                   <div class=\"form-group col-sm-8\">\r\n                       <label for=\"name\" class=\"control-label\" >Nombre del Programa</label>\r\n                           <input type=\"text\" pattern=\"[a-zA-Z]{3,20}[ ]{0,1}[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\" class=\"form-control\" id=\"name\" \r\n                           [(ngModel)]=\"program.name\" name=\"name\" #name=\"ngModel\" required />\r\n                           <span *ngIf=\"!name.valid && name.touched\" class=\"text-alert\">\r\n                                   *Nombre de Programa requerido.\r\n                           </span>\r\n                       <!--<div [hidden]=\"name?.valid || name?.pristine\" class=\"text-alert\">\r\n                           kjkn\r\n                       </div>-->\r\n                   </div>\r\n                   <div class=\"form-group col-sm-8\">\r\n                       <label for=\"ubicacion\" class=\" control-label\">Detalles</label>\r\n                               <input type=\"text\" pattern=\"[a-zA-Z0-9 ]{3,150}\" class=\"form-control\" id=\"ubicacion\" \r\n                                   [(ngModel)]=\"program.details\" name=\"details\" #details=\"ngModel\" required >\r\n                               <span *ngIf=\"!details.valid && details.touched\" class=\"text-alert\">\r\n                                           *Detalles de Programa requerido.\r\n                               </span>\r\n                           <!--<div [hidden]=\"ubicacion?.valid || ubicacion?.pristine\" class=\"\">\r\n                               Ubicacion requerida\r\n                           </div>-->\r\n                   </div>\r\n                   <div class=\"form-group col-sm-8\" style=\"text-align:center \">\r\n                       <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addProgram.form.valid\">Registrar</button>\r\n                       <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\r\n                    </div>\r\n               </form>\r\n           </div>\r\n       </div>\r\n     </div> \r\n   </div>\r\n</div>"

/***/ }),

/***/ "./src/app/programa/add-programa/add-programa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProgramaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modelo_programa__ = __webpack_require__("./src/app/modelo/programa.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddProgramaComponent = /** @class */ (function () {
    function AddProgramaComponent(_peticionesService, router, route) {
        this._peticionesService = _peticionesService;
        this.router = router;
        this.route = route;
        this.program = new __WEBPACK_IMPORTED_MODULE_3__modelo_programa__["a" /* Programa */]('', ''); //name, details
    }
    AddProgramaComponent.prototype.ngOnInit = function () {
        this.query();
    };
    AddProgramaComponent.prototype.onSubmit = function () {
        var _this = this;
        // console.log(this.program);
        this._peticionesService.addProgram(this.program).subscribe(function (result) {
            var esperado = result;
            // console.log(esperado);
            alert('El Programa se Creo correctamente');
            _this.router.navigate(['home/programs']);
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            alert('Error al Crear Programa verifique los datos');
        });
    };
    AddProgramaComponent.prototype.query = function () { };
    AddProgramaComponent.prototype.cancel = function () {
        this.router.navigate(['home/programs']);
    };
    AddProgramaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-programa',
            template: __webpack_require__("./src/app/programa/add-programa/add-programa.component.html"),
            styles: [__webpack_require__("./src/app/programa/add-programa/add-programa.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], AddProgramaComponent);
    return AddProgramaComponent;
}());



/***/ }),

/***/ "./src/app/programa/edit-programa/edit-programa.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/programa/edit-programa/edit-programa.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"content-wrapper\">  \r\n    <div class=\"content\">\r\n      <div class=\"box box-primary\">\r\n\r\n          <section class=\"content\">\r\n      \r\n              <div class=\"md-form\">\r\n                  <i class=\"fa fa-pencil prefix grey-text\"></i>\r\n                  <label data-error=\"wrong\" data-success=\"right\" for=\"form8\">Nombre del Programa</label>\r\n                  <input type=\"text\" pattern=\"[a-zA-Z]{3,20}[ ]{0,1}[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\" id=\"form34\" class=\"form-control validate\" value=\"{{programName}}\" #name>\r\n              </div>\r\n              <br>\r\n              <div class=\"md-form\">\r\n                <i class=\"fa fa-comment prefix grey-text\"></i>\r\n                <label data-error=\"wrong\" data-success=\"right\" for=\"form8\">Detalles</label>\r\n                <textarea type=\"text\" pattern=\"[a-zA-Z0-9 ]{3,150}\" class=\"md-textarea form-control\" rows=\"4\" value=\"{{programDetails}}\" #details>Detalles</textarea>\r\n                <!--<input type=\"text\" id=\"form34\" class=\"form-control validate\" value=\"{{programDetails}}\" #details>-->\r\n              </div>\r\n        \r\n              <div class=\"modal-footer d-flex justify-content-center\">\r\n                  <button class=\"btn btn-success\" (click)=\"saveProgram()\">Guardar\r\n                     <i class=\"fa fa-paper-plane-o ml-1\"></i>\r\n                  </button>\r\n                  <button class=\"btn btn-success\" (click)=\"cancel()\">Cancelar\r\n                    <i class=\"fa fa-paper-plane-o ml-1\"></i>\r\n                 </button>\r\n              </div>\r\n          \r\n            </section>\r\n      </div>\r\n    </div>    \r\n   \r\n    <router-outlet></router-outlet>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/programa/edit-programa/edit-programa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProgramaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditProgramaComponent = /** @class */ (function () {
    function EditProgramaComponent(route, router, _peticionesService) {
        this.route = route;
        this.router = router;
        this._peticionesService = _peticionesService;
    }
    EditProgramaComponent.prototype.ngOnInit = function () {
        this.queryProgramId();
        this.findProgram();
    };
    EditProgramaComponent.prototype.queryProgramId = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.programId = params.id;
        });
    };
    EditProgramaComponent.prototype.findProgram = function () {
        var _this = this;
        this._peticionesService.getProgram(this.programId).subscribe(function (result) {
            _this.program = result;
            _this.programName = _this.program.name;
            _this.programDetails = _this.program.details;
            //console.log(this.program.name)
            //console.log(this.program.details)
        }, function (error) {
            console.log(error);
        });
    };
    EditProgramaComponent.prototype.saveProgram = function () {
        this.program.name = this.nameRef.nativeElement.value;
        this.program.details = this.detailsRef.nativeElement.value;
        if (this.nameRef.nativeElement.value == '' || this.detailsRef.nativeElement.value == '') {
            window.alert("Asegurese que todos los campos esten llenados");
        }
        else {
            //    console.log(this.program);
            this._peticionesService.updateProgram(this.program).subscribe(function (result) {
                //    console.log(result);
                var res = result;
                alert('Se Guardo correctamente la edicion');
                // window.history.back();          
            }, function (error) {
                console.log(error);
                alert('Error al Guardar verifique los datos');
            });
            this.router.navigate(['home/programs']);
        }
    };
    //save() {
    //console.log(this.program);
    //this.close.nativeElement.click();
    //}
    EditProgramaComponent.prototype.cancel = function () {
        this.router.navigate(['home/programs']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('name'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], EditProgramaComponent.prototype, "nameRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('details'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], EditProgramaComponent.prototype, "detailsRef", void 0);
    EditProgramaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-programa',
            template: __webpack_require__("./src/app/programa/edit-programa/edit-programa.component.html"),
            styles: [__webpack_require__("./src/app/programa/edit-programa/edit-programa.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */]])
    ], EditProgramaComponent);
    return EditProgramaComponent;
}());



/***/ }),

/***/ "./src/app/programa/programa.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/programa/programa.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n  <div class=\"content\">\r\n\r\n    <div class=\"box box-primary\">\r\n        <section class=\"content-header\">\r\n            <h1>\r\n               Programas\r\n               <small>Vigentes</small>\r\n            </h1>\r\n        </section>\r\n        <section class=\"content\">\r\n            <a class=\"btn btn-primary a\" (click)=\"addProgram()\">Registrar Programa</a>\r\n           \r\n         <table class=\"table table-hover\" >\r\n            <thead>\r\n               <tr>\r\n                  <th>Nombre</th>\r\n                  <th>Detalles</th>\r\n                  <th>Modulos</th>\r\n                  <th colspan=\"3\">Ajustes</th>\r\n               </tr>\r\n            </thead>\r\n            <tbody> \r\n               <tr *ngFor=\"let program of programs\">\r\n                  <td>{{ program.name }}</td>\r\n                  <td>{{ program.details }}</td>\r\n                  <td>\r\n                    <a class=\"btn btn-info\" (click)=\"send(program._id)\">VER MODULOS</a>\r\n                  </td>\r\n                  <td>\r\n                     <a class=\"btn btn-warning\" (click)=\"editProgram(program._id)\">EDITAR</a>\r\n                  </td>\r\n               </tr>\r\n            </tbody>\r\n         </table>\r\n         \r\n        </section>\r\n    </div>\r\n  </div>\r\n \r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/programa/programa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Identity } from '../services/global';
var ProgramaComponent = /** @class */ (function () {
    function ProgramaComponent(route, router, _peticionesService) {
        this.route = route;
        this.router = router;
        this._peticionesService = _peticionesService;
    }
    ProgramaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._peticionesService.getPrograms().subscribe(function (result) {
            _this.programs = result;
            //  console.log(result)
        }, function (error) {
            console.log(error);
        });
    };
    ProgramaComponent.prototype.send = function (_id) {
        this.router.navigate(['home/modulos', _id]);
    };
    ProgramaComponent.prototype.editProgram = function (_id) {
        this.router.navigate(['/home/program/edit', _id]);
    };
    ProgramaComponent.prototype.addProgram = function () {
        this.router.navigate(['/home/program/add']);
    };
    ProgramaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-programa',
            template: __webpack_require__("./src/app/programa/programa.component.html"),
            styles: [__webpack_require__("./src/app/programa/programa.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]])
    ], ProgramaComponent);
    return ProgramaComponent;
}());



/***/ }),

/***/ "./src/app/reporte-events/reporte-events.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n.ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n  \r\n.text-alert{\r\n    color:#dd4b39;\r\n}\r\n  \r\n.h{\r\n    padding-top: 50px ;\r\n}\r\n  \r\n.cabecera{\r\n    background-color: #367fa9; \r\n    color: #fff; \r\n    border-color: #2e6da4;\r\n    border-top-color: rgb(32, 77, 116);\r\n    border-right-color: rgb(32, 77, 116);\r\n    border-bottom-color: rgb(32, 77, 116);\r\n    border-left-color: rgb(32, 77, 116);\r\n}"

/***/ }),

/***/ "./src/app/reporte-events/reporte-events.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n  <br>\r\n  <div class=\"content\">\r\n      <div class=\"box box-primary\">\r\n          <div class=\"container \">\r\n             \r\n            <h3>Reporte Trimestral</h3>\r\n            <br>\r\n              <div>\r\n                <h1>Reporte Eventos</h1>\r\n               \r\n\r\n                <form (ngSubmit)=\"onSubmit()\" #addCartera=\"ngForm\" >\r\n                  <!-- <div class=\"form-group col-sm-8\">\r\n                    <label for=\"name\">Nombre de la Cartera</label>\r\n                    <input type=\"text\" pattern=\"[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ]{3,20}([ ]{0,1}[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ]{0,20}){0,2}\" class=\"form-control\" id=\"name\"\r\n                           required\r\n                           [(ngModel)]=\"carteraName\" name=\"name\"\r\n                          #name=\"ngModel\"\r\n                           >\r\n                          \r\n                    <div [hidden]=\"name?.valid || name?.pristine\"\r\n                         class=\"text-alert\">\r\n                      *El Nombre de la Cartera es obigatorio\r\n                    </div>\r\n                  </div> -->\r\n\r\n\r\n                  <div class=\"form-group col-sm-8\">\r\n                      <label data-error=\"wrong\" data-success=\"right\" for=\"form8\">\r\n                         <i class=\"fa fa-calendar prefix grey-text\"></i> Inicio</label>\r\n                      <input type=\"date\" id=\"form34\" class=\"form-control validate\" [(ngModel)]=\"fechaInicio\" name=\"fecha\" required #date>\r\n                   </div>\r\n\r\n                   <div class=\"form-group col-sm-8\">\r\n                      <label data-error=\"wrong\" data-success=\"right\" for=\"form8\">\r\n                         <i class=\"fa fa-calendar prefix grey-text\"></i> Fin</label>\r\n                      <input type=\"date\" id=\"form34\" class=\"form-control validate\" [(ngModel)]=\"fechaFin\" name=\"fecha\" required #date>\r\n                   </div>\r\n\r\n\r\n                  <div class=\"form-group col-sm-8\" style=\"text-align:center\">\r\n                      <button  type=\"submit\" class=\"btn btn-success\"  [disabled]=\"!addCartera.form.valid\" >Guardar</button>\r\n                      <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\r\n                  </div>\r\n                </form>\r\n\r\n              </div>\r\n              \r\n    \r\n            \r\n\r\n          </div>\r\n      </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"content\" *ngIf='lista_eventos.length>0'>\r\n      <div class=\"box box-primary\">\r\n          <!-- <div class=\"container \"> -->\r\n             \r\n           \r\n              \r\n              <section class=\"content\">\r\n                    \r\n                  <table class=\"table table-hover\">\r\n                    <thead>\r\n                        <tr class=\"text-info cabecera hover\">\r\n            \r\n                          <th><h4 class=\"text-center\">Nombre</h4></th>\r\n                          <th><h4 class=\"text-center\">Fecha de Inicio</h4></th>\r\n                          <th><h4 class=\"text-center\">Cupos</h4></th>\r\n                          <th><h4 class=\"text-center\">Programa</h4></th>\r\n                          <th><h4 class=\"text-center\">Estado</h4></th>\r\n                          \r\n                        </tr>\r\n                    </thead>\r\n            \r\n                    <tbody>\r\n            \r\n                        <tr *ngFor=\"let event of lista_eventos\" class=\"bg-info text-center\">\r\n                          <td>{{ event.name }}</td>\r\n                          <td>{{ event.date_start | date }}</td>\r\n                          <td>{{ event.cupos }}</td>\r\n                          <td>{{event.programa}}</td>\r\n                          <td>\r\n                              <a class=\"btn btn-primary\" (click)=\"reporteEvento(event._id)\">Personas</a>\r\n                          </td>\r\n                        </tr>\r\n                    </tbody>\r\n                  </table>\r\n              </section>\r\n            \r\n\r\n          <!-- </div> -->\r\n      </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"content\" *ngIf='showReporteEvento!=null'>\r\n        <div class=\"box box-primary\">\r\n            <!-- <div class=\"container \"> -->\r\n            \r\n            \r\n                \r\n                <section class=\"content\">\r\n                    \r\n                    <table class=\"table table-hover\">\r\n                    <thead>\r\n                        <tr class=\"text-info cabecera hover\">\r\n            \r\n                            <th><h4 class=\"text-center\">Nombre</h4></th>\r\n                            <th><h4 class=\"text-center\">Programa</h4></th>\r\n                            <th><h4 class=\"text-center\">Interesado</h4></th>\r\n                            <th><h4 class=\"text-center\">Confirmado</h4></th>\r\n                            <th><h4 class=\"text-center\">Inscrito</h4></th>\r\n                            <th><h4 class=\"text-center\">En Linea</h4></th>\r\n                            <th><h4 class=\"text-center\">Proximo Evento</h4></th>\r\n                            <th><h4 class=\"text-center\">Sin Interes</h4></th>                      \r\n                            \r\n                        </tr>\r\n                    </thead>\r\n            \r\n                    <tbody>\r\n            \r\n                        <tr  class=\"bg-info text-center\">\r\n                            <td>{{ showReporteEvento.eventName }}</td>\r\n                            <td>{{ showReporteEvento.programName }}</td>\r\n                            <td>{{ showReporteEvento.interesados }}</td>\r\n                            <td>{{showReporteEvento.confirmados}}</td>\r\n                            <td>{{showReporteEvento.inscritos}}</td>\r\n                            <td>{{showReporteEvento.enLinea}}</td>\r\n                            <td>{{showReporteEvento.proximoEvento}}</td>\r\n                            <td>{{showReporteEvento.sinInteres}}</td>\r\n                            \r\n                        </tr>\r\n                    </tbody>\r\n                    </table>\r\n                </section>\r\n            \r\n\r\n            <!-- </div> -->\r\n        </div>\r\n    </div>\r\n\r\n  \r\n\r\n</div>"

/***/ }),

/***/ "./src/app/reporte-events/reporte-events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReporteEventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global__ = __webpack_require__("./src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReporteEventsComponent = /** @class */ (function () {
    function ReporteEventsComponent(_peticionesService, router) {
        this._peticionesService = _peticionesService;
        this.router = router;
        this.lista_eventos = [];
    }
    ReporteEventsComponent.prototype.ngOnInit = function () {
    };
    ReporteEventsComponent.prototype.onSubmit = function () {
        this.lista_eventos = [];
        this.showReporteEvento = null;
        this.filterByDates(this.fechaInicio, this.fechaFin);
    };
    ReporteEventsComponent.prototype.filterByDates = function (fecha_ini, fecha_fin) {
        var _this = this;
        var fechas = {};
        fechas.fecha_ini = fecha_ini;
        fechas.fecha_fin = fecha_fin;
        fechas.identity = __WEBPACK_IMPORTED_MODULE_2__services_global__["b" /* Identity */];
        this._peticionesService.getEventsFilterByDates(fechas).subscribe(function (res) {
            _this.events = res;
            var _loop_1 = function (e) {
                var eventoItem = {};
                eventoItem.name = e.name;
                eventoItem.date_start = e.date_start;
                eventoItem.cupos = e.total;
                eventoItem._id = e._id;
                eventoItem.programaId = e.programs;
                _this._peticionesService.getProgram(e.programs).subscribe(function (result) {
                    _this.program = result;
                    eventoItem.programa = _this.program.name;
                    _this.lista_eventos.push(eventoItem);
                });
            };
            for (var _i = 0, _a = _this.events; _i < _a.length; _i++) {
                var e = _a[_i];
                _loop_1(e);
            }
        });
    };
    ReporteEventsComponent.prototype.cancel = function () {
        window.history.back();
    };
    ReporteEventsComponent.prototype.reporteEvento = function (eventId) {
        var _this = this;
        this.showReporteEvento = null;
        this._peticionesService.getReportEvent(eventId).subscribe(function (resp) {
            _this.showReporteEvento = resp;
            // console.log(this.showReporteEvento);
        });
    };
    ReporteEventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reporte-events',
            template: __webpack_require__("./src/app/reporte-events/reporte-events.component.html"),
            styles: [__webpack_require__("./src/app/reporte-events/reporte-events.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ReporteEventsComponent);
    return ReporteEventsComponent;
}());



/***/ }),

/***/ "./src/app/reports-ejecutivos/reports-ejecutivos.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reports-ejecutivos/reports-ejecutivos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n  <br>\r\n  <div class=\"content\">\r\n      <div class=\"box box-primary\">\r\n          <div class=\"container \">\r\n             \r\n            <h3>Reporte Trimestral</h3>\r\n            <br>\r\n            <h4>Desde {{fechaInicio|date}} hasta {{fechaFin|date}}</h4>\r\n\r\n\r\n            <div>\r\n              <!-- <form (ngSubmit)=\"onSubmit()\" #reporteEjecutivoForm=\"ngForm\">\r\n                <div class=\"form-group col-sm-8\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"programs\">Universidades</label>\r\n                          <br>           \r\n                          <label>\r\n                            <div *ngFor=\"let uni of listaUniversidades; let i = index\" >\r\n                                  <input type=\"checkbox\" name=\"uni{{i}}\" #univer=\"ngModel\" value=\"{{uni.id}}\" [(ngModel)]=\"uni.checked\" /> {{uni.name}}\r\n                            </div>\r\n                           </label>                                 \r\n                            <div [hidden]=\"univer?.valid || univer?.pristine\"\r\n                                class=\"text-alert\"> \r\n                            </div>\r\n                     </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"programs\">Medios de Contacto</label>\r\n                          <br>        \r\n                            <label>\r\n                                <div *ngFor=\"let mc of listaMediosContacto; let i = index\" >\r\n                                    <input type=\"checkbox\" name=\"mc{{i}}\" #mediosC=\"ngModel\" value=\"{{mc.id}}\" [(ngModel)]=\"mc.checked\" /> {{mc.name}}\r\n                                </div>\r\n                              </label>                        \r\n                        <div [hidden]=\"mediosC?.valid || mediosC?.pristine\"\r\n                            class=\"text-alert\">\r\n\r\n                        </div>\r\n                    </div>\r\n    \r\n                  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!reporteEjecutivoForm.form.valid\">Buscar</button>\r\n                  <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\r\n                  <br>\r\n                  <br>\r\n                </div>\r\n              </form> -->\r\n\r\n\r\n\r\n\r\n              <table class=\"table table-hover\" >\r\n                <thead >\r\n                   <tr>\r\n                      <th>Nombre</th>\r\n                      <th>Cartera</th>\r\n                      <th>Total Registrados</th>\r\n                      <th>Total Inscritos</th>\r\n                     \r\n                   </tr>\r\n                </thead>\r\n                <tbody> \r\n                   <tr *ngFor=\"let i of listaReporteUsuarios\">\r\n                      <th>{{ i.user }}</th>\r\n                      <th>{{i.cartera}}</th>\r\n                      <td>{{ i.cantidadRegistrados }}</td>\r\n                      <td>{{i.cantidadInscritos}}</td>\r\n                     \r\n                   </tr>\r\n                </tbody>\r\n             </table>\r\n    \r\n            </div>\r\n\r\n          </div>\r\n      </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/reports-ejecutivos/reports-ejecutivos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsEjecutivosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global__ = __webpack_require__("./src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportsEjecutivosComponent = /** @class */ (function () {
    function ReportsEjecutivosComponent(_peticionesService, router) {
        this._peticionesService = _peticionesService;
        this.router = router;
        this.listaRegistrados = [];
        this.listaInscritos = [];
        this.fechaFin = new Date();
        this.fechaInicio = new Date(this.fechaFin.getFullYear(), this.fechaFin.getMonth() - 3, this.fechaFin.getDay());
        this.listaReporteUsuarios = [];
    }
    ReportsEjecutivosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._peticionesService.getOneUser(__WEBPACK_IMPORTED_MODULE_2__services_global__["b" /* Identity */]._id).subscribe(function (response) {
            _this.currentUser = response;
            _this._peticionesService.getAllEjecutivosOfSucursal(__WEBPACK_IMPORTED_MODULE_2__services_global__["b" /* Identity */]).subscribe(function (res) {
                _this.listaUsersOfOffices = res;
                var _loop_1 = function (u) {
                    // console.log(u)
                    var item = {};
                    item.user = u.userName;
                    item.cartera = u.carteraName;
                    _this._peticionesService.reporteTrimestralInscritosEjecutivos(u).subscribe(function (reporte) {
                        _this.listaInscritosReturned = reporte;
                        _this.listaInscritos = _this.listaInscritosReturned;
                        item.cantidadInscritos = _this.listaInscritos.length;
                        _this._peticionesService.reporteTrimestralEjecutivos(u).subscribe(function (res) {
                            _this.listaRegistradosReturned = res;
                            _this.listaRegistrados = _this.listaRegistradosReturned;
                            item.cantidadRegistrados = _this.listaRegistrados.length;
                            _this.listaReporteUsuarios.push(item);
                        });
                    });
                };
                // console.log(this.listaUsersOfOffices);
                for (var _i = 0, _a = _this.listaUsersOfOffices; _i < _a.length; _i++) {
                    var u = _a[_i];
                    _loop_1(u);
                }
            });
        });
        // console.log(this.listaReporteUsuarios);
    };
    ReportsEjecutivosComponent.prototype.onSubmit = function () {
    };
    ReportsEjecutivosComponent.prototype.cancel = function () {
    };
    ReportsEjecutivosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reports-ejecutivos',
            template: __webpack_require__("./src/app/reports-ejecutivos/reports-ejecutivos.component.html"),
            styles: [__webpack_require__("./src/app/reports-ejecutivos/reports-ejecutivos.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_peticiones_service__["a" /* PeticionesService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ReportsEjecutivosComponent);
    return ReportsEjecutivosComponent;
}());



/***/ }),

/***/ "./src/app/segmentation/list-person-program-user/list-person-program-user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/segmentation/list-person-program-user/list-person-program-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n  <div class=\"content\">\r\n\r\n    <div class=\"box box-primary\">\r\n\r\n        <section class=\"content\">\r\n            <div>     \r\n                <ol class=\"breadcrumb\">\r\n                    <!-- <li><a class=\"btn btn-primary\" [routerLink]=\"['/home/persons/add']\"><i class=\"fa fa-book\"></i>Registrar Persona</a></li>\r\n                    <li><app-control-asistance></app-control-asistance></li> -->\r\n                </ol>\r\n            </div> \r\n           \r\n           <table class=\"table\">\r\n                 <th>Filtros Personas</th> \r\n           </table>\r\n          \r\n             <div>\r\n            <!-- <div class=\"filter-wrap\">\r\n              <div class=\"col-lg-1\">Buscar:</div>\r\n              <input [(ngModel)]=\"searchText\" placeholder=\"Nombre Persona\" class=\"filter-input\">\r\n              <span class=\"filter-clear\" *ngIf=\"searchText.length>0\" (click)=\"clearFilter()\">X</span>\r\n            </div> -->\r\n      \r\n      \r\n          </div>\r\n           <table class=\"table table-hover\" >\r\n              <thead >\r\n                 <tr>\r\n                    <th>Nombre</th>\r\n                    <th>Apellido</th>\r\n                    <th>Telefono</th>\r\n                    <th>Whatsapp Group</th>\r\n                    <th>Ciudad</th>\r\n                    <th>Ocupacion</th>\r\n                    <th colspan=\"2\">Opciones</th>\r\n                 </tr>\r\n              </thead>\r\n              <tbody> \r\n                 <tr *ngFor=\"let i of listado_personas\">\r\n                    <td>{{ i.first_name }}</td>\r\n                    <th>{{i.last_name}}</th>\r\n                    <td>{{ i.cellphone }}</td>\r\n                    <td>{{i.whatsapp_group}}</td>\r\n                    <td>{{i.city}}</td>\r\n                    <td>{{ i.ocupation }}</td>\r\n                   \r\n                    <!-- <td>\r\n                       <a class=\"btn btn-primary\" (click)=\"edit(i._id)\">EDITAR</a>\r\n                         </td> -->\r\n                 </tr>\r\n              </tbody>\r\n           </table>\r\n           \r\n        </section>\r\n    </div>\r\n  </div>\r\n \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/segmentation/list-person-program-user/list-person-program-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPersonProgramUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_persona_service__ = __webpack_require__("./src/app/services/persona.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global__ = __webpack_require__("./src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListPersonProgramUserComponent = /** @class */ (function () {
    function ListPersonProgramUserComponent(router, route, _personaService, _peticionesService) {
        this.router = router;
        this.route = route;
        this._personaService = _personaService;
        this._peticionesService = _peticionesService;
        this.listado_personas = [];
        this.listadoConFiltro = [];
        this.intereses = [];
        this.personasInteresadasParaLaConsulta = {};
        this.personasConfirmadasParaLaConsulta = {};
        this.personasProximoeventoParaLaConsulta = {};
    }
    ListPersonProgramUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.programId = params.id;
            ///////por si se quiere en distintos botones
            // this.programId=params.id.split('-')[0];
            // this.interesState=params.id.split('-')[1];
            ///////////////////
            ////////////
            //  0 interesados
            //  1 en duda
            //  2 confirmados
            //  3 isncritos
            //  4 enlinea
            //  5 proximo evento 
            //  6 sin interes
            //////// 
            /////confirmadas////
            _this.personasConfirmadasParaLaConsulta.programId = _this.programId;
            _this.personasConfirmadasParaLaConsulta.state = 2;
            _this.personasConfirmadasParaLaConsulta.userId = __WEBPACK_IMPORTED_MODULE_4__services_global__["b" /* Identity */]._id;
            ////interesadas////
            _this.personasInteresadasParaLaConsulta.programId = _this.programId;
            _this.personasInteresadasParaLaConsulta.state = 0;
            _this.personasInteresadasParaLaConsulta.userId = __WEBPACK_IMPORTED_MODULE_4__services_global__["b" /* Identity */]._id;
            /////proximo evento///
            _this.personasProximoeventoParaLaConsulta.programId = _this.programId;
            _this.personasProximoeventoParaLaConsulta.state = 5;
            _this.personasProximoeventoParaLaConsulta.userId = __WEBPACK_IMPORTED_MODULE_4__services_global__["b" /* Identity */]._id;
        });
        this.findPersonOfProgramByUser();
    };
    ListPersonProgramUserComponent.prototype.findPersonOfProgramByUser = function () {
        var _this = this;
        this._peticionesService.getPersonsOfProgramByUser(this.personasConfirmadasParaLaConsulta).subscribe(function (resultConfirmados) {
            _this.listado_personasConfirmadas = resultConfirmados;
            //  console.log(this.listado_personasConfirmadas);
            for (var _i = 0, _a = _this.listado_personasConfirmadas; _i < _a.length; _i++) {
                var personasConfirmadas = _a[_i];
                _this.listado_personas.push(personasConfirmadas);
            }
            _this._peticionesService.getPersonsOfProgramByUser(_this.personasInteresadasParaLaConsulta).subscribe(function (resultInteresadas) {
                _this.listado_personasInteresadas = resultInteresadas;
                // console.log(this.listado_personasInteresadas);
                for (var _i = 0, _a = _this.listado_personasInteresadas; _i < _a.length; _i++) {
                    var personasInteresadas = _a[_i];
                    _this.listado_personas.push(personasInteresadas);
                }
                _this._peticionesService.getPersonsOfProgramByUser(_this.personasProximoeventoParaLaConsulta).subscribe(function (resultProximoEvento) {
                    _this.listado_personasProximoEvento = resultProximoEvento;
                    for (var _i = 0, _a = _this.listado_personasProximoEvento; _i < _a.length; _i++) {
                        var personasProximoEvento = _a[_i];
                        _this.listado_personas.push(personasProximoEvento);
                    }
                });
            });
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    ListPersonProgramUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list-person-program-user',
            template: __webpack_require__("./src/app/segmentation/list-person-program-user/list-person-program-user.component.html"),
            styles: [__webpack_require__("./src/app/segmentation/list-person-program-user/list-person-program-user.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_persona_service__["a" /* PersonaService */], __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__services_persona_service__["a" /* PersonaService */],
            __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]])
    ], ListPersonProgramUserComponent);
    return ListPersonProgramUserComponent;
}());



/***/ }),

/***/ "./src/app/segmentation/segmentation.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/segmentation/segmentation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n  <div class=\"content\">\r\n\r\n    <div class=\"box box-primary\">\r\n\r\n        <section class=\"content-header\">\r\n            <h1>\r\n               Segmentacion Programas\r\n               <small>Vigentes</small>\r\n            </h1>\r\n        </section>\r\n        <section class=\"content\">\r\n            <!-- <a class=\"btn btn-primary a\" (click)=\"addProgram()\">Registrar Programa</a> -->\r\n           \r\n         <table class=\"table table-hover\" >\r\n            <thead>\r\n               <tr>\r\n                  <th>Nombre</th>\r\n                  <th>Detalles</th>\r\n                  <th>Modulos</th>\r\n                  <th colspan=\"3\">Ajustes</th>\r\n               </tr>\r\n            </thead>\r\n            <tbody> \r\n               <tr *ngFor=\"let program of programs\">\r\n                  <td>{{ program.name }}</td>\r\n                  <td>{{ program.details }}</td>\r\n                   <td>\r\n                    <a class=\"btn btn-info\" (click)=\"listPersonInteresados(program._id)\"> interesados-ProximoEvento-confirmados</a>\r\n      \r\n      \r\n                   </td>\r\n                  <!-- <td>\r\n                    <a class=\"btn btn-info\" (click)=\"send(program._id)\">VER MODULOS</a>\r\n                  </td>\r\n                  <td>\r\n                     <a class=\"btn btn-warning\" (click)=\"editProgram(program._id)\">EDITAR</a>\r\n                  </td> -->\r\n               </tr>\r\n            </tbody>\r\n         </table>\r\n         \r\n        </section>\r\n    </div>\r\n  </div>\r\n  \r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/segmentation/segmentation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SegmentationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_persona_service__ = __webpack_require__("./src/app/services/persona.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__ = __webpack_require__("./src/app/services/peticiones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { FilterPipe } from "./filter.pipe";
var SegmentationComponent = /** @class */ (function () {
    function SegmentationComponent(router, route, _personaService, _peticionesService) {
        this.router = router;
        this.route = route;
        this._personaService = _personaService;
        this._peticionesService = _peticionesService;
    }
    SegmentationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._peticionesService.getPrograms().subscribe(function (result) {
            _this.programs = result;
            //  console.log(result)
        }, function (error) {
            console.log(error);
        });
    };
    SegmentationComponent.prototype.listPersonInteresados = function (_id) {
        //  var idInteresados=_id+'-'+'0';
        // this.router.navigate(['home/segmentacion/list/', idInteresados]);
        this.router.navigate(['home/segmentacion/list/', _id]);
    };
    SegmentationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-segmentation',
            template: __webpack_require__("./src/app/segmentation/segmentation.component.html"),
            styles: [__webpack_require__("./src/app/segmentation/segmentation.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_persona_service__["a" /* PersonaService */], __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__services_persona_service__["a" /* PersonaService */],
            __WEBPACK_IMPORTED_MODULE_2__services_peticiones_service__["a" /* PeticionesService */]])
    ], SegmentationComponent);
    return SegmentationComponent;
}());

////////////
//  0 interesados
//  1 en duda
//  2 confirmados
//  3 isncritos
//  4 enlinea
//  5 proximo evento 
//  6 sin interes
//////// 


/***/ }),

/***/ "./src/app/services/global.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GLOBAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Roles; });
/* unused harmony export CarteraS */
var GLOBAL = {
    url: 'http://localhost/'
};
// export var LogIn = {
//    token: ''
// }
var Identity = {
    _id: '',
    name: '',
    active: null,
    password_hash: '',
    rol: '',
};
var Roles = [
    {
        _id: '5aea1b1f60896154cd282fb4',
        name: 'Admin'
    },
    {
        _id: '5aea1b1f60896154cd282fb5',
        name: 'Ejecutivo'
    },
    {
        _id: '5aea36445f00ed76e827868b',
        name: 'Gerente'
    }
];
var CarteraS = {
    name: '',
    user: ''
};


/***/ }),

/***/ "./src/app/services/persona.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PersonaService = /** @class */ (function () {
    function PersonaService() {
        this.nombre_persona = 'nombre de la persona';
    }
    PersonaService.prototype.prueba = function (nombre_persona) {
        return nombre_persona;
    };
    PersonaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], PersonaService);
    return PersonaService;
}());



/***/ }),

/***/ "./src/app/services/peticiones.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeticionesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global__ = __webpack_require__("./src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PeticionesService = /** @class */ (function () {
    function PeticionesService(
        // private _httpClient: HttpClient,
        _http) {
        // this.url = "https://jsonplaceholder.typicode.com/users";
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_1__global__["a" /* GLOBAL */].url;
    }
    PeticionesService.prototype.getEvents = function () {
        return this._http.get(this.url + 'Mkt_events').map(function (res) { return res; });
    };
    PeticionesService.prototype.getEvent = function (id) {
        return this._http.get(this.url + 'Mkt_events/' + id).map(function (res) { return res; });
    };
    //prueba
    PeticionesService.prototype.getEventInscriptions = function (id) {
        return this._http.get(this.url + 'Mkt_events/inscriptions/' + id).map(function (res) { return res; });
    };
    PeticionesService.prototype.getTrimestral = function () {
        return this._http.get(this.url + 'Mkt_events/trimestral').map(function (res) { return res; });
    };
    PeticionesService.prototype.addProgram = function (program) {
        var body = JSON.stringify(program);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_programs/add', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.getUni = function () {
        return this._http.get(this.url + 'Mkt_list/').map(function (res) { return res; });
    };
    PeticionesService.prototype.getPrograms = function () {
        return this._http.get(this.url + 'Mkt_programs').map(function (res) { return res; });
    };
    PeticionesService.prototype.getProgram = function (_id) {
        return this._http.get(this.url + 'Mkt_programs/' + _id).map(function (res) { return res; });
    };
    PeticionesService.prototype.addModulo = function (modulo) {
        var body = JSON.stringify(modulo);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_modules/add', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.getModulos = function (idProgram) {
        console.log(idProgram);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.get(this.url + 'Mkt_modules/lista/' + idProgram, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.getEventModuls = function (eventId) {
        console.log(eventId);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.get(this.url + 'Mkt_modules/eventoModuls/' + eventId, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.getModulo = function (_id) {
        return this._http.get(this.url + 'Mkt_modules/' + _id).map(function (res) { return res; });
    };
    //    getIdProgram(nomProgram){
    //     let body = JSON.stringify(nomProgram);
    //      var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    //       return this._http.post(this.url + 'Mkt_programs/id', body, { headers: headers }).map((res: Response) => res);
    //    }
    PeticionesService.prototype.addEvent = function (event) {
        var body = JSON.stringify(event);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_events', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.addPerson = function (person) {
        var body = JSON.stringify(person);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_persons', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.addInscriptPerson = function (registro) {
        var body = JSON.stringify(registro);
        var idEvent = registro.idEvent;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_events/inscriptPerson/' + idEvent, body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.getPerson = function (_id) {
        return this._http.get(this.url + 'Mkt_persons/' + _id).map(function (res) { return res; });
    };
    PeticionesService.prototype.getCi = function (ci) {
        return this._http.get(this.url + 'Mkt_persons/existCi/' + ci).map(function (res) { return res; });
    };
    PeticionesService.prototype.getPersons = function () {
        return this._http.get(this.url + 'Mkt_persons').map(function (res) { return res; });
    };
    PeticionesService.prototype.getEventConfirmed = function (id) {
        return this._http.get(this.url + 'Mkt_events/' + id).map(function (res) { return res; });
    };
    PeticionesService.prototype.getCarteras = function () {
        return this._http.get(this.url + 'Mkt_carteras').map(function (res) { return res; });
    };
    PeticionesService.prototype.getCartera = function (_id) {
        return this._http.get(this.url + 'Mkt_carteras/' + _id).map(function (res) { return res; });
    };
    PeticionesService.prototype.getCarterasLibres = function () {
        return this._http.get(this.url + 'Mkt_carteras/libres').map(function (res) { return res; });
    };
    PeticionesService.prototype.crearCartera = function (cartera) {
        var body = JSON.stringify(cartera);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_carteras/guardar', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.getFacilitadores = function () {
        return this._http.get(this.url + 'Mkt_facilitators').map(function (res) { return res; });
    };
    PeticionesService.prototype.getFacilitador = function (id) {
        return this._http.get(this.url + 'Mkt_facilitators/' + id).map(function (res) { return res; });
    };
    PeticionesService.prototype.addFacilitador = function (user) {
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_facilitators/register', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.updateFacilitador = function (facilitador_object) {
        console.log(facilitador_object);
        var body = JSON.stringify(facilitador_object);
        var idfacilitador = facilitador_object._id;
        // console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url + 'Mkt_facilitators/update/' + idfacilitador, body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.addUser = function (user) {
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_users/register', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.getUser = function () {
        return this._http.get(this.url + 'Mkt_users').map(function (res) { return res; });
    };
    PeticionesService.prototype.getOneUser = function (_id) {
        return this._http.get(this.url + 'Mkt_users/' + _id).map(function (res) { return res; });
    };
    PeticionesService.prototype.deleteUser = function (_id) {
        return this._http.delete(this.url + 'Mkt_users/' + _id).map(function (res) { return res; });
    };
    PeticionesService.prototype.getMejorEjecutivo = function (_id) {
        return this._http.get(this.url + 'Mkt_events/mejorEjecutivo/' + _id).map(function (res) { return res; });
    };
    PeticionesService.prototype.updatePerson = function (person) {
        var body = JSON.stringify(person);
        var idPerson = person._id;
        // console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url + 'Mkt_persons/' + idPerson, body, { headers: headers }).map(function (res) { return res; });
    };
    //return this._http.post(this.url + 'Mkt_events/edit',body,{headers : headers}).map((res:Response)=>res);
    //.catch(this.handleError);
    PeticionesService.prototype.updatePersonOcupation = function (descOcupation, id) {
        var body = JSON.stringify(descOcupation);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url + 'Mkt_persons/ocupation/' + id, body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.getPersonCartera = function (_id) {
        // console.log(_id+"desde peticionesservice")
        return this._http.get(this.url + 'Mkt_carteras/persons/' + _id).map(function (res) { return res; });
        //  return this._http.get(this.url+'cartera/listPersonsCartera/'+_id).map((res: Response)=> res);
    };
    PeticionesService.prototype.getCarteraFromUserId = function (id) {
        // console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.get(this.url + 'Mkt_carteras/otro/' + id, { headers: headers }).map(function (res) { return res; });
    };
    // updateUsers (user: User): Observable<null> {
    //   return this.http.put(this.usersUrl, user, httpOptions).pipe(
    //     tap(_ => this.log(`updated user id=${user.id}`)),
    //     catchError(this.handleError<any>('updateUser'))
    //   );
    // }
    PeticionesService.prototype.updateCartera = function (cartera_object) {
        console.log(cartera_object);
        var body = JSON.stringify(cartera_object);
        var idCartera = cartera_object._id;
        // console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url + 'Mkt_carteras/' + idCartera, body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.addCartera = function (cartera) {
        var body = JSON.stringify(cartera);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_carteras/register', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.getRole = function (id) {
        return this._http.get(this.url + 'Mkt_users/rolName/' + id).map(function (res) { return res; });
    };
    PeticionesService.prototype.updateUser = function (user_object) {
        console.log(user_object);
        var body = JSON.stringify(user_object);
        var idUser = user_object._id;
        //console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url + 'Mkt_users/' + idUser, body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.updateProgram = function (program_object) {
        //   console.log(program_object, 'test');
        var body = JSON.stringify(program_object);
        var idProgram = program_object._id;
        // console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url + 'Mkt_programs/edit/' + idProgram, body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.updateModulo = function (modulo_object) {
        console.log(modulo_object);
        var body = JSON.stringify(modulo_object);
        var idModulo = modulo_object._id;
        // console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url + 'Mkt_modules/edit/' + idModulo, body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.getSucursales = function () {
        return this._http.get(this.url + 'Mkt_offices').map(function (res) { return res; });
    };
    PeticionesService.prototype.addCorrelative = function (correlative) {
        var body = JSON.stringify(correlative);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_correlatives/add', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.getSucursal = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.get(this.url + 'Mkt_offices/' + id, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.getRoles = function () {
        return this._http.get(this.url + 'Mkt_roles').map(function (res) { return res; });
    };
    ///////////////////////////////////////////////////////////////////////////7
    PeticionesService.prototype.addAssitance = function (lists) {
        var body = JSON.stringify(lists);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_lists', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.getList = function (id) {
        return this._http.get(this.url + 'Mkt_lists/person/' + id).map(function (res) { return res; });
    };
    ////////////////////////////////////////////// sistema MARKETING////////////////////////
    PeticionesService.prototype.addPersonFromWhatsapp = function (person) {
        var body = JSON.stringify(person);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_persons/addFromWhatsapp', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.postFile = function (fileToUpload, cartera, interes) {
        var endpoint = this.url + 'Mkt_persons/upload';
        var formData = new FormData();
        formData.append('fileKey', fileToUpload, fileToUpload.name);
        formData.append('body', JSON.stringify({ cartera: cartera, interes: interes }));
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]();
        /** In Angular 5, including the header Content-Type can invalidate your request */
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        // var body={formData:formData,test:'aaaaaaaaaaa'};
        // let options = new RequestOptions({ headers: headers });
        return this._http
            .post(endpoint, formData, { headers: headers })
            .map(function () { return true; });
        // .catch((e) => Observable.throw(e))
        // .subscribe();
    };
    PeticionesService.prototype.getPersonsOfCartera = function (cartera) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.get(this.url + 'Mkt_persons/personsOfCartera/' + cartera, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.getPersonsOfProgramByUser = function (ObjID) {
        var body = JSON.stringify(ObjID);
        //console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_persons/personsOfProgramByUserId/', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.getAllEvents = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.get(this.url + 'Mkt_events/all/' + id, { headers: headers }).map(function (res) { return res; });
        // return this._http.get(this.url + 'Mkt_events/all').map((res: Response) => res);
    };
    PeticionesService.prototype.getAllEventsActive = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.get(this.url + 'Mkt_events/getAllEventsActive/' + id, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.setInteresOfPersonFromEvent = function (ObjId) {
        var body = JSON.stringify(ObjId);
        //console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_persons/setInteres/', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.getInteresOfPersonaWithInteres = function (ObjId) {
        var body = JSON.stringify(ObjId);
        //console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_persons/getInteres/', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.getInteresOfPerson = function (ObjID) {
        var body = JSON.stringify(ObjID);
        //console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_persons/getInteres/', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.addInteresToEvents = function (ObjID) {
        var body = JSON.stringify(ObjID);
        //console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_events/addInteresToEvents/', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.saveBatchWhatsappNumbers = function (Obj) {
        var body = JSON.stringify(Obj);
        //console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_persons/BatchWhatsappNumbers/', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.getPersonasInteresWithEvent = function (idEvent) {
        var body = JSON.stringify(idEvent);
        //console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_events/getPersonasInteresWithEvent/', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.getPersonFilterInteresWithEvent = function (eventInteres) {
        var body = JSON.stringify(eventInteres);
        //console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_events/getPersonFilterInteresWithEvent/', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.getPersonasInteresWithEventByCartera = function (eventInteres) {
        var body = JSON.stringify(eventInteres);
        //console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_events/getPersonasInteresWithEventByCartera/', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.getPersonFilterInteresWithEventByCartera = function (eventInteres) {
        var body = JSON.stringify(eventInteres);
        //console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_events/getPersonFilterInteresWithEventByCartera/', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.getCurrentRol = function (idendity) {
        var body = JSON.stringify(idendity);
        //console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_roles/current/', body, { headers: headers }).map(function (res) { return res; });
    };
    ///////////////////////////////////////////////////////////////////////////////////////////
    // addTracing(personId, trac) {
    //     let body = JSON.stringify(trac);
    //     var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    //     return this._http.put(this.url + 'Mkt_persons/tracing/' + personId, body, { headers: headers }).map((res: Response) => res);
    // }
    PeticionesService.prototype.addNewTracing = function (personId, trac) {
        var body = JSON.stringify(trac);
        //console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url + 'Mkt_persons/newTracing/' + personId, body, { headers: headers }).map(function (res) { return res; });
    };
    ///////////////////////////////////////////////////////////////////////////////
    PeticionesService.prototype.filterUniversidadMedio = function (obj) {
        var body = JSON.stringify(obj);
        //console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_persons/filterUniversidadMedio/', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.getAllEjecutivosOfSucursal = function (identity) {
        var body = JSON.stringify(identity);
        //console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_users/getAllEjecutivosOfSucursal/', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.getPersonsShareCarteraEvent = function (objt) {
        var body = JSON.stringify(objt);
        //console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_persons/getPersonsShareCarteraEvent/', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.addNewPerson = function (registro) {
        var body = JSON.stringify(registro);
        //console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_persons/addNewPerson/', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.reporteTrimestralEjecutivos = function (objt) {
        var body = JSON.stringify(objt);
        //console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_users/reporteTrimestralEjecutivos/', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.reporteTrimestralInscritosEjecutivos = function (objt) {
        var body = JSON.stringify(objt);
        //console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_users/reporteTrimestralInscritosEjecutivos/', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.getEjecutivoToEdit = function (ejecutivoId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.get(this.url + 'Mkt_users/getEjecutivoToEdit/' + ejecutivoId, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.addUniversidad = function (uni) {
        var body = JSON.stringify(uni);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_list/add/university', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.addCarrera = function (carr) {
        var body = JSON.stringify(carr);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_list/add/carrera', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.reasignarCartera = function (ObjId) {
        var body = JSON.stringify(ObjId);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_carterasreasignarCartera/', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.getEventsOfSucursal = function (identityId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.get(this.url + 'Mkt_events/getEventsOfSucursal/' + identityId, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.getEventsFilterByDates = function (fechas) {
        var body = JSON.stringify(fechas);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_events/getEventsFilterByDates/', body, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.getReportEvent = function (eventId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.get(this.url + 'Mkt_events/getReportEvent/' + eventId, { headers: headers }).map(function (res) { return res; });
    };
    PeticionesService.prototype.cerrarEvento = function (id) {
        return this._http.get(this.url + 'Mkt_events/cerrarEvento/' + id).map(function (res) { return res; });
    };
    PeticionesService.prototype.getCarrera = function (id) {
        return this._http.get(this.url + 'Mkt_list/getCarrera/' + id).map(function (res) { return res; });
    };
    PeticionesService.prototype.getUniversidad = function (id) {
        return this._http.get(this.url + 'Mkt_list/getUniversidad/' + id).map(function (res) { return res; });
    };
    PeticionesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], PeticionesService);
    return PeticionesService;
}());



/***/ }),

/***/ "./src/app/services/sucursal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SucursalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global__ = __webpack_require__("./src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Router } from '@angular/router';
//import { AsyncLocalStorage } from 'angular-async-local-storage';
var SucursalService = /** @class */ (function () {
    function SucursalService(
        //private _router: Router,
        //protected localStorage: AsyncLocalStorage,
        _http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_1__global__["a" /* GLOBAL */].url;
    }
    SucursalService.prototype.getSucursales = function () {
        return this._http.get(this.url + 'Mkt_offices').map(function (res) { return res; });
    };
    SucursalService.prototype.getSucursal = function (id) {
        return this._http.get(this.url + 'Mkt_offices/' + id).map(function (res) { return res; });
    };
    SucursalService.prototype.addOffice = function (office) {
        var body = JSON.stringify(office);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'Mkt_offices/add', body, { headers: headers }).map(function (res) { return res; });
    };
    SucursalService.prototype.getCompanys = function () {
        return this._http.get(this.url + 'Mkt_company').map(function (res) { return res; });
    };
    SucursalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], SucursalService);
    return SucursalService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global__ = __webpack_require__("./src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_async_local_storage__ = __webpack_require__("./node_modules/angular-async-local-storage/angular-async-local-storage.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Observable } from 'rxjs/Observable';



var UserService = /** @class */ (function () {
    function UserService(_router, localStorage, 
        // private _http: Http
        _http) {
        this._router = _router;
        this.localStorage = localStorage;
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_4__global__["a" /* GLOBAL */].url;
    }
    UserService.prototype.register = function () {
        return "texto desde el servicio usuario";
    };
    //metodo para autenticar el usuario
    UserService.prototype.signup = function (user_to_login, gettoken) {
        if (gettoken === void 0) { gettoken = null; }
        if (gettoken != null) {
            user_to_login.gettoken = gettoken;
        }
        var params = JSON.stringify(user_to_login);
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'login', params, { headers: headers });
    };
    UserService.prototype.signin = function (user_to_login) {
        var body = JSON.stringify(user_to_login); //get interface
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        //   let headers = new Headers();
        //   headers.append('Content-Type', 'application/json');
        // console.log(body);
        return this._http.post(this.url + 'Mkt_users/login', body, { headers: headers });
    };
    UserService.prototype.change = function (id, user) {
        var body = JSON.stringify(user); //get interface
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        //   let headers = new Headers();
        //   headers.append('Content-Type', 'application/json');
        // console.log(body);
        return this._http.post(this.url + 'Mkt_users/change/' + id, body, { headers: headers });
    };
    UserService.prototype.initApp = function () {
        var _this = this;
        this._http.get(this.url + 'Mkt_users/roles')
            .map(function (response) { return response.json(); })
            .subscribe(function (response) {
            response.forEach(function (rol) {
                if (rol.name == 'Admin') {
                    __WEBPACK_IMPORTED_MODULE_4__global__["c" /* Roles */][0]._id = rol._id;
                }
                else if (rol.name == 'Ejecutivo') {
                    __WEBPACK_IMPORTED_MODULE_4__global__["c" /* Roles */][1]._id = rol._id;
                }
            });
        });
        this.localStorage.getItem('Identity').subscribe(function (id) {
            if (id != null) {
                // console.log(id)
                var body = JSON.stringify(id);
                // let headers = new Headers();
                // headers.append('Content-Type', 'application/json');
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
                _this._http.post(_this.url + 'Mkt_users/auth', body, { headers: headers })
                    .map(function (response) { return response.json(); })
                    .subscribe(function (response) {
                    // console.log(Identity, response)
                    __WEBPACK_IMPORTED_MODULE_4__global__["b" /* Identity */]._id = response._id;
                    __WEBPACK_IMPORTED_MODULE_4__global__["b" /* Identity */].rol = response.rol;
                    __WEBPACK_IMPORTED_MODULE_4__global__["b" /* Identity */].name = response.name;
                    _this._router.navigate(['/']);
                });
            }
            else {
                // console.log('sin _id en localStorage')
            }
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5_angular_async_local_storage__["a" /* AsyncLocalStorage */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/sucursal/addSucursal/addsucursal.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n.ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n  \r\n.text-alert{\r\n    color:#dd4b39;\r\n}"

/***/ }),

/***/ "./src/app/sucursal/addSucursal/addsucursal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n    <br>\r\n    <div class=\"\">\r\n        <div class=\"box box-primary\">\r\n\r\n            <div class=\"container \">\r\n                <div [hidden]=\"submitted\">\r\n                    <h1>Registrar Sucursal</h1>\r\n                    <br>\r\n                    <form (ngSubmit)=\"onSubmit()\" #addEjecutivo=\"ngForm\" class=\"jumbotron\">\r\n                        <div class=\"form-group col-sm-8\">\r\n                            <label for=\"name\" class=\"control-label\">Nombre Sucursal</label>\r\n                            <input type=\"text\" pattern=\"[a-zA-Z]{3,10}[ ]{0,1}[a-zA-Z]{0,10}\" class=\"form-control\" id=\"name\" [(ngModel)]=\"office.name\"\r\n                                name=\"name\" #name=\"ngModel\" required />\r\n                            <span *ngIf=\"!name.valid && name.touched\" class=\"text-alert\">\r\n                                *Nombre de Sucursal requerido.\r\n                            </span>\r\n                            <!--<div [hidden]=\"name?.valid || name?.pristine\" class=\"text-alert\">\r\n                            kjkn\r\n                        </div>-->\r\n                        </div>\r\n                        <div class=\"form-group col-sm-8\">\r\n                            <label for=\"ubicacion\" class=\" control-label\">Ubicacion</label>\r\n                            <input type=\"text\" pattern=\"[a-zA-Z0-1# ]{4,40}\" class=\"form-control\" id=\"ubicacion\" [(ngModel)]=\"office.ubicacion\" name=\"ubicacion\"\r\n                                #ubicacion=\"ngModel\" required>\r\n                            <span *ngIf=\"!ubicacion.valid && ubicacion.touched\" class=\"text-alert\">\r\n                                *Ubicacion de Sucursal invalido.\r\n                            </span>\r\n                            <!--<div [hidden]=\"ubicacion?.valid || ubicacion?.pristine\" class=\"\">\r\n                                Ubicacion requerida\r\n                            </div>-->\r\n                        </div>\r\n                        <!-- <div class=\"form-group col-sm-8\">\r\n                        <label for=\"caja\">Saldo Caja</label>\r\n                        <input type=\"number\" pattern=\"[0-9]{0,5}\" class=\"form-control\" id=\"caja\" \r\n                            [(ngModel)]=\"office.caja\" name=\"caja\" #caja=\"ngModel\" required >\r\n                            <span *ngIf=\"!caja.valid && caja.touched\" class=\"text-alert\">\r\n                                    *Caja de Sucursal requerido.\r\n                                </span>\r\n                     \r\n                    </div> -->\r\n                        <div class=\"form-group col-sm-8\">\r\n                            <label for=\"departament\">Departamento</label>\r\n                            <select class=\"form-control\" id=\"departament\" [(ngModel)]=\"office.departament\" name=\"departament\" #departament=\"ngModel\"\r\n                                required>\r\n                                <option value=\"La Paz\">La Paz</option>\r\n                                <option value=\"Santa Cruz\">Santa Cruz</option>\r\n                                <option value=\"Cochabamba\">Cochabamba</option>\r\n                                <option value=\"Sucre\">Sucre</option>\r\n                                <option value=\"Potosi\">Potosi</option>\r\n                                <option value=\"Tarija\">Tarija</option>\r\n                                <option value=\"Orudo\">Orudo</option>\r\n                                <option value=\"Beni\">Beni</option>\r\n                                <option value=\"Pando\">Pando</option>\r\n                            </select>\r\n                            <!-- <input type=\"text\" class=\"form-control\" id=\"departament\" required\r\n                                [(ngModel)]=\"office.departament\" name=\"departament\" #departament=\"ngModel\" > -->\r\n                            <span *ngIf=\"!departament.valid && departament.touched\" class=\"text-alert\">\r\n                                *Departamento de Sucursal requerido.\r\n                            </span>\r\n                            <!--<div [hidden]=\"departament?.valid || departament?.pristine\" class=\"\">\r\n                               *Departamento requeridos\r\n                            </div>-->\r\n                        </div>\r\n                        <div class=\"form-group col-sm-8\">\r\n                            <label for=\"nomCompany\">Compañia</label>\r\n                            <select class=\"form-control\" id=\"nomCompany\" required [(ngModel)]=\"office.company_id\" name=\"nomCompany\" #nomCompany=\"ngModel\">\r\n                                <option *ngFor=\"let company of companys\" [value]=\"company._id\">{{company.name}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"form-group col-sm-8\" style=\"text-align:center \">\r\n                            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addEjecutivo.form.valid\">Registrar</button>\r\n                            <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelar()\">Cancelar</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/sucursal/addSucursal/addsucursal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSucursalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modelo_offices__ = __webpack_require__("./src/app/modelo/offices.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sucursal_service__ = __webpack_require__("./src/app/services/sucursal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddSucursalComponent = /** @class */ (function () {
    function AddSucursalComponent(_peticionSucursalService, route, router) {
        this._peticionSucursalService = _peticionSucursalService;
        this.route = route;
        this.router = router;
        this.office = new __WEBPACK_IMPORTED_MODULE_1__modelo_offices__["a" /* Offices */]('', '', null, '', null); //name,ubicacion,caja,departament,company_id
    }
    AddSucursalComponent.prototype.ngOnInit = function () {
        this.queryCompany();
    };
    AddSucursalComponent.prototype.onSubmit = function () {
        var _this = this;
        // console.log(this.office);
        this._peticionSucursalService.addOffice(this.office).subscribe(function (result) {
            var esperado = result;
            // console.log(esperado);
            // this.router.navigate(['home/event', this.eventId]);
            alert('Se Creo correctamente la Sucursal');
            _this.router.navigate(['home/sucursal']);
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            alert('Error al Crear Sucursal verifique los datos');
        });
    };
    AddSucursalComponent.prototype.queryCompany = function () {
        var _this = this;
        this._peticionSucursalService.getCompanys().subscribe(function (result) {
            _this.companys = result;
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            alert('No existe compañia');
        });
    };
    AddSucursalComponent.prototype.cancelar = function () {
        this.router.navigate(['home/sucursal']);
    };
    AddSucursalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-addsucursal',
            template: __webpack_require__("./src/app/sucursal/addSucursal/addsucursal.component.html"),
            styles: [__webpack_require__("./src/app/sucursal/addSucursal/addsucursal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_sucursal_service__["a" /* SucursalService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AddSucursalComponent);
    return AddSucursalComponent;
}());



/***/ }),

/***/ "./src/app/sucursal/sucursal.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sucursal/sucursal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <div class=\"content\">\r\n\r\n    <div class=\"box box-primary\">\r\n\r\n        <section class=\"content-header\">\r\n            <h1>\r\n              Sucursales\r\n               <small> Cecap</small>\r\n            </h1>\r\n            <div>     \r\n             <ol class=\"breadcrumb\">\r\n                 <li><a class=\"btn btn-primary\" [routerLink]=\"['/home/sucursal/add']\"><i class=\"fa fa-book\"></i>Add Sucursal</a></li>\r\n                \r\n             </ol>\r\n           </div> \r\n         </section>\r\n         <section class=\"content h\">\r\n            <table class=\"table table-hover\">\r\n               <thead>\r\n                  <tr class=\"text-info cabecera hover\">\r\n       \r\n                     <th><h4 class=\"text-center font-family-serif\"><strong>Nombre Sucursal</strong> </h4></th>\r\n                     <th><h4 class=\"text-center\"><strong>Departamento</strong></h4></th>\r\n                     <th><h4 class=\"text-center\"><strong>Direccion</strong></h4></th>\r\n                     <!-- <th><h4 class=\"text-center\"><strong>Caja</strong></h4></th> -->\r\n                     <!-- <th colspan=\"2\"><h4 class=\"text-center\"><strong>Opciones</strong></h4></th> -->\r\n                     \r\n                  </tr>\r\n               </thead>\r\n       \r\n               <tbody>\r\n       \r\n                  <tr *ngFor=\"let i of sucursales\" class=\"bg-info text-center\">\r\n                     <td> {{i.name}}</td>\r\n                     <td>{{i.departament}}</td>\r\n                     <td>{{i.ubicacion}}</td>\r\n                     <!-- <td>{{i.caja}}</td> -->\r\n                     <!-- <td>\r\n                        <a class=\"btn btn-primary\" (click)=\"verSucursal(i._id)\">Ver</a>\r\n                        <a class=\"btn btn-warning\" (click)=\"sendEdit(i._id)\">Editar</a>\r\n                     </td> -->\r\n                  </tr>\r\n               </tbody>\r\n            </table>\r\n         </section>\r\n    </div>\r\n  </div>\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sucursal/sucursal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SucursalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sucursal_service__ = __webpack_require__("./src/app/services/sucursal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SucursalComponent = /** @class */ (function () {
    function SucursalComponent(_peticionSucursalService, route, router) {
        this._peticionSucursalService = _peticionSucursalService;
        this.route = route;
        this.router = router;
    }
    SucursalComponent.prototype.ngOnInit = function () {
        this.querySucursales();
    };
    SucursalComponent.prototype.sendEdit = function () {
    };
    SucursalComponent.prototype.querySucursales = function () {
        var _this = this;
        this._peticionSucursalService.getSucursales().subscribe(function (result) {
            _this.sucursales = result;
            //  console.log(this.sucursales);
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            alert('Error ');
        });
    };
    SucursalComponent.prototype.verSucursal = function (id) {
        //console.log("facilitadorComponent");
        this.router.navigate(['/home/sucursal/detalleCaja/', id]);
    };
    SucursalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sucursal',
            template: __webpack_require__("./src/app/sucursal/sucursal.component.html"),
            styles: [__webpack_require__("./src/app/sucursal/sucursal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_sucursal_service__["a" /* SucursalService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], SucursalComponent);
    return SucursalComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




// import { AppModule } from './app';
// platformBrowserDynamic().bootstrapModule(AppModule)
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map