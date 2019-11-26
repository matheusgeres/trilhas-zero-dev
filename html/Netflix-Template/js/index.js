var intervalo;

function scrollDireita(){
  intervalo = setInterval(function(){ document.getElementById('scroller').scrollLeft += 1 }  , 5);
};
function scrollEsquerda(){
  intervalo = setInterval(function(){ document.getElementById('scroller').scrollLeft -= 1 }  , 5);
};
function clearScroll(){
  clearInterval(intervalo);
};

console.log("I'm running!")
// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    
    $( "#container-node" ).load( "videos/react.html" );
    $( "#container-react" ).load( "videos/react-native.html" );
    $( "#container-react-native" ).load( "videos/node.html" );
});