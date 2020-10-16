document.querySelectorAll('.front').forEach(e => e.addEventListener('click', init))

function init() {
   if(this.nextElementSibling.classList.contains('inView')){
    this.querySelector('a').style.transform = 'scale(3) rotate(0deg)';

    this.nextElementSibling.style.transform = 'translateX(-150%)';
    setTimeout(() => {this.nextElementSibling.style.display = 'none'; this.nextElementSibling.classList.remove('inView')}, 600)
   } else {
    this.querySelector('a').style.transform = 'scale(3) rotate(45deg)';

    this.nextElementSibling.style.display ='block';
    this.nextElementSibling.classList.add('inView');
    setTimeout(() => this.nextElementSibling.style.transform = 'translateX(0)', 500)
   }
}