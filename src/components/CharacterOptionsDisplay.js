import { CharacterCard } from "./CharacterCard"

export function CharacterOptionsDisplay(props) {
  return (
    <div>
      {props.chars.map((char, i) => (
        <CharacterCard
          name={char}
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
