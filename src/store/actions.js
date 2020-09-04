import { OPEN_TILE, DELETE_TILE, CLEAR_ROUND, SUBMIT_TILES } from './types'

export function openTile(id, color) {
  return {
    type: OPEN_TILE,
    payload: {
      id,
      color,
      flipped: true
    }
  }
}

export function clearRound() {
  return {
    type: CLEAR_ROUND
  }
}

export function submitTiles(id1, id2) {
  return {
    type: SUBMIT_TILES,
    payload: [id1, id2]
  }
}