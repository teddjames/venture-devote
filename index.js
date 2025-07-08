// MARQUEE
document.addEventListener('DOMContentLoaded', () => {
  const marquee = document.querySelector('.marquee__inner');
  // duplicate so it scrolls continuously
  marquee.innerHTML += marquee.innerHTML + marquee.innerHTML + marquee.innerHTML;

  let offset = 0;
  function loop() {
    offset = (offset + 1) % (marquee.scrollWidth / 2);
    marquee.style.transform = `translateX(-${offset}px)`;
    requestAnimationFrame(loop);
  }
  loop();
});
