var supertest = require("supertest");
var should = require("should");
var assert = require('assert');
var aplicacion = require('./../login.js');


// This agent refers to PORT where the program is running.

var server = supertest.agent("http://localhost:4000");

// UNIT test begin

describe("Pruebas unitarias",function(){


  // #2 Debería validar un login
  it('Validación de credenciales', function(){
    assert.equal(aplicacion.login("admin","admin"), true);
  });


});
