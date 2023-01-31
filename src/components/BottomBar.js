export function BottomBar(props) {
  return (
    <div className="bottom-bar-container">
      <ul className="flex credits-list">
        <li>
          Assets scraped from{" "}
          <a href="https://www.smashbros.com/">smashbros.com</a>
        </li>
        <li>•</li>
        <li>
          <a href="https://github.com/Corncycle/memory-game">Source repo</a>
        </li>
        <li>•</li>
        <li>
          <a href="https://fontmeme.com/fonts/super-smash-font/">Font source</a>
        </li>
      </ul>
    </div>
  )
}
