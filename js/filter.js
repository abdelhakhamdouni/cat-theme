document.querySelector('#search').addEventListener('keyup', function(){
    document.querySelectorAll('.marks-name').forEach(ele =>{
        console.log(ele.innerHTML.includes(this.value))
        if(ele.innerHTML.toLowerCase().includes(this.value.toLowerCase())){
            ele.parentNode.parentNode.parentNode.classList.remove('hide')
        }else{
            ele.parentNode.parentNode.parentNode.classList.add('hide')
        }
    })
})

document.querySelector('#search-button').addEventListener('click', function(){
    this.preventDefault()
    document.querySelector('#search').addEventListener('keyup', function(){
    document.querySelectorAll('.marks-name').forEach(ele =>{
        console.log(ele.innerHTML.includes(this.value))
        if(ele.innerHTML.toLowerCase().includes(this.value.toLowerCase())){
            ele.parentNode.parentNode.parentNode.classList.remove('hide')
        }else{
            ele.parentNode.parentNode.parentNode.classList.add('hide')
        }
    })
})
})

document.querySelector('#secteur_prive').addEventListener('change', function(){
    if(this.checked){
        document.querySelectorAll('.prive').forEach(e =>{

            e.classList.remove("hide")
        })
        document.querySelectorAll('.public').forEach(e =>{

            e.classList.add("hide")
        })
    }
})
document.querySelector('#secteur_public').addEventListener('change', function(){
    if(this.checked){
        document.querySelectorAll('.public').forEach(e =>{

            e.classList.remove("hide")
        })
        document.querySelectorAll('.prive').forEach(e =>{

            e.classList.add("hide")
        })
    }
})