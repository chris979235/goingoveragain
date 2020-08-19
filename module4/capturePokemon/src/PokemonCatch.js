import React, {useState, useEffect} from 'react'
import {Link, Router} from 'react-router-dom'
import PokemonBattles from './PokemonBattles'
import axios from 'axios'


export default function PokemonCatch() {

  const [pokemon, setPokemon]=useState([])
  const [starter, setStarter]=useState([])
  const [toggle, setToggle]=useState(true)
  console.log(pokemon)
  console.log(starter)
  console.log(toggle)

    function getFirstThree(){
      setStarter(pokemon.slice(0,3))
      setToggle(toggle!==toggle)
    }


useEffect(()=>{
axios.get('https://api.pokemontcg.io/v1/cards')
.then(res=>{
 const filtered=res.data.cards.filter(one=>one.supertype!=="Energy"&&one.supertype!=="Trainer"&&one.attacks.every(attack=> attack.damage))
  setPokemon(filtered)
})
},[])

  const starters=starter.map(function(choose){
  return <div className='center'>  
    <p>
      Name: {choose?.name}</p>
  <img src={choose?.imageUrl}/>
<p>hp:{choose?.hp}</p>

<Link to={`/battle/${choose.id}`} className='looklikebutton'>
    i choose {choose.name}
</Link>


</div>
  })

  return (
    <div>
     { toggle? 
     <div className='intro'>
     <h2>welcome trainer to a world filled with brutality where you capture innocent creatures and force them to fight to the death!!!</h2>
    <button onClick={getFirstThree} className='chooseButton'>choose your starter servant... i mean pokemon</button>
    </div>
    :
     <div>
  {starters}
     </div>
  }
  </div>
  )
}


