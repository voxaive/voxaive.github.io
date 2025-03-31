const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) { // Si el scroll es mayor a 50px
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    })
