/**
Instructions
Your task in this kata is to implement a function that calculates the sum of the integers inside a string.

For example:
Input --> 'h3ll0w0rld1'
Output --> 4

Input --> 'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog'
Output --> 3635
*/

export const sumOfIntegersInString = (palabraWithNumero) => {
  let suma = 0;
  let indice =1;
  let numero = 0;
  let numeroTemporal = '';
  let separacion = palabraWithNumero.split('');
  separacion.forEach(function (separacion) {

    if (!isNaN(separacion)) {
      numeroTemporal = numeroTemporal + separacion
      console.log(numeroTemporal);
      console.log(indice+'<-p->'+palabraWithNumero.length)
      if(indice==palabraWithNumero.length){
        console.log(indice+'<-yyy->'+palabraWithNumero.length)
        numero = new Number(numeroTemporal)
        suma += numero;
      }
    } else if (numeroTemporal != '') {
      numero = new Number(numeroTemporal)
      suma += numero;
      console.log(suma+' suma');
      numeroTemporal = '';
    }
    indice++;

  })
  return suma;
};
