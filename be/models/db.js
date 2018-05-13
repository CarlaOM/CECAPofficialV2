//import { isObject } from 'util';

// import { mongo } from 'mongoose';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
process.env.TZ = 'America/La_Paz';

module.exports = {
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
         receipt: Number,
         description: String,
         amount: Number,
         input:Boolean,
         date_detail:Date,
         title:String,
         events:ObjectId
      }],
      user: ObjectId,
      active:Boolean,
      state:Number,////////-1 sin cerrar
                  //////// 0  pendiente
                  ////////  1 cerrado

      _id: { type: ObjectId, default: function () { return new mongoose.Types.ObjectId } },
      record_date: { type: Date, default: function () { return new Date() } },
   })),


   ////////////////////////////////////////////////////////////////////////////

   cashFlowOffices: mongoose.model('cashFlowOffices', new Schema({
      
      date_start: Date,
      date_end: Date,
      amount: Number,
      amount_delivered: Number,
      input:Number,
      output:Number,
      details:[{
            cashFlowUsers:ObjectId,
            dateCloseCash:Date,

      }],
      offices: ObjectId,
      active:Boolean,
      state:Number,////////-1 sin cerrar
      //////// 0  pendiente
      ////////  1 cerrado

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
      carteras: ObjectId,
      /////////////
      profile: {
         programs: [{
            programs: ObjectId,
            modulars: [{
               amount: {  ///observation
                  detail: String,
                  receipt: String,// nro factura
                  date: Date,
                  amount: Number
               },
               assist: Boolean, //cambio
               events: ObjectId,
               // inscription: ObjectId,
               modules: ObjectId,
               print_certificate: Boolean,
            }],
            final_work: {
               stade: Number,
               observations: String,
            },
            requirements: [],
            total_price: Number,
            payed: Number,
            debt: Number,  //deuda
            print_diploma: Boolean
         }]
      },
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
         lists: [ObjectId],
         _id: ObjectId///////////////duda?????
      }],
      inscriptions: [{
         // segun al numero de asistencias sacar el precio total q tiene q pagar
         total_price: Number, //total a pagar segun asistencia
         module_price: Number,
         bolivianos_price: Number,
         dolares_price: Number,
         canceled_price: Number,
         persons: ObjectId,
         users: ObjectId
      }],
      total: Number,
      programs: ObjectId,
      //modulo: [ObjectId],

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
      program: ObjectId,

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
      var db = mongoose.connect('mongodb://localhost:27017/CecapImports',
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