var d1 = document.getElementById('section1');
var d2 = document.getElementById('section2');
var d3 = document.getElementById('section3');
var d4 = document.getElementById('section4');
var d5 = document.getElementById('section5');
var photo = document.querySelector('.photo');
var introduction = document.querySelector('.introduction');
var year1 = document.getElementsByClassName('year')[0];
var year2 = document.getElementsByClassName('year')[1];
var info1 = document.getElementsByClassName('info')[0];
var info2 = document.getElementsByClassName('info')[1];
var Icon1 = document.getElementsByClassName('skillIcons')[0];
var Icon2 = document.getElementsByClassName('skillIcons')[1];
var Icon3 = document.getElementsByClassName('skillIcons')[2];
var Icon4 = document.getElementsByClassName('skillIcons')[3];
var d6 = document.getElementById('section6');
var title = document.querySelector('.title');
var message1 = document.getElementsByClassName('contact-message')[0];
var message2 = document.getElementsByClassName('contact-message')[1];
var viewportHeight =window.innerHeight;
var viewportWidth = window.innerWidth;
var d2Top = viewportHeight;
var d3Top = 6*viewportHeight;
var d4Top = 8*viewportHeight;
var d5Top = 10*viewportHeight;
var d6Top = 12*viewportHeight;
var card1 = document.getElementById('card1');
var card2 = document.getElementById('card2');
var cards = document.getElementsByClassName('card');
var cardIndex= 1;
//resize event
window.onresize = resize;
function resize(){
    viewportHeight = window.innerHeight;
    viewportWidth = window.innerWidth;
    if(viewportWidth<=750){
        showCards(cardIndex);
    }else{
        cards[0].style.display='block';
        cards[1].style.display = 'block';
    }
}
//scroll event;
window.addEventListener('scroll',function(){
    var h = window.scrollY;
    resizeAninmation(h);
    fixedElement(h,viewportHeight,d2,100,'vh');
    fixedElement(h,6*viewportHeight,d3,600,'vh');
    fixedElement(h,9*viewportHeight,d4,900,'vh');
    fixedElement(h,13*viewportHeight,d5,1300,'vh');
    fixedElement(h,16*viewportHeight,d6,1600,'vh');
});
//anime update
function updateStyle(h,start,end,valueStart,valueEnd,suffix){
    if(h<=start){
        return `${valueStart}`;
    }else if(h>=end){
        return `${valueEnd}`;
    }else{
        var scrollRange = end - start;
        var process = valueEnd - valueStart;
        var pos = h - start;
        var percentage = pos*process/scrollRange+valueStart;
        str = `${Math.round(percentage)}`+suffix;
        console.log('current'+str)
        return str;
    }
}
//fixed divs
function fixedElement(h,animeStart,element,elementTop,suffix){
    // small than start: 
    //bigger/equal start:fixed
    if(h<animeStart){
        element.style.position = 'absolute';
        element.style.top = elementTop.toString()+suffix;
    }else{
        element.style.position = 'fixed';
        element.style.top = '0';
    }
}
function resizeAninmation(h){
    if(viewportWidth<=750){
        photo.style.opacity = updateStyle(h,0,viewportHeight,10,100,'%');
        photo.style.borderRadius = updateStyle(h,viewportHeight,2*viewportHeight,0,50,'%');
        photo.style.width = updateStyle(h,viewportHeight,2*viewportHeight,100,35,'vh');
        photo.style.height = updateStyle(h,viewportHeight,2*viewportHeight,100,35,'vh');
        introduction.style.opacity = updateStyle(h,2*viewportHeight,3*viewportHeight,0,1,'%');
        photo.style.transform = `translateY(${updateStyle(h,2*viewportHeight,3*viewportHeight,0,-60,'%')})`;
        year1.style.transform = `translateX(${updateStyle(h,4*viewportHeight,6*viewportHeight,100,0,'vh')})`;
        info1.style.transform = `translateX(${updateStyle(h,6*viewportHeight,6.5*viewportHeight,100,0,'vw')})`;
        year2.style.transform = `translateX(${updateStyle(h,6.5*viewportHeight,7*viewportHeight,100,0,'vh')})`;
        info2.style.transform = `translateX(${updateStyle(h,7*viewportHeight,7.5*viewportHeight,100,0,'vw')})`;
        Icon1.style.opacity = updateStyle(h,8*viewportHeight,8.5*viewportHeight,0,100,'%');
        Icon2.style.opacity = updateStyle(h,8.6*viewportHeight,9*viewportHeight,0,100,'%');
        Icon3.style.opacity = updateStyle(h,9*viewportHeight,9.5*viewportHeight,0,100,'%');
        Icon4.style.opacity = updateStyle(h,9.5*viewportHeight,10*viewportHeight,0,100,'%');
        title.style.opacity = updateStyle(h,15*viewportHeight,16*viewportHeight,0,100,'%');
        message1.style.opacity = updateStyle(h,16.2*viewportHeight,16.8*viewportHeight,0,100,'%');
    }else{
        photo.style.opacity = updateStyle(h,0,viewportHeight,10,100,'%');
        photo.style.borderRadius = updateStyle(h,viewportHeight,2*viewportHeight,0,50,'%');
        photo.style.width = updateStyle(h,viewportHeight,2*viewportHeight,100,35,'vh');
        photo.style.height = updateStyle(h,viewportHeight,2*viewportHeight,100,35,'vh');
        photo.style.transform = `translateX(${updateStyle(h,2*viewportHeight,3*viewportHeight,0,-80,'%')})`;
        introduction.style.opacity = updateStyle(h,2*viewportHeight,3*viewportHeight,0,100,'%');
        year1.style.transform = `translateX(${updateStyle(h,4*viewportHeight,6*viewportHeight,-100,0,'vw')})`;
        info1.style.transform = `translateX(${updateStyle(h,4*viewportHeight,6*viewportHeight,100,0,'vw')})`;
        year2.style.transform = `translateX(${updateStyle(h,6*viewportHeight,7*viewportHeight,-100,0,'vw')})`;
        info2.style.transform = `translateX(${updateStyle(h,6*viewportHeight,7*viewportHeight,100,0,'vw')})`;
        Icon1.style.opacity = updateStyle(h,8*viewportHeight,9.5*viewportHeight,0,100,'%');
        Icon2.style.opacity = updateStyle(h,8*viewportHeight,9.5*viewportHeight,0,100,'%');
        Icon3.style.opacity = updateStyle(h,8*viewportHeight,9.5*viewportHeight,0,100,'%');
        Icon4.style.opacity = updateStyle(h,8*viewportHeight,9.5*viewportHeight,0,100,'%');
        title.style.opacity = updateStyle(h,15*viewportHeight,16*viewportHeight,0,100,'%');
        message1.style.opacity = updateStyle(h,16.2*viewportHeight,16.8*viewportHeight,0,100,'%');
    }
}
function changeCard(n){
    showCards(cardIndex+=n);
}
function showCards(n){
    if(n>cards.length){
        cardIndex = 1;
    }
    if(n<1){
        cardIndex = cards.length;
    }
    for(var i = 0; i<cards.length; i++){
        cards[i].style.display = 'none';
    }
    cards[cardIndex-1].style.display = 'block';
}
window.addEventListener('load',()=>{
    var preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');
    window.scrollTo(0,0);
    document.body.style.overflowY = "visible";
    enableScroll();
})
window.onunload = function(e){
    window.scrollTo(0,0);
}
disableScroll();
document.body.style.overflowY = "hidden";
function preventDefault(e){
    e.preventDefault();
  }
  
  function disableScroll(){
      document.body.addEventListener('touchmove', preventDefault, { passive: false });
  }
  function enableScroll(){
      document.body.removeEventListener('touchmove', preventDefault, { passive: false });
  }