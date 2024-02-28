function insert(num) {
    var valor = document.getElementById('resultado').innerHTML;
    var result = valor + num ;
    document.getElementById('resultado').innerHTML = result;
  }

  function clean() {

      document.getElementById('resultado').innerHTML = "";
  }

  function back() {
      var resultado = document.getElementById('resultado').innerHTML;
      document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1)
  }

  function calcular() {
      var resultado = document.getElementById('resultado').innerHTML;
      if (resultado.includes('+') || resultado.includes('-') || resultado.includes('*') || resultado.includes('/')); 
      {
      document.getElementById('resultado').innerHTML = eval(resultado);
  }
}
  


  
