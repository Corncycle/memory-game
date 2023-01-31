export function SmashButton(props) {
  return (
    <div className="smash-button-border" onClick={props.onClick}>
      <button onClick={props.onClick} className="smash-button">
        {props.text}
      </button>
    </div>
  )
}
