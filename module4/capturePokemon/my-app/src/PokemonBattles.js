import React, {useState, useEffect,useCallback} from 'react'
import {useParams} from 'react-router-dom'
import fire from './images/fire.jpeg'
import water from './images/water.jpeg'
import fight from './images/fight.jpg'
import forest from './images/forest.jpg'
import axios from 'axios'

const images=[fire,water,fight,forest]

export default function PokemonBattles(props) {
  const {pokeId} = useParams()
  const [pokemon, setPokemon]=useState([])
  const [yourBattlePokemonObject, setYourBattlePokemonObject]=useState({hp:0})
  const [yourPokemonArray, setYourPokemonArray]=useState([])
  const [toggle, setToggle]=useState(true)
  const [randomImage, setRandomImage]=useState([fire])
  const [secondPokemon, setSecondPokemon]=useState({})
  
  function getRandom(){
    setRandomImage(images[Math.floor(Math.random()*images.length)])
  }
  
  function toggled(){
    setToggle(toggle!==toggle)
  }

  useEffect(()=> {
    axios.get('https://api.pokemontcg.io/v1/cards/' + pokeId).then(res => {
      setYourBattlePokemonObject(res.data.card)
    })
  },[])
  
  
  useEffect(()=>{
    axios.get('https://api.pokemontcg.io/v1/cards')
    .then(res=>{
      const filtered=res.data.cards.filter(one=>one.supertype!=="Energy"&&one.supertype!=="Trainer"&&one.attacks.every(attack=> attack.damage))
      setPokemon(filtered)
      setSecondPokemon(filtered[Math.floor(Math.random()*filtered.length)])
  })
  },[])

  useEffect(()=>{
    if(yourPokemonArray.length>0&&parseInt(yourBattlePokemonObject.hp)<=0){
        setYourBattlePokemonObject(yourPokemonArray[0])
    }

  },[yourPokemonArray,yourBattlePokemonObject])


  

  

  function fights(){
    setSecondPokemon(prev => {
      const firstRandom=Math.floor(Math.random()*yourBattlePokemonObject.attacks.length)
      const hp = parseInt(prev.hp) - parseInt(yourBattlePokemonObject.attacks[firstRandom].damage)
      if(hp<=0){
      return pokemon[Math.floor(Math.random()*pokemon.length)]
      }
      return {
        ...prev,
        hp
      }
    })
    
    setYourBattlePokemonObject(prev=>{
      const secondRandom=Math.floor(Math.random()*secondPokemon.attacks.length)
      const hp = parseInt(prev.hp) - parseInt(secondPokemon.attacks[secondRandom].damage)
      // if(hp<=0){
      //   return yourPokemonArray[Math.floor(Math.random()*yourPokemonArray.length)]
      // }

      return {
        ...prev,
        hp
      }
    })
  }
 
    console.log(222222,yourPokemonArray)
  console.log(111111,secondPokemon)
    
    
  function capture(...second){
    for(let i=0; i<yourPokemonArray.length; i++){
    var ids=yourPokemonArray[i].id
    }
    if (parseInt(second[0].hp)<=240 && ids!==second[0].id){
      setYourPokemonArray([second[0]])
      alert(`you have caught ${second[0].name}`)
    }
  
   else alert(`you have already caught ${second[0].name}`)
    // if(canCatch===false){
    //   alert('you can only capture a pokemon if its hp is 40 or less')
    // }
  }

  useEffect(()=>{
    console.log(888,yourBattlePokemonObject)
    if(parseInt(yourBattlePokemonObject.hp)<=0){
      setYourPokemonArray(prev=>prev.filter(pokemon=>pokemon.id!==yourBattlePokemonObject.id))
    }
  },[yourBattlePokemonObject])

  
  return (
    <div>
      { toggle?
        <div>
          <h3>congradulations trainer you have chosen {yourBattlePokemonObject.name}, go forth and bring chaos and destrucion upon your enemies and enslave... caputure as many monsters as you can</h3>
          <button onClick={toggled}>continue on your adventure</button>
        </div>
        
        :
        
        <div>
          <img src={randomImage} className='randomImage'/>
          <button onClick={getRandom} className='button'> walk</button>
          <button onClick={fights} className='button1'>fight</button>
          <button onClick={()=>capture(secondPokemon)} className='pokeball'>throw Pokeball</button>

          <div className='poke1'>
          <p className='name'>{yourBattlePokemonObject?.name}</p>
          <img src={yourBattlePokemonObject?.imageUrl}/>
          <p className='hp'>HP:{yourBattlePokemonObject?.hp}</p>
         </div>
    
         <div className='poke2'>
          <p className='name'>{secondPokemon?.name}</p>
          <img src={secondPokemon?.imageUrl}/>
          <p className='hp'>HP:{secondPokemon?.hp}</p>
         </div>
        
        </div>

      }
    </div>
  )
}
// {toggleCapture?a:<button onClick={capture}>throw pokeball</button>}
