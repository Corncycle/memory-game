import { CharacterCard } from "./CharacterCard"

export function CharacterOptionsDisplay(props) {
  return (
    <div className="game-area-container game-cards-container flex">
      {props.chars.map((char, i) => (
        <CharacterCard
          name={char}
          img={props.charsImgs[i]}
          rawName={props.rawNames[i]}
          key={i}
          onClick={() => {
            props.chooseFunction(char)
          }}
        />
      ))}
    </div>
  )
}
