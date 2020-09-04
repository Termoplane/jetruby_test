import React from "react"
import { OPEN_TILE, DELETE_TILE, SUBMIT_TILES } from './types'

const colors = ['#7309AA', '#1531AE', '#009999', '#41DB00', '#ECFC00', '#FFB800', '#FF6200', '#E40045', '#7309AA', '#1531AE', '#009999', '#41DB00', '#ECFC00', '#FFB800', '#FF6200', '#E40045']

function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
}

shuffle(colors)

const gameState = {
    id: Array(16).fill(null).map((a,i) => i+1),
    colors
};

export const gameReducer = (state = gameState, action) => {
  switch(action.type) {
      case SUBMIT_TILES:
          console.log(action.payload);
          console.log(state.id[action.payload[0]-1]);
          return {
              ...state,
              id: state.id.map(id => {
                  if (id == action.payload[0] || id == action.payload[1]) {
                      return 100
                  } else {
                      return id
                  }
              })
          };
      default:
          return state
  }
};
