const setup = () => {
  const header = document.querySelector('.content');
  const stickyHeader = header.offsetTop;

  window.onscroll = () => {
    if (window.scrollY > stickyHeader) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  };

  if (document.location.hash === '' || document.location.hash === '#') {
    document.location.hash = '#books';
  }
};

export default setup;
