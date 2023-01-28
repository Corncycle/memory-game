const imgs = require.context("../images/thumbnails", false)
console.log(imgs("./wolf.png"))

export function CharacterCard(props) {
  return (
    <div className="character-card-container">
      <button className="character-card-button" onClick={props.onClick}>
        <img src={imgs("./" + props.name + ".png")} alt={props.rawName}></img>
      </button>
      <span
        className="character-card-caption"
        dangerouslySetInnerHTML={{ __html: props.rawName }}
      ></span>
    </div>
  )
}
