document.querySelector('.site').style.display = "none"
// let myvideo = document.querySelector("#myvideo")

// console.log(myvideo)
// let i = 1

// myvideo.addEventListener('ended', ()=>{
//     i++
//     if( i > 4) i = 1
//     myvideo.src= `./videos/video${i}.mp4`
//     myvideo.play()
// } )

AOS.init();

document.querySelectorAll('.dropdown-toggle').forEach(ele =>{
    ele.addEventListener('mouseenter', ()=>{
        ele.parentNode.querySelector('.dropdown-menu').classList.toggle('show')
    })
})
document.querySelectorAll('.dropdown-toggle').forEach(ele =>{
    ele.addEventListener('mouseleave', ()=>{
        ele.parentNode.querySelector('.dropdown-menu').classList.toggle('show')
    })
})

document.querySelectorAll('.dropdown-menu').forEach(ele =>{
    ele.addEventListener('mouseleave', function(){
        this.classList.toggle('show')
    })
})
document.querySelectorAll('.dropdown-menu').forEach(ele =>{
    ele.addEventListener('mouseenter', function(){
        this.classList.toggle('show')
    })
})




  document.querySelector('.navbar__manu_open').addEventListener('click', function(){
      document.querySelector('.navbar__mobile').classList.toggle('navbar-show')
  })
  document.querySelector('.navbar__manu_close').addEventListener('click', function(){
    document.querySelector('.navbar__mobile').classList.toggle('navbar-show')
})

