import {combineReducers} from 'redux'
import {gameReducer} from './gameReducer'
import {roundReducer} from './roundReducer'

export const rootReducer = combineReducers({
  game: gameReducer,
  round: roundReducer
})