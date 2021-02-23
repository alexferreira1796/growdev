window.onload = function() {
  const media = window.matchMedia('(max-width: 768px)');
  
  function initAnime() {
    const links = document.querySelectorAll('.js-anime');
    function handleAnime(e) {
      links.forEach((item) => {
        item.querySelector('i').classList.remove('anima');
      });
      e.currentTarget.querySelector('i').classList.add('anima');
    }
    links.forEach(item => {
      item.addEventListener('mouseover', handleAnime)
    });
  }
  initAnime();

  function initSection() {
    const buttons = document.querySelectorAll('.btn');
    const sections = document.querySelectorAll('.content');
    const handleClick = (i) => {
      sections.forEach((item) => {
        item.classList.remove('active');
      });
      sections[i].classList.add('active');
    }
    buttons.forEach((item, index) => {
      item.addEventListener('click', function() {
        handleClick(index)
      });
    });
  }
  initSection();

  function initScroll() {
    const links = document.querySelectorAll('.btn');
    const handleScroll = (e) => {
      e.preventDefault();
      const data = e.currentTarget.getAttribute('data-id');
      const section = document.querySelector(`#${data}`);
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    links.forEach((item) => {
      item.addEventListener('click', handleScroll);
    });
  }
  media.matches ? initScroll() : '';
}
