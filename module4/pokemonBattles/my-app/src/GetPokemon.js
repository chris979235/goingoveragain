import React, {useState, useEffect} from 'react'
import axios from 'axios'
export default function GetPokemon() {

  const [pokemon, setPokemon]=useState([])
  const [firstPokemon, setFirstPokemon]=useState({})
  const [secondPokemon, setSecondPokemon]=useState({})
  const isAlive=true
  console.log(222,pokemon)

useEffect(()=>{
axios.get('https://api.pokemontcg.io/v1/cards')
.then(res=>{
 const filtered=res.data.cards.filter(one=>one.supertype!=="Energy"&&one.supertype!=="Trainer"&&one.attacks.every(attack=> attack.damage))
  setPokemon(filtered)
  setFirstPokemon(filtered[Math.floor(Math.random()*filtered.length)])
  setSecondPokemon(filtered[Math.floor(Math.random()*filtered.length)])
})
},[])


function fight(){
  setFirstPokemon(prev => {
    const firstRandom=Math.floor(Math.random()*secondPokemon.attacks.length)
    const hp = parseInt(prev.hp) - parseInt(secondPokemon.attacks[firstRandom].damage)
      if(hp<=0){
      return pokemon[Math.floor(Math.random()*pokemon.length)]
      }
      return {
        ...prev,
        hp
      }
  })
  setSecondPokemon(prev=>{
    const secondRandom=Math.floor(Math.random()*firstPokemon.attacks.length)
    const hp = parseInt(prev.hp) - parseInt(firstPokemon.attacks[secondRandom].damage)
    if(hp<=0){
      return pokemon[Math.floor(Math.random()*pokemon.length)]
    }
    return {
      ...prev,
      hp
    }
  })
}

  


  return (
    <>
    
     <div className='poke1'>
      <p>{firstPokemon?.name}</p>
      <img src={firstPokemon?.imageUrl}/>
  <p>{firstPokemon?.hp}</p>
     </div>

     <div className='poke2'>
      <p>{secondPokemon?.name}</p>
      <img src={secondPokemon?.imageUrl}/>
  <p>{secondPokemon?.hp}</p>
     </div>
 <button onClick={fight} className='button'>fight</button>
    </>
  )
}
