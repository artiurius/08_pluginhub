
cordova.define("com.curso.phonegap.InfoTelefono",
				function(require, exports, module){

	/** Documentar */
	var InfoTelefono = function(numero, imei, imsi){
		this.numero = numero;
		this.imei = imei;
		this.imsi = imsi;
	}

	/** Documentar */
	InfoTelefono.prototype.numero = null;
	InfoTelefono.prototype.imei = null;
	InfoTelefono.prototype.imsi = null;

	module.exports = InfoTelefono;
	
});
