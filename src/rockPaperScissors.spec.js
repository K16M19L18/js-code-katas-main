import { game } from "./rockPaperScissors";

describe('RockPaperScissors game', () => {
  //el jugador uno es piedra y el jugador 2 es tijera
  //vencedor jugador uno 

  test('should return el ganador', () => {
    const jugaroUno = 'piedra';
    const jugadorDos = 'tijera';
    const respuesta= 'jugadorUno_gana'

    const resp = game(jugaroUno,jugadorDos);
    expect(resp).toEqual(respuesta);
  });
  //el jugador uno es piedra y el jugador 2 es papel
  //vencedor jugador uno 

  test('should return el ganador', () => {
    const jugaroUno = 'piedra';
    const jugadorDos = 'papel';
    const respuesta= 'jugadorUno_gana'

    const resp = game(jugaroUno,jugadorDos);
    expect(resp).toEqual(respuesta);
  });

//el jugador uno es tijera y el jugador 2 es papel
  //vencedor jugador uno 

  test('should return el ganador', () => {
    const jugaroUno = 'tijera';
    const jugadorDos = 'papel';
    const respuesta= 'jugadorUno_gana'

    const resp = game(jugaroUno,jugadorDos);
    expect(resp).toEqual(respuesta);
  });


  //el jugador dos es piedra y el jugador 1 es tijera
  //vencedor jugador Dos 
  
  test('should return el ganador', () => {
    const jugaroUno = 'tijera';
    const jugadorDos = 'piedra';
    const respuesta= 'jugadorDos_gana'

    const resp = game(jugaroUno,jugadorDos);
    expect(resp).toEqual(respuesta);
  });
  //el jugador dos es piedra y el jugador 1 es papel
  //vencedor jugador Dos 
  
  test('should return el ganador', () => {
    const jugaroUno = 'papel';
    const jugadorDos = 'piedra';
    const respuesta= 'jugadorDos_gana'

    const resp = game(jugaroUno,jugadorDos);
    expect(resp).toEqual(respuesta);
  });
  //el jugador dos es tijera y el jugador 1 es papel
  //vencedor jugador Dos 
  
  test('should return el ganador', () => {
    const jugaroUno = 'papel';
    const jugadorDos = 'tijera';
    const respuesta= 'jugadorDos_gana'

    const resp = game(jugaroUno,jugadorDos);
    expect(resp).toEqual(respuesta);
  });
// Los dos jugador escogen los mismo y empate
  test('should return el ganador', () => {
    const jugaroUno = 'piedra';
    const jugadorDos = 'piedra';
    const respuesta= 'empate'

    const resp = game(jugaroUno,jugadorDos);
    expect(resp).toEqual(respuesta);
  });
  // Los dos jugador escogen los mismo y empate
  test('should return el ganador', () => {
    const jugaroUno = 'tijera';
    const jugadorDos = 'tijera';
    const respuesta= 'empate'

    const resp = game(jugaroUno,jugadorDos);
    expect(resp).toEqual(respuesta);
  });
  // Los dos jugador escogen los mismo y empate
  test('should return el ganador', () => {
    const jugaroUno = 'papel';
    const jugadorDos = 'papel';
    const respuesta= 'empate'

    const resp = game(jugaroUno,jugadorDos);
    expect(resp).toEqual(respuesta);
  });
});



