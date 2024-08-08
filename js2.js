let mainHeader = document.querySelector(".header")
let image = document.querySelectorAll(".location-section-image")
let saleSection = document.querySelectorAll('.sale-section-info-part')
// let infoPart = document.querySelector(".sale-section-info")
// let saleBtn = document.querySelector(".sale-btn")
let myBtn = document.querySelector(".btn")
let closeBtn = document.querySelector(".close")
let menus = document.querySelector(".header-right ul")
let priceBtn = document.querySelector(".list-todo-links-price")

document.addEventListener("scroll", function(){

    // console.log('ajaja');

    if(document.documentElement.scrollTop > 0){
        console.log('object');
        mainHeader.classList.add("sticky-header")
    }else{
        mainHeader.classList.remove("sticky-header")
    }
})


myBtn.addEventListener("click", function(){
    menus.classList.add("display")
})

closeBtn.addEventListener("click", function(){
    menus.classList.remove('display')
})

priceBtn.addEventListener('click', function(){
    console.log('ajaja');
    if(menus.display = "display"){
        console.log('majaja');
        menus.classList.remove('display')
    }
})



image.forEach(function(img){
    img.addEventListener("click", function(event){
        console.log(event);
        let attribute = img.getAttribute('src')
        for(let i = 0 ; i < image.length ; i++){
            console.log('ajaja');
            if(event.target === image[i]){
                if(attribute === '../VmessImage/usa.jpg'){
                    for(let i = 0 ; i < saleSection.length ; i++){
                        if(saleSection[i].getAttribute('data-index') === 'usa'){
                            saleSection[i].style.display = 'block'
                        }else{
                            saleSection[i].style.display = 'none'
                        }
                    }
                    
                }else if (attribute === '../VmessImage/Germany Flag.png'){
                    for(let i = 0 ; i < saleSection.length ; i++){
                        if(saleSection[i].getAttribute('data-index') === 'germany'){
                            saleSection[i].style.display = 'block'
                        }else{
                            saleSection[i].style.display = 'none'
                        }
                    }
                }else if (attribute === '../VmessImage/London Flag.jpg'){
                    for(let i = 0 ; i < saleSection.length ; i++){
                        if(saleSection[i].getAttribute('data-index') === 'london'){
                            saleSection[i].style.display = 'block' 
                        }else{
                            saleSection[i].style.display = 'none'
                        }
                    }
                }
            }
        }

        // if(saleSection.style.display === "flex"){
        //     saleSection.style.display = 'none'
        // }else{
        //     saleSection.style.display = 'flex'
        // }
})
})

// saleSectionBtnOne.addEventListener("click", function(){
//     if(infoPart.style.display === "block"){
//         infoPart.style.display = "none"
//     }else{
//         infoPart.style.display = "block"
//     }
//     if(saleBtn.style.display === "block"){
//         saleBtn.style.display = "none"
//     }else{
//         saleBtn.style.display = "block"
//     }
// })