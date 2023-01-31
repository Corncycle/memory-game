import { SmashButton } from "./SmashButton"

export function StartGameDisplay(props) {
  const firstOpen = {
    startGameElements: (
      <span className="smash-text">
        {"Try to select every Smash Bros. Ultimate character without repeats!"}
      </span>
    ),
    startGameMessage:
      "Try to select every Smash Bros. Ultimate character without repeats!",
    startButtonMessage: "Start game",
  }

  const lostGame = {
    startGameElements: (
      <div className="start-game-message-container flex-col center smash-text">
        <span>{"You already picked " + props.char + "!"}</span>
        <span>
          {"You chose " +
            props.score +
            " character" +
            (props.score === 1 ? "" : "s") +
            " successfully."}
        </span>
      </div>
    ),
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
    startGameElements: (
      <span className="smash-text">
        {"You picked all " + props.score + " characters without repeats!"}
      </span>
    ),
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
          startGameElements: (
            <span className="smash-text">
              {"Unexpected mode " + mode + '"'}
            </span>
          ),
          startGameMessage: 'Unexpected mode "' + mode + '"',
          startButtonMessage: "Start game",
        }
    }
  }

  const info = pickInfo(props.mode)

  return (
    <div className="game-area-container start-game-container flex-col center">
      {info.startGameElements}
      <SmashButton
        onClick={props.startGameFunction}
        text={info.startButtonMessage}
      ></SmashButton>
    </div>
  )
}
