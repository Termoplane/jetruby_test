import React from 'react'
import classnames from 'classnames'
import {openTile, clearRound, submitTiles} from '../../store/actions'
import {connect} from 'react-redux'
import './style.sass'

function BoardTile({ color, id, openTile, round, clearRound, game, submitTiles }) {
  
  const TileClicked = (e) => {
    e.preventDefault()
    if (round[0].id !== 0) {
      if (color == round[0].color && id !== round[0].id) {
        openTile(id, color)
        setTimeout(() => {
          submitTiles(id, round[0].id)
          clearRound()
        }, 700)
      } else {
        openTile(id, color)
        setTimeout(() => {
          clearRound()
        }, 800)
      }
    } else {
        openTile(id, color)
    }
  }

  return(
    <div className='scene'>
      <div className={classnames('card', { 'flipped': id == round[0].id ? round[0].flipped : (id == round[1].id ? round[1].flipped : '')}, { 'noDisp': id == 100})} onClick={TileClicked}>
          <div className={classnames("card__face card__face--front", )}  id={id} ></div>
          <div className="card__face card__face--back" style={{background: color }}></div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  openTile,
  clearRound,
  submitTiles
}

const mapStateToProps = state => {
  return {
    round: state.round,
    game: state.game
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardTile)