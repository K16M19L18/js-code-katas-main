/**
Rules:
- Rock Beats Scissors
- Scissors Beats Paper
- Paper Beats Rock
- Same Moves Result in Draw

Return:
- PLayer one wins
- PLayer two wins
- Is a draw
*/

const game = (jug1, jug2) => {
  if (jug1==='piedra' && jug2 === 'tijera' || jug1 == 'tijera' && jug2 == 'papel'||jug1==='piedra' && jug2 === 'papel') {
    return 'jugadorUno_gana'

  } else if (jug2 == 'piedra' && jug1 == 'tijera' || jug2 == 'tijera' && jug1 == 'papel'||jug2 == 'piedra' && jug1 == 'papel' ) {
    return 'jugadorDos_gana'
  } else if (jug1 == jug2) {
    return 'empate'
  }
}

export { game};