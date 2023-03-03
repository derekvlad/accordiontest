const accItem = document.querySelectorAll('.accordion-item');
const titleItems = document.querySelectorAll(".accordion-title");
const textItems = document.querySelectorAll(".accordion-text");


accItem.forEach(item => {
   let titleItemHeight =  item.children[0].offsetHeight
   console.log(titleItemHeight)
   let textItemHeight =  item.children[1].offsetHeight
   console.log(textItemHeight)
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



