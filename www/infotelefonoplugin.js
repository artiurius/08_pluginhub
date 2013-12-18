cordova.define("com.curso.phonegap.infotelefonoplugin",

	function(require, exports, module){
		// var contactsplugin = require('org.apache...contacts');
		// var winkiplugin = require('com.curso.phonegap.winkiplugin');
		
		var exec = require('cordova/exec');
		var InfoTelefono = require('./InfoTelefono');
	
		var InfoTelefonoPlugin = function(){
			
		};
		
		InfoTelefonoPlugin.prototype.obtenerInfo = function(success, fail){
			alert('Dentro de Plugin');
			exec(function(jsonJava){
				var resultado = new InfoTelefono();
				resultado.imei = jsonJava.imei;
				resultado.numero = jsonJava.numero;
				resultado.imsi = jsonJava.imsi;
				success(resultado);
					
		}, fail, 'InfoTelefonoPlugin', 'OBTENER_INFO_ACCION', []);
			
		};
		module.exports = new InfoTelefonoPlugin();
	}

);