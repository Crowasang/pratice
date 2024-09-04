const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.main-nav');

btn.addEventListener('click', () => {
    nav.classList.toggle('open-menu');
    if(btn.innerHTML === 'Menu'){
        btn.innerHTML = 'Close';
    }else {
        btn.innerHTML = 'Menu';
    }
});

/* Lightbox Luminous */
// new LuminousGallery(document.querySelectorAll(".grid-gallery"));
new LuminousGallery(document.querySelectorAll('.p-gallery'), {}, {
    caption: function(trigger) {
      return trigger.querySelector('p').getAttribute('alt');
    }
  });
  
  /* Fadeup Animation AOS */
  // AOS.init();
  AOS.init({
    duration: 1000
  });
  
  