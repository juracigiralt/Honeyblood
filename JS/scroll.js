let ultimoScroll = 0

window.addEventListener("scroll", function(event){
    let scrollActual =  window.scrollY;
    console.log(scrollActual)

    if (scrollActual > 400){
        console.log("esta bajando")
        esconderportada()
        ultimoScroll = scrollActual
    }
    if (scrollActual < 400){
        aparecerportada()
        ultimoScroll = scrollActual
    }
    if (scrollActual > 400){
        aparecermenu()
        aparecermain()
        ultimoScroll = scrollActual
    }
    if (scrollActual < 400){
        escondermenu()
        ultimoScroll = scrollActual
    }
    if (scrollActual === 0){
        escondermenu()
        ultimoScroll = scrollActual
    }
    if (scrollActual > 400){
        startanimation()
    }


})
function esconderportada(){
    logo = document.getElementById("logo")
    header = document.getElementById("miel")
    header.style.opacity = 0
    logo.style.opacity = 0
    abeja = document.getElementById("abeja")
    abeja.style.opacity = 0
    abeja = document.getElementById("abeja2")
    abeja.style.opacity = 0
}
function aparecerportada(){
    logo = document.getElementById("logo")
    header = document.getElementById("miel")
    header.style.opacity = 1
    logo.style.opacity = 1 
    abeja = document.getElementById("abeja2")
    abeja.style.opacity = 1
    abeja = document.getElementById("abeja")
    abeja.style.opacity = 1
}
function aparecermenu(){
    menu = document.getElementById("menuid")
    menu.style.opacity = 1
    main = document.getElementById("main")
    main.style.opacity = 1
}
function escondermenu(){
    menu = document.getElementById("menuid")
    menu.style.opacity = 0
    main = document.getElementById("main")
    main.style.opacity = 0
}

