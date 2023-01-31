import React, { useState } from "react"
import { getRandomElementFromArray } from "./util"
import { sampleSize } from "lodash"
import charData from "./names.json"
import { CurrentScoreDisplay } from "./components/CurrentScoreDisplay"
import { TopScoreDisplay } from "./components/TopScoreDisplay"
import { CharacterOptionsDisplay } from "./components/CharacterOptionsDisplay"
import { StartGameDisplay } from "./components/StartGameDisplay"
import { TopBar } from "./components/TopBar"
import { BottomBar } from "./components/BottomBar"

// all char arrays will store instances of the field "name" of the characters in names.json
const allChars = getAllChars()
let guessedChars = []
let availChars = [...allChars]
let namesToRawName = {}
for (const char of charData.characters) {
  namesToRawName[char.name] = char.rawName
}

function getAllChars() {
  //return ["shizue", "mario", "luigi", "bowser", "ridley"]
  return charData.characters.map((char) => char.name)
}

export function MemoryGame() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [notPlayingStatus, setNotPlayingStatus] = useState("first")
  const [lastIncorrectGuess, setLastIncorrectGuess] = useState(undefined)
  const [currScore, setCurrScore] = useState(0)
  const [topScore, setTopScore] = useState(
    localStorage.getItem("topScore") || 0
  )
  const [currShownChars, setCurrShownChars] = useState(getCharOptions())

  function getCharOptions() {
    const opts = sampleSize(allChars, 3)
    if (opts.every((name) => guessedChars.includes(name))) {
      const i = Math.floor(3 * Math.random())
      opts[i] = getRandomElementFromArray(availChars)
    }
    return opts
  }

  function startGame() {
    guessedChars = []
    availChars = [...allChars]
    setCurrScore(0)
    setIsPlaying(true)
  }

  function tryStartRound() {
    if (availChars.length === 0) {
      endGame(true)
    } else {
      setCurrShownChars(getCharOptions())
    }
  }

  function chooseChar(name) {
    if (!guessedChars.includes(name)) {
      guessedChars.push(name)
      availChars = availChars.filter((n) => n !== name)
      if (currScore + 1 > topScore) {
        localStorage.setItem("topScore", currScore + 1)
        setTopScore(currScore + 1)
      }
      setCurrScore((s) => s + 1)
      tryStartRound()
    } else {
      setLastIncorrectGuess(name)
      endGame(false)
    }
  }

  function endGame(didWin) {
    setIsPlaying(false)
    if (didWin) {
      setNotPlayingStatus("win")
    } else {
      setNotPlayingStatus("lose")
    }
  }

  return (
    <div className="main-container flex-col">
      <TopBar />
      <div className="scores-container flex-col center">
        <CurrentScoreDisplay score={currScore} />
        <TopScoreDisplay score={localStorage.getItem("topScore") || 0} />
      </div>
      <div className="game-container flex-col center">
        {isPlaying ? (
          <CharacterOptionsDisplay
            chars={currShownChars}
            rawNames={currShownChars.map((name) => namesToRawName[name])}
            chooseFunction={chooseChar}
          />
        ) : (
          <StartGameDisplay
            startGameFunction={startGame}
            mode={notPlayingStatus}
            char={namesToRawName[lastIncorrectGuess]}
            score={currScore}
          />
        )}
      </div>
      <BottomBar />
    </div>
  )
}
