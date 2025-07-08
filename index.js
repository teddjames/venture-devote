// MARQUEE
document.addEventListener('DOMContentLoaded', () => {
  const marquee = document.querySelector('.marquee__inner');
  const content = marquee.innerHTML;
  marquee.innerHTML = content + content + content + content;

  let offset = 0;
  function loop() {
    offset = (offset + 1) % (marquee.scrollWidth / 2);
    marquee.style.transform = `translateX(-${offset}px)`;
    requestAnimationFrame(loop);
  }
  loop();

  // MOBILE NAV TOGGLE
  const hamb = document.getElementById('hamburger');
  const nav  = document.getElementById('main-nav');
  hamb.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
});
