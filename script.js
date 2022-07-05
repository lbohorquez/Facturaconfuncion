function resultado1(valor1) 
{
   let valorUno = parseInt(valor1);
   let valorDos = 60; 
   let resultado = 0;

   resultado = document.getElementById('resultado1').innerHTML;
   resultado = valorUno * valorDos;  //como esta inicializado con un numero no va parseint
   document.getElementById('resultado1').innerHTML = resultado;
   resultadoTotal()
}
function resultado2(valor1) 
{
   let valorUno = parseInt(valor1);
   let valorDos = 80; 
   let resultado = 0;

   resultado = document.getElementById('resultado2').innerHTML;
   resultado = valorUno * valorDos;
   document.getElementById('resultado2').innerHTML = resultado;
   resultadoTotal()
}
function resultado3(valor1) 
{
   let valorUno = parseInt(valor1);
   let valorDos = 100; 
   let resultado = 0;

   resultado = document.getElementById('resultado3').innerHTML;
   resultado = valorUno * valorDos;
   document.getElementById('resultado3').innerHTML = resultado;
   resultadoTotal()
}
function resultado4(valor1) 
{
   let valorUno = parseInt(valor1);
   let valorDos = 110; 
   let resultado = 0;

   resultado = document.getElementById('resultado4').innerHTML;
   resultado = valorUno * valorDos;
   document.getElementById('resultado4').innerHTML = resultado;
   resultadoTotal()
}
function resultado5(valor1) 
{
   let valorUno = parseInt(valor1);
   let valorDos = 120; 
   let resultado = 0;

   resultado = document.getElementById('resultado5').innerHTML;
   resultado = valorUno * valorDos;
   document.getElementById('resultado5').innerHTML = resultado;
   resultadoTotal()
}
function resultado6(valor1) 
{
   let valorUno = parseInt(valor1);
   let valorDos = 1200; 
   let resultado = 0;

   resultado = document.getElementById('resultado6').innerHTML;
   resultado = valorUno * valorDos;
   document.getElementById('resultado6').innerHTML = resultado;
   resultadoTotal()
}
function resultado7(valor1) 
{
   let valorUno = parseInt(valor1);
   let valorDos = 120; 
   let resultado = 0;

   resultado = document.getElementById('resultado7').innerHTML;
   resultado = valorUno * valorDos;
   document.getElementById('resultado7').innerHTML = resultado;
   resultadoTotal()
}
function resultadoTotal()
{  
    let resultado = 0;
   // let valorUno = parseInt(valor1);
   // let valorDos = parseInt(valor2);
   // let valorTres = parseInt(valor3);
   // let valorCuatro = parseInt(valor4);
   // let valorCinco = parseInt(valor5);
   // let valorSeis = parseInt(valor6);
   // let valorSiete = parseInt(valor7);
  
   // let valorUno = document.querySelector('#cantidadUnidades1').value
   // let valorDos = document.querySelector('#cantidadUnidades2').value
   // let valorTres = document.querySelector('#cantidadUnidades3').value
   // let valorCuatro = document.querySelector('#cantidadUnidades4').value
   // let valorCinco = document.querySelector('#cantidadUnidades5').value
   // let valorSeis = document.querySelector('#cantidadUnidades6').value
   // let valorSiete = document.querySelector('#cantidadUnidades7').value
 
   let valorUno = document.querySelector('#resultado1').innerText
   let valorDos = document.querySelector('#resultado2').innerText
   let valorTres = document.querySelector('#resultado3').innerText
   let valorCuatro = document.querySelector('#resultado4').innerText
   let valorCinco = document.querySelector('#resultado5').innerText
   let valorSeis = document.querySelector('#resultado6').innerText
   let valorSiete = document.querySelector('#resultado7').innerText
   
      if (valorUno == '')
      {
          valorUno=0
      }
      if (valorDos == '')
      {
          valorDos=0
      }
      if (valorTres == '')
      {
         valorTres=0
      }
      if (valorCuatro == '')
      {
         valorCuatro=0
      }
      if (valorCinco == '')
      {
        valorCinco=0
      }
      if (valorSeis == '')
      {
         valorSeis=0
      }
      if (valorSiete == '')
      {
          valorSiete=0
      }
             

   resultado = document.getElementById('totaldelacompra2').innerText;


   resultado = (parseInt(valorUno) + parseInt(valorDos) + parseInt(valorTres) + parseInt(valorCuatro) + parseInt(valorCinco) + parseInt(valorSeis) + parseInt(valorSiete));
   document.getElementById('totaldelacompra2').innerHTML = resultado;
}