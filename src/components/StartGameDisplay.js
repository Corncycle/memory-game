export function StartGameDisplay(props) {
  const firstOpen = {
    startGameMessage:
      "Try to select every Smash Bros. Ultimate character without repeats!",
    startButtonMessage: "Start game",
  }

  const lostGame = {
    startGameMessage:
      "You already picked " +
      props.char +
      ". You chose " +
      props.score +
      " character" +
      (props.score === 1 ? "" : "s") +
      " successfully.",
    startButtonMessage: "Try again",
  }

  const wonGame = {
    startGameMessage:
      "You picked all " + props.score + " characters without repeats!",
    startButtonMessage: "Play again",
  }

  function pickInfo(mode) {
    switch (mode) {
      case "first":
        return firstOpen
      case "win":
        return wonGame
      case "lose":
        return lostGame
      default:
        return {
          startGameMessage: 'Unexpected mode "' + mode + '"',
          startButtonMessage: "Start game",
        }
    }
  }

  const info = pickInfo(props.mode)

  return (
    <div>
      <span>{info.startGameMessage}</span>
      <button onClick={props.startGameFunction}>
        {info.startButtonMessage}
      </button>
    </div>
  )
}
