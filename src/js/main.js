document.addEventListener("DOMContentLoaded", function(event) {
  const mobal = document.querySelector('.mobal');
  const mobalBtn = document.querySelectorAll('[data-toggle=mobal]');
  const closeBtn = document.querySelector('.mobal__close')
  const switchMobal = () =>{
     mobal.classList.toggle('mobal--visible');
  }
  
  mobalBtn.forEach(element =>{
    element.addEventListener('click', switchMobal);
  });
  closeBtn.addEventListener('click', switchMobal);
});