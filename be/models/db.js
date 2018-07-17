//import { isObject } from 'util';

// import { mongo } from 'mongoose';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
process.env.TZ = 'America/La_Paz';

module.exports = {

      //////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////
      /////////////////// BD FINANZAS ///////////////////////////////////////


      ///Account
      roles: mongoose.model('roles', new Schema({
            name: String,

            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
      })),

      ////////////////////////////////////////////////////////////////////////////

      users: mongoose.model('users', new Schema({
            name: String,
            lastname: String,
            cell: Number,
            correo: String,

            active: Boolean,
            password_hash: String,

            // token: String,
            rol: ObjectId,
            offices: ObjectId,
            amount: Number,
            debt: Number,

            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } },
      })),

      ////////////////////////////////////////////////////////////////////////////

      cashFlowUsers: mongoose.model('cashFlowUsers', new Schema({
            date_start: Date,
            date_end: Date,
            amount: Number,
            amount_delivered: Number,
            details: [{
                  receipt: String,
                  description: String,
                  amount: Number,
                  input: Boolean,
                  date_detail: Date,
                  title: String,
                  events: ObjectId,
                  modulars: ObjectId
            }],
            user: ObjectId,
            active: Boolean,
            state: Number,////////-1 sin cerrar
            //////// 0  pendiente
            ////////  1 cerrado

            debt: Number,

            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } },
      })),


      ////////////////////////////////////////////////////////////////////////////

      cashFlowOffices: mongoose.model('cashFlowOffices', new Schema({

            date_start: Date,
            date_end: Date,
            amount: Number,
            amount_delivered: Number,
            input: Number,
            output: Number,
            details: [{
                  cashFlowUsers: ObjectId,
                  dateCloseCash: Date,

            }],
            offices: ObjectId,
            users: ObjectId,
            active: Boolean,
            state: Number,


            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } },
      })),
      ///////////////////////////////////////////////////////////////////////////
      cashFlowPrincipal: mongoose.model('cashFlowPrincipal', new Schema({

            date_start: Date,
            date_end: Date,
            amount: Number,
            amount_delivered: Number,

            details: [{
                  officeName: String,
                  cashFlowOffices: ObjectId,
                  dateCloseCash: Date,
                  amount: Number,
                  description: String,
                  input: Boolean,
                  title: String,

            }],
            offices: ObjectId,
            users: ObjectId,
            active: Boolean,
            state: Number,
            debt: Number,


            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } },
      })),

      ////////////////////////////////////////////////////////////////////////////

      carteras: mongoose.model('carteras', new Schema({
            name: String,
            user: ObjectId,
            active: Boolean,


            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date } }

      })),

      //////////////////////////////////////////////////
      modulars: mongoose.model('modulars', new Schema({
            name: String, //nombre del modulo
            amount: {  // observation
                  detail: String,
                  receipt: String,// nro factura
                  date: Date,
                  amount: Number,
                  events: ObjectId
            },
            nivelacion: {  // observation
                  detail: String,
                  receipt: String,// nro factura
                  date: Date,
                  amount: Number,
                  events: ObjectId
            },
            assist: Boolean, //cambio
            persons: ObjectId,//a la persona que pertenece
            profile: ObjectId,
            events: ObjectId,
            //    inscription: ObjectId,
            modules: ObjectId,
            print_certificate: Boolean,

            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date(); } },
      })),
      /////////////////////////////////////////////////

      persons: mongoose.model('persons', new Schema({
            first_name: String,
            last_name: String,
            ci: Number,
            phone: Number,
            cellphone: Number,
            email: String,
            ocupation: String,//1 = universitario, 2=Profesional, 3=particular
            descOcupation: {
                  //universitario
                  carrera: String,
                  universidad: String,
                  semestre: String,
                  //Particular
                  areaTrabajo: String,
                  //Profesional
                  profesion: String,
                  empresa: String,
                  cargo: String,
            },
            //////////////
            // carteras: ObjectId,
            /////////////
            profile: [{
                  _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
                  programs: ObjectId,
                  name: String, // nombre del programa
                  // modulars: [{
                  //       amount: {  // observation
                  //             detail: String,
                  //             receipt: String,// nro factura
                  //             date: Date,
                  //             amount: Number,
                  //       },
                  //       assist: Boolean, //cambio
                  //       events: ObjectId,
                  //       //    inscription: ObjectId,
                  //       modules: ObjectId,
                  //       print_certificate: Boolean,
                  // }],
                  final_work: {
                        date_start: Date,
                        name: String, // nombre del trabajo final
                        origin: String,
                        facilitator: ObjectId,
                        revisions: [{
                              state: Number, // 9 posibles estados
                              observations: String,
                              date_review: Date,
                              _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
                        }],
                        date_end: Date,
                        empastado: Boolean,
                        copy_1: Boolean,
                        copy_2: Boolean,
                        form: Boolean,
                        certificate: Boolean,
                        letter_review: Boolean,
                        company_certificate: Boolean
                  },
                  requirements: { // true=entrego, false=no entrego
                        photograpy: Boolean,
                        photocopy_ci: Boolean,
                        photocopy_titule: Boolean
                  },
                  total_price: Number,
                  payed: Number, //cancelado
                  debt: Number,  // deuda
                  print_diploma: Boolean
            }],
            workshops: [
                  {
                        events: ObjectId,
                        modulars: ObjectId,
                        modules: ObjectId,
                        amount: Number,
                        receipt: String,
                        assist: Boolean,
                        certificate: Boolean,

                        nameEvent: String, // nombre del evento
                        nameModule: String, // nombre del modulo
                  }
            ],
            // user: ObjectId,
            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } },
      })),

      ////////////////////////////////////////////////////////////////////////////

      facilitators: mongoose.model('facilitators', new Schema({
            name: String,
            job: String,


            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } },
      })),

      ////////////////////////////////////////////////////////////////////////////

      events: mongoose.model('events', new Schema({
            name: String,
            description: String,
            date_start: Date,
            modulars: [{
                  date_start: Date,
                  date_end: Date,
                  facilitators: ObjectId,
                  modules: ObjectId,
                  lists: [ObjectId],////existe Modulars en Lists!!!!
                  _id: ObjectId////
            }],
            inscriptions: [{
                  // segun al numero de asistencias sacar el precio total q tiene q pagar
                  total_price: Number, //total a pagar segun asistencia
                  module_price: Number,
                  bolivianos_price: Number,
                  dolares_price: Number,
                  canceled_price: Number,
                  price_event: Number,
                  receipt: String,
                  //////
                  name: String,
                  ci: String,
                  cellphone: Number,
                  persons: ObjectId,
                  users: ObjectId,
                  nivelacion: Boolean
            }],
            total: Number,
            programs: ObjectId,
            offices: ObjectId, //sucursal
            date_end: Date,
            active: Boolean,

            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } },
      })),

      ////////////////////////////////////////////////////////
      lists: mongoose.model('lists', new Schema({
            bolivianos: Number,
            dolares: Number,
            receipt: String, // varios recibos
            assist: Boolean,
            type: Number, //nuevo // nivelacion
            person: ObjectId,
            events: ObjectId,
            modulars: ObjectId,

            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } },
      })),

      ////////////////////////////////////////////////////////

      programs: mongoose.model('programs', new Schema({
            name: String,
            //modules: [String],
            details: String,

            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } },
      })),

      modules: mongoose.model('modules', new Schema({
            number: Number,
            name: String,
            content: [String],
            programs: ObjectId,

            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } },
      })),

      //////////////////////////////////////////////////////////////////

      offices: mongoose.model('offices', new Schema({
            name: String,
            // nit:String,
            ubicacion: String,
            caja: Number,
            departament: String,
            company_id: ObjectId,

            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } }
      })),

      //////////////////////////////////////////////////////////////////

      company: mongoose.model('company', new Schema({
            name: String,
            nit: String,
            caja: Number,
            cash_flow: [{
                  amount: Number,
                  description: String,
                  _id: ObjectId
            }],
            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } }
      })),

      //////////////////////////////////////////////////////////////////

      correlatives: mongoose.model('correlatives', new Schema({
            year: Date,
            // company_id: ObjectId,
            //user_id: ObjectId,
            receipts: [{
                  receipt: String,
                  amount: Number,
                  description: String
            }],

            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } }
      })),
      /////////////////////////////////////////////////

      categoriaEgresos: mongoose.model('categoriaEgreso', new Schema({
            //PROGRAMAS PROFESIONALES Y FINANCIEROS
            refrigerio: [String],
            salon: [String],
            publicidad: [String],
            facilitadores: [String],
            material: [String],
            otros: [String],

            //ADMINISTRATIVA
            oficina: [String],
            rrhhConsultorias: [String],
            obligaciones: [String],
            equipos: [String],
            imprenta: [String],
            fotocopiadora: [String],
            otrosGastos: [String],
            extras: [String],

            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } },
      })),


      //////////////////// END BD FINANZAS //////////////////////////////
      ////////////////////////////////////////////////////////////////////
      ///////////////////////////////////////////////////////////////////




      //////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////
      ///////////////// BD MARKETING ////////////////////////////////

      ///Account
      mkt_roles: mongoose.model('mkt_roles', new Schema({
            name: String,

            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
      })),

      ////////////////////////////////////////////////////////////////////////////

      mkt_users: mongoose.model('mkt_users', new Schema({
            name: String,
            lastname: String,
            cell: Number,
            correo: String,

            active: Boolean,
            password_hash: String,

            // token: String,
            rol: ObjectId,
            offices: ObjectId,
            amount: Number,

            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } },
      })),

      ////////////////////////////////////////////////////////////////////////////



      mkt_carteras: mongoose.model('mkt_carteras', new Schema({
            name: String,
            user: ObjectId,
            active: Boolean,


            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date } }

      })),

      //////////////////////////////////////////////////

      mkt_persons: mongoose.model('mkt_persons', new Schema({
            first_name: String,
            last_name: String,
            ci: Number,
            phone: Number,
            cellphone: Number,
            whatsapp_group: String,
            contact_medium: Number,
            //////////////
            //  1:wathsapp 2:afiches 3:faceb 4:recomend 
            //  5:vistasAula 6:visitasEmpresa
            ///////////
            city: String,
            email: String,
            ocupation: String,//1 = universitario, 2=Profesional, 3=particular
            descOcupation: {
                  //universitario
                  carrera: String,
                  universidad: String,
                  ///////
                  /// 1 Universidad Mayor de San Simon
                  /// 2 U. Catolica
                  /// 3 U.latinoamericana
                  //////
                  semestre: String,
                  //Particular
                  areaTrabajo: String,
                  //Profesional
                  profesion: String,
                  empresa: String,
                  cargo: String,
            },
            //////////////
            carteras: ObjectId,
            /////////////<<<<<< HEAD
            profile: {
                  programs: ObjectId,
                  // modulars: [{
                  //       amount: {  // observation
                  //             detail: String,
                  //             receipt: String,// nro factura
                  //             date: Date,
                  //             amount: Number,
                  //       },
                  //       assist: Boolean, //cambio
                  //       events: ObjectId,
                  //       //    inscription: ObjectId,
                  //       modules: ObjectId,
                  //       print_certificate: Boolean,
                  // }],
                  final_work: {
                        stade: Number, // entregado=1, no entrego=2
                        observations: String,
                  },
                  requirements: { // true=entrego, false=no entrego
                        photograpy: Boolean,
                        photocopy_ci: Boolean,
                        photocopy_titule: Boolean
                  },
                  total_price: Number,
                  payed: Number, //cancelado
                  debt: Number,  // deuda
                  print_diploma: Boolean
            },
            /////////////////para interes en programas////
            interes: [
                  {
                        programId: ObjectId,
                        programName: String,
                        checked: Boolean,
                        state: Number,
                        date_state: Date,
                        ////////////
                        //  0 interesados
                        //  1 en duda     
                        //  2 confirmados
                        //  3 isncritos
                        //  4 enlinea
                        //  5 proximo evento 
                        //  6 sin interes
                        //////// 
                        tracing: [{
                              details: String,
                              state: Number, // posibles estados
                              ////////////////
                              /// 0 programar llamada
                              /// 1 no contesto llamada
                              /// 2 contesto llamada
                              ////////////////
                              _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
                              record_date: { type: Date, default: function () { return new Date() } },
                        }]
                  }
            ],

            /////////////////////////////////////////////////




            // user: ObjectId,
            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } },
      })),

      ////////////////////////////////////////////////////////////////////////////

      mkt_facilitators: mongoose.model('mkt_facilitators', new Schema({
            name: String,
            job: String,


            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } },
      })),
      ////////////////////////////////////////////////////////////////////////////
      mkt_listExtra: mongoose.model('mkt_listExtra', new Schema({
            university: [{
                  nombre: String
            }],
            carrera: [{ nombre: String }],
            // job: String,


            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } },
      })),

      ////////////////////////////////////////////////////////////////////////////

      mkt_events: mongoose.model('mkt_events', new Schema({
            name: String,
            description: String,
            date_start: Date,
            modulars: [{
                  date_start: Date,
                  date_end: Date,
                  facilitators: ObjectId,
                  modules: ObjectId,
                  lists: [ObjectId],////existe Modulars en Lists!!!!
                  _id: ObjectId////
            }],
            inscriptions: [{
                  // segun al numero de asistencias sacar el precio total q tiene q pagar
                  total_price: Number, //total a pagar segun asistencia
                  module_price: Number,
                  bolivianos_price: Number,
                  dolares_price: Number,
                  canceled_price: Number,
                  price_event: Number,
                  receipt: String,
                  //////
                  name: String,
                  ci: String,
                  cellphone: Number,
                  persons: ObjectId,
                  users: ObjectId
            }],
            total: Number,
            programs: ObjectId,
            interes: [
                  {
                        persons: ObjectId,
                        details: String,
                        state: Number,
                        date_state: { type: Date, default: function () { return new Date() } },
                        ////////////
                        //  0 interesados
                        //  1 en duda
                        //  2 confirmados
                        //  3 isncritos
                        //  4 enlinea
                        //  5 proximo evento 
                        //  6 sin interes
                        //////// 
                        tracing: [{
                              details: String,
                              state: Number,
                              ////////////////
                              /// 0 programar llamada
                              /// 1 no contesto llamada
                              /// 2 contesto llamada
                              ////////////////
                              _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
                              record_date: { type: Date, default: function () { return new Date() } },
                        }]

                  }

            ],
            offices: ObjectId,
            date_end: Date,
            active: Boolean,
            //modulo: [ObjectId],

            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } },
      })),

      ////////////////////////////////////////////////////////
      mkt_lists: mongoose.model('mkt_lists', new Schema({
            bolivianos: Number,
            dolares: Number,
            receipt: String, // varios recibos
            assist: Boolean,
            type: Number, //nuevo // nivelacion
            person: ObjectId,
            events: ObjectId,
            modulars: ObjectId,

            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } },
      })),

      ////////////////////////////////////////////////////////

      mkt_programs: mongoose.model('mkt_programs', new Schema({
            name: String,
            //modules: [String],
            details: String,

            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } },
      })),

      mkt_modules: mongoose.model('mkt_modules', new Schema({
            number: Number,
            name: String,
            content: [String],
            programs: ObjectId,

            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } },
      })),

      //////////////////////////////////////////////////////////////////

      mkt_offices: mongoose.model('mkt_offices', new Schema({
            name: String,
            // nit:String,
            ubicacion: String,
            caja: Number,
            departament: String,
            company_id: ObjectId,

            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } }
      })),

      //////////////////////////////////////////////////////////////////

      mkt_company: mongoose.model('mkt_company', new Schema({
            name: String,
            nit: String,
            caja: Number,
            cash_flow: [{
                  amount: Number,
                  description: String,
                  _id: ObjectId
            }],
            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } }
      })),

      //////////////////////////////////////////////////////////////////

      mkt_correlatives: mongoose.model('mkt_correlatives', new Schema({
            year: Date,
            company_id: ObjectId,
            //user_id: ObjectId,
            receipts: [{
                  receipt: Number,
                  amount: Number,
                  description: String
            }],

            _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
            record_date: { type: Date, default: function () { return new Date() } }
      })),

      ///////////////////// END BD MARKETING////////////////////////////      
      /////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////



      // registers: mongoose.model('registers', new Schema({
      //    name: String,
      //    datails: String,
      //    state: Number,
      //    // state of number 

      //    _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
      //    record_date: { type: Date, default: function () { return new Date() } },
      // })),

      //Connection
      connection: function () {
            var db = mongoose.connect('mongodb://localhost:27017/Cecap',
                  function (err) {
                        if (err) return console.log(err);
                        console.log("MongoDB: connection to database succesful!");
                  }).connection;
      },

      endMongoConnection: function () {
            mongoose.connection.close(function () {
                  // console.log
                  process.exit(0);
            });
      }
};
// var types = {
// 	available: 0,
// 	send: 1,
// 	sold: 2
// }