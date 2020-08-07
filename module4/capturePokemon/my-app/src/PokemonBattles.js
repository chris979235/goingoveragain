import React, {useState, useEffect,} from 'react'
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
      setYourPokemonArray([res.data.card])
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
  //has to be in fights function 
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
      if(hp<=0){
        const filterid=prev.id
        setYourPokemonArray(prev=>{
          console.log(123456,[...prev.filter(pokemons=>pokemons.id!==filterid)])
         return [...prev.filter(pokemons=>pokemons.id!==filterid)]
         ////filter should be filtering out in123456, but still showing in 9900
        })
        const filteredArray = yourPokemonArray.filter(pokemons=>pokemons.id!==filterid)
        console.log(9900,yourPokemonArray)
          if (filteredArray.length === 0) {
            alert('congradulations all your pokeomon have died, you must not be a very good trainer')
            disableButtons()
            return  {}
          }
          return filteredArray[Math.floor(Math.random()*filteredArray.length)]
        }
        return {
          ...prev,
          hp
        }
      })
    }
    
  function disableButtons(){
    const disabledButton=document.getElementsByClassName('disableOnLoss')
    for(let i=0; i<disabledButton.length; i++){
      disabledButton[i].disabled=true
    }
  }  
 

  function capture(...second){
    var ids =[]
    for(let i=0; i<yourPokemonArray.length; i++){
      ids.push(yourPokemonArray[i].id)
    }

    if (parseInt(second[0].hp)<=60 && !ids.includes(second[0].id)){
      setYourPokemonArray(prev=>[...prev, second[0]])
      setSecondPokemon(pokemon[Math.floor(Math.random()*pokemon.length)])
      alert(`you have caught ${second[0].name}`)
    }
    else if(parseInt(second[0].hp)>60){
      alert(`${second[0].name} hp must be less than 60`)
    }
    
    else alert(`you have already caught ${second[0].name}`)
  }

 

  function refreshing(){
    window.location.href = '/'
  }
  
  const yourArray=yourPokemonArray.map(function(singles){
  return <div className='pokelist'> <h1>{singles.name}</h1> <h2>HP:{singles.hp}</h2> </div>
  })


  return (
    <div>
      { toggle?
        <div className='texty'>
          <h1>Congradulations trainer you have chosen {yourBattlePokemonObject.name}</h1> 
          <h2>Go forth and bring chaos and destrucion upon your enemies and enslave... </h2>
            <h2>capture as many monsters (innocent creatures) as you can!</h2>
          <button onClick={toggled} className='continueButton'>continue on your adventure</button>
        </div>
        
        :
        
        <div>
          <img src={randomImage} className='randomImage'/>
          <button onClick={getRandom} className='button disableOnLoss' > walk</button>
          <button onClick={fights} className='button1 disableOnLoss' >fight</button>
          <button onClick={()=>capture(secondPokemon)} className='pokeball disableOnLoss'>
            throw Pokeball</button>
          <button onClick={refreshing} className='button2'>try again</button>


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

          <h1 className='nextFighter'>Next Fighter</h1>
          <div className='pokelist'>
          {yourArray}
          </div>
        </div>

      }
    </div>
  )
}
