const nav = document.querySelector('.BarraN');
const nav2 = document.querySelector('.cajaMenuRep');
window.addEventListener('scroll', function(){
    nav.classList.toggle('active', window.scrollY>0)
    nav2.classList.toggle('active', window.scrollY>0)
})

