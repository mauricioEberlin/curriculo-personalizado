window.onload = function(e){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');
}

var botaoHamburguer = document.getElementById("btnHamburguer");
var menuEscondido = document.getElementById("menu");

botaoHamburguer.onclick = function(e){
    if(menuEscondido.classList.contains("hidden")){
        menuEscondido.classList.remove("hidden");
        botaoHamburguer.classList.add("active");
    }else{
        menuEscondido.classList.add("hidden");
        botaoHamburguer.classList.remove("active");
    }
}

