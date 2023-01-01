import { game, IsTipo } from "./oddEvenPrime";
//verifica si el numero es impar
describe('Odd Even Prime code kata', () => {
  test('should return number impar', () => {
    const number = 15;
    const resultado = 'impar';
    const resp = game(number);
    expect(resp).toEqual(resultado);
  });
  //verifica si el numero es par
  test('should return number par', () => {
    const number = 4;
    const resultado = 'par';
    const resp = game(number);
    expect(resp).toEqual(resultado);
  });
  //verifica si el numero es primo 
  test('should return number primo', () => {
    const number = 5;
    const resultado = '5';
    const resp = game(number);
    expect(resp).toEqual(resultado);
  });
  
});

describe('Tipo function', ()=>{
  test('return tipo numero',()=> {
    [2, 3, 5].map(number => expect(IsTipo(number)).toBeTruthy());
  })
})
