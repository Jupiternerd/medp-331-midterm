export default function generateHeader() {
    return (`
        <div id="header-window" class="window">
  <div class="title-bar">
    <div class="title-bar-text">Navigator</div>
    <div class="title-bar-controls">
      <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close"></button>
    </div>
  </div>
  <div class="header-buttons-container">
    <button id="home-butt">
      <img src="/Home.gif" alt="A old geo-city Home spinning gif" width="40px" height="40px">
      <p>Home</p>
    </button>
    <button id="globe-butt">
      <img src="/Globe.gif" alt="A old geo-city Globe spinning gif" width="40px" height="40px">
      <p>Web</p>
    </button>
    <button id="donate-butt">
      <img src="/Donate.gif" alt="A old geo-city $ spinning gif" width="40px" height="40px">
      <p>Donate</p>
    </button>
  </div>
</div>
    `)
}