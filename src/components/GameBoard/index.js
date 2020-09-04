import React from 'react'
import BoardTile from '../BoardTile'
import {connect} from 'react-redux'
import './style.sass'

function GameBoard({TileIds, colors}) {
  const zipped = TileIds.map((x, i) => [x, colors[i]])
  console.log(zipped);
  return(
    <div className='gameBoard' >
      {zipped.map((zip) => 
        <BoardTile id={zip[0]} color={zip[1]} />
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    TileIds: state.game.id,
    colors: state.game.colors
  }
}

export default connect(mapStateToProps, null)(GameBoard)