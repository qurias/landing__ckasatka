

$(window).scroll(function() {
  if(window.pageYOffset > 50)  {
    $('.menu').css('background-color','white')
    $('.menu__item').css('color','black')
  }
  if(window.pageYOffset < 50)  {
    $('.menu').css('background-color','rgba(255, 255, 255, 0)')
    $('.menu__item').css('color','white')
  }
})

let bg = document.querySelectorAll('.mini-kos');
for (let i = 0; i < bg.length; i++){
    window.addEventListener('mousemove', function(e) { 
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;     
        bg[i].style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    });    
}