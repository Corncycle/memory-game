//const imgs = require.context("../images/thumbnails", false)
//import shizue from "../images/thumbnails/shizue.png"

export function CharacterCard(props) {
  return (
    <div className="character-card-container">
      <button className="character-card-button" onClick={props.onClick}>
        <img src={props.img} alt={props.rawName}></img>
      </button>
      <span className="character-card-caption-border" onClick={props.onClick}>
        <button
          onClick={props.onClick}
          className="character-card-caption"
          dangerouslySetInnerHTML={{ __html: props.rawName }}
        ></button>
      </span>
    </div>
  )
}
