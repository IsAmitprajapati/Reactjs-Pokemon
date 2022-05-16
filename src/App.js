import logo from './logo.svg';
import './App.css';
import Search from './Component/Search';
import Card from './Component/Card';
import React, { useEffect } from "react"

function App() {
  const [dataName,setdataName] = React.useState([]);
  const [ searchName,setSearchName] = React.useState("")
  
  //https://pokeapi.co/api/v2/pokemon/
  React.useEffect(()=>{
    const url = fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
    .then(res => res.json())
    .then(data => setdataName(data.results))
  },[])    
    


  const card = dataName.filter((val)=>{
      if(searchName == ""){
        return val
      }
      else if(val.name.toLowerCase().includes(searchName.toLowerCase())){
        return val
      }
  })
  .map((element,index)=>{    
   return(
        <Card
          name = {element.name}
          img  = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index+1}.svg`}
          id = {element}
          key = {element.name}
          
        />
   )        
  })


  return (
      <>
        <Search 
          search = {(event)=>setSearchName(event.target.value)}
        />
        <hr/>
        <div className='flex flex-wrap justify-evenly items-center'>
            {card}
        </div>
      </>
  );
}

export default App;
