// var swiper = new Swiper('.swiper-container', {
//   autoplay: {
//       delay: 2000, // 2 seconds delay between slides
//       disableOnInteraction: false, // Prevent autoplay stopping on user interaction
//   },
//   pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//   },
// });
const container = document.querySelector('.container');
const btns = document.querySelectorAll('.swiper-slide')
const imgList = ["1","2","3","4"]

let index=0
btns.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('btn-left')){
            index--;
            if(index<0){
                index = imgList.length-1;
            }
            container.style.background = `url("Imgs/${imgList[index]}.jpg") center/cover fixed no-repeat`
        }
        else{
            index++;
            if(index===imgList.length){
                index = 0;
            }
            container.style.background = `url("Imgs/${imgList[index]}.jpg") center/cover fixed no-repeat`
        }
    })
})

