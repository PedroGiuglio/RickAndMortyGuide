import { useEffect, useState } from "react";
import CharacterCardApi from "./CharacterCardApi";

const CharacterList = () => {

  const [Character, setCharacter] = useState ([]);

  useEffect(() => {
    getCharacters();
  }, [])
  

  const getCharacters = () =>{
    const URL = 'https://rickandmortyapi.com/api/character/'
    fetch (URL)
    .then( response => response.json() )
    .then( data => {
      console.log(data.results)
      setCharacter(data.results)
    })
  }



  return (
    <div className="characterList">
      {Character.map( c => <CharacterCardApi key={c.url} {...c}></CharacterCardApi>)}
    </div>
  )
}
export default CharacterList