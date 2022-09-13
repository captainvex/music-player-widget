/** @jsx dom */

function App() {
  return (
    <div class="music-player flex-column">
      <Slider />
      <Playlist />
    </div>
  );
}

document.getElementById("root").appendChild(<App />);

function handleResize() {
  const vH = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vH", `${vH}px`);
}

handleResize();
window.addEventListener("resize", handleResize);
window.addEventListener("orientationchange", handleResize);
