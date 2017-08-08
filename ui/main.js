console.log('Loaded!');

//To change the text in html

var element = document.getElementById('main-text');
element.innerHTML ='Welcome Click Me';


var img= document.getElementById('sid');
var marginLeft=0;
function moveRight(){
    
    marginLeft=marginLeft + 1;
    img.style.marginLeft= marginLeft + 'px';
    element.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
   var interval = setInterval(moveRight, 50);
  
    
};

element.onclick =function(){
    var interval1 = setInterval(moveRight, 50);
};