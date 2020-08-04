import React from 'react'
import {Switch, Route} from 'react-router-dom'
import PokemonCatch from './PokemonCatch'
import PokemonBattles from './PokemonBattles'

export default function App() {
  return (

    
    <div>
      <Switch>
        <Route exact path='/'>
          <PokemonCatch/>
        </Route>

        <Route path='/battle/:pokeId'>
          <PokemonBattles/>
        </Route>

      </Switch>
    </div>
  )
}
