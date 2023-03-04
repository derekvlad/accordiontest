const accItem = document.querySelectorAll('.accordion-item');
const titleItems = document.querySelectorAll(".accordion-title");
const textItems = document.querySelectorAll(".accordion-text");


accItem.forEach(item => {
   let titleItemHeight =  item.children[0].offsetHeight
   let textItemHeight =  item.children[1].offsetHeight
   item.style.height = titleItemHeight + 'px'
   item.addEventListener('click', () => {
      
      accItem.forEach(accItems => {
         accItems.classList.remove("active")
         accItems.style.height = titleItemHeight + 'px'

      });
      item.classList.add('active');
      item.style.height = titleItemHeight + textItemHeight + 'px';
   });

});


// Прогресс бар при скроле 
const progressBar = document.querySelector('.progress-bar')
function progressBarFunction(){
   let scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
   let heightWindow = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   console.log(scrollPosition);
   console.log(heightWindow);
   let scrolled = scrollPosition / heightWindow * 100;
   console.log(scrolled);
   progressBar.style.width = scrolled + '%';
  
   setProgres(scrolled)
};


window.addEventListener('scroll',progressBarFunction);



const circle = document.querySelector('.progress-ring--circle')
const radis = circle.r.baseVal.value;
console.log(radis) 
const circumferense = 2 * Math.PI * radis;
console.log(circumferense)
circle.style.strokeDasharray = `${circumferense} ${circumferense}`
circle.style.strokeDashoffset = circumferense;

function setProgres(percent){
   const offset = circumferense - percent/100 *circumferense;
   circle.style.strokeDashoffset = offset;

}







