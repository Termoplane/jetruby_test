import React from "react"
import { OPEN_TILE, DELETE_TILE, CLEAR_ROUND } from './types'

const roundState = {
  0:{
    id: 0,
    color: '',
    flipped: false
  },
  1:{
    id: 0,
    color: '',
    flipped: false
  }
};

export const roundReducer = (state = roundState, action) => {
  switch(action.type) {
      case OPEN_TILE:
        if (state[0].id === 0) {
          return {...state, 0: {...action.payload} };
        }
        else {
          return {...state, 1: {...action.payload} };
        }
      case CLEAR_ROUND:
        return {...state, 0: {id: 0, color: 0, flipped: false}, 1: {id: 0, color: 0, flipped: false}}
      default:
          return state
  }
};
