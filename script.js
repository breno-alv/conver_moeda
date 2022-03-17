function Converter(){
	var valorElemento = document.getElementById("valor");
	var valor = valorElemento.value;
	var valorEmDolarNumerico = parseFloat(valor);
  var valorEmEuroNumerico = parseFloat(valor);
	
	var valorEmReal = valorEmDolarNumerico * 5.05;
	console.log(valorEmReal);
  var valorEmEuroReal = valorEmEuroNumerico * 5.56;
	console.log(valorEmEuroReal);
	
	var elementoValorConvertido = document.getElementById("valor-convertido-em-dolar");
	var valorConvertido = "O Resultado em Dolar é R$:" + valorEmReal.toFixed(2);
	elementoValorConvertido.innerHTML = valorConvertido;

  var elementoValorConvertido = document.getElementById("valor-convertido-em-euro");
	var valorConvertido = "O Resultado em Euro é R$:" + valorEmEuroReal.toFixed(2);
	elementoValorConvertido.innerHTML = valorConvertido;
}