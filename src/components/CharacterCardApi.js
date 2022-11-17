const CharacterCardApi = (c) => {
  return (
    <div >
      <div className="probamos">
        <img className="ImgCharacter" src={c.image}></img>
        <h3>{c.name}</h3>
        </div>
    </div>
  )
}
export default CharacterCardApi